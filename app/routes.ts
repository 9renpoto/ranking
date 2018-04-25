import { Routes } from 'next-routes'

const routes = new Routes()
routes.add('mypage', '/gh/:orgId/:memberId', 'mypage')

export default routes
