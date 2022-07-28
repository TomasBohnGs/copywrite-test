const supertest = require("supertest");
const chai = require("chai");
const expect = chai.expect;

const request = supertest('http://localhost:3001');


describe("GET /iecho with 'test' as parameter", function () {
    it("Returns Status Code 200 if the response is successful", async function () {
        const response = await request.get("/iecho?text=test");

        expect(response.status).to.equal(200);
    });
    it("Returns reverse text", async function () {
        const response = await request.get("/iecho?text=test");

        expect(response.body.text).to.eql('tset');
    });
    it("Returns false if the selected text is not Palindrome", async function () {
        const response = await request.get("/iecho?text=test");

        expect(response.body.palindrome).to.eql(false);
    });
});

describe("GET /iecho with 'neuquen' as parameter", function () {
    it("Returns Status Code 200 if the response is successful", async function () {
        const response = await request.get("/iecho?text=neuquen");

        expect(response.status).to.equal(200);
    });
    it("Returns the reverse text", async function () {
        const response = await request.get("/iecho?text=neuquen");

        expect(response.body.text).to.eql('neuquen');
    });
    it("Returns true if the selected text is Palindrome", async function () {
        const response = await request.get("/iecho?text=neuquen");

        expect(response.body.palindrome).to.eql(true);
    });
});

describe("GET /iecho with empty string as parameter", function () {
    it("Returns Status Code 400 if the response is not successful", async function () {
        const response = await request.get("/iecho?text=");

        expect(response.status).to.equal(400);
    });
    it("Returns 'no text' if no parameter is passed throw quey", async function () {
        const response = await request.get("/iecho?text=");

        expect(response.body.error).to.eql('no text');
    });
});