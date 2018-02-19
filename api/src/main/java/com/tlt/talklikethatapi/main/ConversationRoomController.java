package com.tlt.talklikethatapi.main;

import com.tlt.talklikethatapi.model.ConversationRoom;
import com.tlt.talklikethatapi.model.ConversationRoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin
@Controller
@RequestMapping(path = "/room")
public class ConversationRoomController {
    
    @Autowired
    private ConversationRoomRepository roomRepository;
    
    //หา ConversationRoom ทั้งหมด
    @RequestMapping("/")
    public @ResponseBody
    Iterable<ConversationRoom> getRooms() {
        return roomRepository.findAll();
    }
    
    //หา ConversationRoom ห้องเดียวจาก id
    @RequestMapping("/findRoom")
    public @ResponseBody
    ConversationRoom getOneRoom(@RequestParam int id) {
        return roomRepository.findOne(id);
    }
    
    //เพิ่ม ConversationRoom
    @GetMapping(path = "/add")
    public @ResponseBody
    ConversationRoom addConversation(@RequestParam int requester,@RequestParam int requestee,@RequestParam int statusId) {
        ConversationRoom c = new ConversationRoom();
        c.setRequestee(requestee);
        c.setRequester(requester);
        c.setStatusId(statusId);
        roomRepository.save(c);
        return c;
    }
    
    //เปลี่ยน StatusID ของ ConversationRoom
    @GetMapping(path = "/updateStatus")
    public @ResponseBody
    ConversationRoom updateStatus(@RequestParam int id,@RequestParam int statusId) {
        ConversationRoom c = new ConversationRoom();
        c = getOneRoom(id);
        c.setStatusId(c.getId());
        c.setRequestee(c.getRequestee());
        c.setRequester(c.getRequester());
        c.setStatusId(statusId);
        roomRepository.save(c);
        return c;
    }
     
    //หาด้วย Requester ID
    @RequestMapping("/findRequester")
    public @ResponseBody
    Iterable<ConversationRoom> getRequester(@RequestParam int requester) {
        return roomRepository.findByRequester(requester);
    }
    
    
}
