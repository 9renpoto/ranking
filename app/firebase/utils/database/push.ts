import Firebase from '../../'

function Push (messages: string, data?: object) {
  return Firebase.database()
    .ref(messages)
    .push(data)
}

export default Push
