import * as firebase from 'firebase'
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  MESSAGING_SENDERID,
  PROJECT_ID,
  STORAGE_BUCKET
} from '../const'

const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  messagingSenderId: MESSAGING_SENDERID,
  storageBucket: STORAGE_BUCKET
}

const Firebase = firebase.initializeApp(config)

export default Firebase
