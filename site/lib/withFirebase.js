import config from '../config'

export default async function withFirebase() {
  const firebase = await import('firebase')

  try {
    firebase.initializeApp(config.firebase)
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }

  return firebase
}