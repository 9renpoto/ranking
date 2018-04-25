import Firebase from '../../'

function Set (messages: string, data?: object) {
  return Firebase.database()
    .ref(messages)
    .set(data)
}

export default Set
