import Routes from 'next-routes'

const routes = new Routes()

export default routes.add('mypage', '/gh/:id', 'mypage')
