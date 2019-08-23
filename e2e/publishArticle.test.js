const util = require('./util')
const Nightmare = require('nightmare')
describe('test login', async() => {
    let nightmare = null
    beforeEach('create nightmare instance', () => {
        nightmare = new Nightmare({show:true})
    })
    it ('login test', async () => {
        await nightmare.goto(util.getBaseUrl())
        await nightmare.click('app-layout-header li a[href="/login"]')
        await nightmare.type('app-auth-page form input[formcontrolname="email"]',util.getUser())
        await nightmare.type('app-auth-page form input[formcontrolname="password"]',util.getPassword())
        await nightmare.click('app-auth-page button[type="submit"]')
        await nightmare.end()
    })

})