import Cookie from 'js-cookie'

export default {
  auth(to: any, from: any, next: any) {
    const token = Cookie.get('token')
    console.log(token)

    if (!token) {
      next('/')
    }

    next()
  }
}
