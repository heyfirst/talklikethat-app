//Create an account on Firebase, and use the credentials they give you in place of the following
var config = {
  apiKey: "AIzaSyDgdjsnsJ05AcgHWpieqmtOYBb9e4F0Xqc",
  authDomain: "talklikethat-app.firebaseapp.com",
  databaseURL: "https://talklikethat-app.firebaseio.com",
  projectId: "talklikethat-app",
  storageBucket: "talklikethat-app.appspot.com",
  messagingSenderId: "522407511113"
};
firebase.initializeApp(config);

var database = firebase.database().ref('request');
var yourVideo = document.getElementById("yourVideo");
var friendsVideo = document.getElementById("friendsVideo");

var requestee;
var yourId = Math.floor(Math.random()*1000000000);
setCurrentID()
//Create an account on Viagenie (http://numb.viagenie.ca/), and replace {'urls': 'turn:numb.viagenie.ca','credential': 'websitebeaver','username': 'websitebeaver@email.com'} with the information from your account
var servers = {
  'iceServers':
  [
      {'urls': 'stun:stun.services.mozilla.com'},
      {'urls': 'stun:stun.l.google.com:19302'},
      {
          "urls": 'turn:numb.viagenie.ca',
          "credential": 'muazkh',
          "username": 'webrtc@live.com'
      }
  ]};
var pc = new RTCPeerConnection(servers);
pc.onicecandidate = (event => {
  if (event.candidate) {
      sendMessage(yourId, JSON.stringify({'ice': event.candidate}))
  }else {
      console.log("Sent to Ice")
  }
});

pc.onaddstream = (event => friendsVideo.srcObject = event.stream);

function sendMessage(senderId, data) {
  var msg = database.push({
      sender: senderId,
      requestee: requestee || null,
      message: data 
  });
  msg.remove();
}

function readMessage(data) {
  var requesteeID = +data.val().requestee;
  var sender = +data.val().sender;
  var msg = JSON.parse(data.val().message);
  
  if (msg.ice != undefined) {
      requestee = requesteeID === yourId ? sender : requesteeID
      console.log([requesteeID, sender, yourId])
  }
  
  if ([requesteeID, sender].indexOf(yourId) === -1) {
      // console.log([requesteeID, sender, yourId])
      console.log('false')
      return
  }
  
  var sender = data.val().sender;
  if (sender != yourId) {
      if (msg.ice != undefined) {
          pc.addIceCandidate(new RTCIceCandidate(msg.ice));
      }
      else if (msg.sdp.type == "offer")
          pc.setRemoteDescription(new RTCSessionDescription(msg.sdp))
            .then(() => pc.createAnswer())
            .then(answer => pc.setLocalDescription(answer))
            .then(() => sendMessage(yourId, JSON.stringify({'sdp': pc.localDescription})));
      else if (msg.sdp.type == "answer")
          pc.setRemoteDescription(new RTCSessionDescription(msg.sdp));
  }
};

database.on('child_added', readMessage);

function showMyFace() {
navigator.mediaDevices.getUserMedia({audio:true, video:true})
  .then(stream => yourVideo.srcObject = stream)
  .then(stream => pc.addStream(stream));
}

function showFriendsFace() {
  pc.createOffer()
      .then(offer => pc.setLocalDescription(offer) )
      .then(() => sendMessage(yourId, JSON.stringify({'sdp': pc.localDescription})) );
}

// SET REQUESTER
function setID() {
  var data = document.getElementById('id').value
  yourId = +data
  setCurrentID()
}

function setCurrentID() {
  document.getElementById('currentID').innerHTML = yourId
}

// SET REQUESTEE
function setRequesteeID() {
  var data = document.getElementById('requestee-id').value
  requestee = +data
  alert('Requestee:' + data)
}