import { Routes } from 'next-routes'

const routes = new Routes()
routes
  .add('new', '/gh/:orgId/:termId/new', 'new')
  .add('mypage', '/gh/:orgId/:memberId', 'mypage')
export default routes
