/// <reference types="cypress" />

import { PetStore } from "../pages/petStore";
const petStore = new PetStore()

const urlBase = 'https://petstore.swagger.io'

const payloadUser = {
    "username": "Userpetname",
    "firstName": "UserpetFirstName",
    "lastName": "UserpetLastName",
    "email": "userpet@pet.com",
    "password": "passPet",
    "phone": "82987881116",
    "userStatus": 0
}

beforeEach(() => {
    cy.visit('https://www.saucedemo.com/ ')
})

When('realizo login usuario {string} {string}', function (username, password) {
    const url = urlBase + '/v2/user/login?username=' + username + '&password=' + password
    petStore.login(url).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.code).to.equal(200)
        expect(response.body.type).to.equal('unknown')
        expect(response.body.message).to.contain('logged in user session:')
    })})

When('crio um novo usuario', function () {
    const url = urlBase + '/v2/user'
    petStore.createUser(url, payloadUser).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.code).to.equal(200)
        expect(response.body.type).to.equal('unknown')
        expect(response.body.message).to.exist
    })
})

Then('atualizo o usuario', function () {
    const username = 'Userpetname'
    const url = urlBase + '/v2/user/' + username
    petStore.updateUser(url, payloadUser).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.code).to.equal(200)
        expect(response.body.type).to.equal('unknown')
        expect(response.body.message).to.exist
    })
})


Given('deleto o usuario', function () {
    const username = 'Userpetname'
    const url = urlBase + '/v2/user/' + username
    petStore.deleteUser(url).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.code).to.equal(200)
        expect(response.body.type).to.equal('unknown')
        expect(response.body.message).to.exist
    })
})


Given('crio um novo usuario com array', function () {
    payloadUser.username = "UserpetnameArray"
    const payloadUpdateUser = [payloadUser]
    const url = urlBase + '/v2/user/createWithArray'
    petStore.createUser(url, payloadUpdateUser).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.code).to.equal(200)
        expect(response.body.type).to.equal('unknown')
        expect(response.body.message).to.equal('ok')
    })
})


Given('valido o usuario criados com array', function () {
    const username = 'UserpetnameArray'
    const url = urlBase + '/v2/user/' + username
    petStore.login(url).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.id).to.exist
        expect(response.body.username).to.equal('UserpetnameArray')
        expect(response.body.firstName).to.equal(payloadUser.firstName)
        expect(response.body.lastName).to.equal(payloadUser.lastName)
        expect(response.body.email).to.equal(payloadUser.email)
        expect(response.body.password).to.equal(payloadUser.password)
        expect(response.body.phone).to.equal(payloadUser.phone)
        expect(response.body.userStatus).to.equal(0)
    })

})
