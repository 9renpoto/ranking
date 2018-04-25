import Firebase from '../../'

function fetchData (messages: string, key?: string) {
  Firebase.database()
    .ref(messages)
    .on('value', (d) => d)
}

export default fetchData
