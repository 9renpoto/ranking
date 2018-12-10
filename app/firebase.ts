import * as firebase from 'firebase/app'
import Router from 'next/router'

if (!firebase.apps.length) {
  firebase.initializeApp({
    appKey: process.env.NODE_APP_KEY,
    authDomain: process.env.NODE_AUTH_DOMAIN,
    databaseURL: process.env.NODE_DATABASE_URL,
    projectId: process.env.NODE_PROJECT_ID,
    messagingSenderId: process.env.NODE_SENDER_ID
  })
}

Router.onRouteChangeStart = () => {
  if (!firebase.auth().currentUser) {
    Router.push('/')
  }
}

export default firebase
