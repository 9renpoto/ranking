import { Routes } from 'next-routes'

const routes = new Routes()
routes.add('mypage', '/gh/:id', 'mypage')

export default routes
