import { Routes } from 'next-routes'

const routes = new Routes()
routes
  .add('mypage', '/gh/:orgId/:memberId', 'mypage')
  .add('new', '/gh/:orgId/:termId/new', 'new')

export default routes
