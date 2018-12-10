import * as firebase from 'firebase/app'

if (!firebase.apps.length) {
  firebase.initializeApp({
    appKey: process.env.NODE_APP_KEY,
    authDomain: process.env.NODE_AUTH_DOMAIN,
    databaseURL: process.env.NODE_DATABASE_URL,
    projectId: process.env.NODE_PROJECT_ID,
    messagingSenderId: process.env.NODE_SENDER_ID
  })
}

export default firebase
