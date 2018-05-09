import * as firebase from 'firebase'

function signinWithGithub () {
  const provider = new firebase.auth.GithubAuthProvider()

  return firebase.auth().signInWithPopup(provider)
}

export default signinWithGithub
