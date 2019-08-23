const util = require('./util')
const Nightmare = require('nightmare')
const expect = require('chai.expect')
describe('login test', async() => {
    let nightmare = null
    beforeEach('create nightmare instance', () => {
        nightmare = new Nightmare({show:true})
    })
    it ('should login successfully', async () => {
      await nightmare.goto(util.getBaseUrl())
      await nightmare.click('app-layout-header li a[href="/login"]')
      await nightmare.type('app-auth-page form input[formcontrolname="email"]',util.getUser())
      await nightmare.type('app-auth-page form input[formcontrolname="password"]',util.getPassword())
      await nightmare.click('app-auth-page button[type="submit"]')
      var loginUser = await nightmare.select('app-layout-header li a[href="/profile/tlqiao"]').innerText
        expect(loginUser).to.have.string('tlqiao')
    })
    afterEach('close nightmare', async() => {
      await nightmare.close()
    })
})