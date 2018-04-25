import Firebase from '../../'

function fetchData (messages: string) {
  Firebase.database()
    .ref(messages)
    .on('value', (d) => d)
}

export default fetchData
