const { v4: uuidv4 } = require("uuid");
const HttpError = require("../Models/http-errors");

const DUMMY_USER = [
  {
    id: "u1",
    name: "Draganka",
    email: "drganka.mail@mial.com",
    image:
      "https://pxbar.com/wp-content/uploads/2023/09/instagram-profile-picture-for-girls-1.jpg",
    password: "123456",
  },
  {
    id: "u2",
    name: "Dragan",
    email: "dragance@mail.com",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSon7UXXyxvoxfrD0brWchUB7kIU545JP7QtQ&usqp=CAU",
    password: "654321",
  },
];

const yourProfile = (req, res, next) => {};
const allProfiles = (req, res, next) => {
  res.json({ users: DUMMY_USER });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USER.find((u) => u.email === email);
  if (!identifiedUser) {
    throw new HttpError("Nepostojeći korsinik sa unesenim emailom!", 401);
  }
  if (identifiedUser.password !== password) {
    throw new HttpError("Neispravna lozinka molim vas pokušajte ponovno!", 401);
  } else {
    res.json({ message: "Prijavljeni ste!" });
  }
};

const register = (req, res, next) => {
  const { name, email, password } = req.body;

const hasUser = DUMMY_USER.find(u => u.email ===email);
if(hasUser){
    throw new HttpError("Korisnički račun sa tim emailom već postoji", 422)
}

  const createdUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };

  DUMMY_USER.push(createdUser);

  res.status(201).json({ user: createdUser });
};
const updateYourProfile = (req, res, next) => {};
const deliteYourProfile = (req, res, next) => {};

exports.yourProfile = yourProfile;
exports.allProfiles = allProfiles;
exports.login = login;
exports.register = register;
exports.updateYourProfile = updateYourProfile;
exports.deliteYourProfile = deliteYourProfile;
