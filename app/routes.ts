import firebase from 'firebase'
import { Routes } from 'next-routes'
import Router from 'next/router'

const routes = new Routes()
routes
  .add('new', '/gh/:orgId/:termId/new', 'new')
  .add('mypage', '/gh/:orgId/:memberId', 'mypage')

Router.onRouteChangeStart = () => {
  if (!firebase.auth().currentUser) {
    routes.Router.pushRoute('/')
  }
}

export default routes
