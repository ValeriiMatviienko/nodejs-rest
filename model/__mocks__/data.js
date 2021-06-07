const User = {
  _id: "604160bf244710506826c5bc",
  subscription: "pro",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNDE2MGJmMjQ0NzEwNTA2ODI2YzViYyIsImlhdCI6MTYxNTU0Mjg3MywiZXhwIjoxNjE1NTUwMDczfQ._3Q9Q9eoRIPn40B6ha-_Eybvp9GvZb1muv3BPiGStf4",
  email: "example@example.com",
  password: "$2a$08$okH6376YlenyP1aDx3eJkuE6NoiQNWSXs66Mul0RQr1lrAR9S4pMi",
  avatarURL: "604160bf244710506826c5bc\\bearded-avatar.png",
};

const users = [];
users[0] = User;

const newUser = { email: "test@test.com", password: "1111111" };

const contacts = [
  {
    _id: "60423455265ddc184c7cb839",
    subscription: "free",
    name: "Aleftina",
    email: "Aleftina@gmail.com",
    phone: "(066) 666-1111",
    owner: "604160bf244710506826c5bc",
  },
  {
    _id: "6042346b265ddc184c7cb83b",
    subscription: "pro",
    name: "Mommy",
    email: "Mommy@gmail.com",
    phone: "(095) 000-1111",
    owner: "604160bf244710506826c5bc",
  },
];

const newContact = {
  name: "Daddy",
  email: "Daddy@gmail.com",
  phone: "(066) 666-2222",
  subscription: "premium",
};

module.exports = { User, users, newUser, contacts, newContact };
