import * as firebase from 'firebase'

const database = {
  update: (path: string, data: object) => {
    return firebase
      .database()
      .ref(path)
      .update(data)
  }
}

export default database
