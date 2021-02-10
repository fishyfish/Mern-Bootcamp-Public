const { response } = require("express");
const express = require("express");
const app = express();
const faker = require('faker');

class User {
  constructor(){
    this.name = faker.name.findName();
    this.email = faker.internet.email();
    this.address = faker.address.streetAddress();
    this.city = faker.address.city();
    this.state = faker.address.state();
    this.zipCode = faker.address.zipCode();
    this.company = faker.company.companyName();
  }
}

//middleware {object}
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.get("/api/", (request, response) => {
  //const firstName = faker.name.findName();
  //res.send("hello to " + faker.name.findName() + "??");
  //res.send(`Our express api server is now sending this over to the browser ${server.address().port}`);
  const user = new User();

  const userArray = [
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
  ]

  response.send(userArray);
});

app.post("/api/", (req,res) => {
  console.log(req.body);
  return res.json(req.body);
})

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
