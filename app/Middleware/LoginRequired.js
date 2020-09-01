'use strict'

class LoginRequired {

  async handle ({ auth, response }, next) {
    // call next to advance the request
    await next()
  }
}

module.exports = LoginRequired
