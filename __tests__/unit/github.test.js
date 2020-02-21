const github = require("../../src/controllers/github/github")

// const faker = require("faker");
describe("github controller", () => {
  it('should load user data', () => {
    return github.getUser('GabrielCastello')
      .then(response => {
        expect(response.data).toBeDefined()
        expect(response.data.name).toEqual('Gabriel Castello')
      })
  })
});
