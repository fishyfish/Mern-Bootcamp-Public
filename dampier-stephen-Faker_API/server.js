const { response } = require("express");
const express = require("express");
const app = express();
const faker = require('faker');

class User {
  constructor(){
    this.Id = faker.random.uuid();
    this.FirstName = faker.name.firstName();
    this.LastName = faker.name.lastName();
    this.PhoneNumber = faker.phone.phoneNumber();
    this.Email = faker.internet.email();
    this.Password = faker.internet.password();
  }
}

class Company {
  constructor(){
    this.id = faker.random.uuid();
    this.Company = faker.company.companyName();
    this.Address = faker.address.streetAddress();
    this.City = faker.address.city();
    this.State = faker.address.state();
    this.ZipCode = faker.address.zipCode();
    this.Country = faker.address.country();
  }
}

//middleware {object}
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.get("/api/users/new/", (request, response) => {
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

app.get("/api/companies/new/", (request, response) => {
const company = new Company();
const companyArray = [
  new Company(),
  new Company(),
  new Company(),
  new Company(),
  new Company(),
  new Company(),
  new Company(),
  new Company(),
  new Company(),
  new Company(),
  new Company(),
  new Company(),
]

  response.send(companyArray);
});

app.get("/api/user/company", (request, response) => {
  const company = new Company();
  const user = new User();
  const companyArray = [
    new User(),
    new Company(),
    new User(),
    new Company(),
    new User(),
    new Company(),
    new User(),
    new Company(),
    new User(),
    new Company(),
    new User(),
    new Company(),
    new User(),
    new Company(),
    new User(),
    new Company(),
    new User(),
    new Company(),
    new User(),
    new Company(),
  ]
  
    response.send(companyArray);
  });


app.post("/api/companies/new/", (req,res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json( { status: "ok" } );
})

app.post("/api/users/new/", (req,res) => {
  // req.body will contain the form data from Postman or from React
  console.log(req.body);
  // we can push it into the users array for now...
  // later on this will be inserted into a database
  users.push(req.body);
  // we always need to respond with something
  res.json( { status: "ok" } );
})

app.post("/api/user/company", (req,res) => {
  // req.body will contain the form data from Postman or from React
  console.log(req.body);
  // we can push it into the users array for now...
  // later on this will be inserted into a database
  users.push(req.body);
  // we always need to respond with something
  res.json( { status: "ok" } );
})

// not working. Bah
app.put("/api/users/:id", (req, res) => {
  // we can get this `id` variable from req.params
  const id = req.params.id;
  // assuming this id is the index of the users array we can replace the user like so
  users[id] = req.body;
  // we always need to respond with something
  res.json( { status: "ok" } );
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
