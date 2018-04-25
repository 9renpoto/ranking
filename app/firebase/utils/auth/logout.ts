import * as firebase from 'firebase'

function signOut (): Promise<void | Error> {
  return firebase.auth().signOut()
}

export default signOut
