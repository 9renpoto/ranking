import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

type configs = {
  apiKey: string
  authDmain: string
  databaseUTL: string
  strageBucket: string
  messagingSenderId: string
}

const configs = {
  apiKey: process.env.API_KEY,
  authDmain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  strageBucket: process.env.STRAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
}

function signInGithub (configs: configs) {
  firebase.initializeApp(configs)

  const provider = new firebase.auth.GithubAuthProvider()

  firebase.auth().signInWithPopup(provider)
}

export default signInGithub
