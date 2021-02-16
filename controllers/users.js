const path = require("path");
const getDataFromFile = require("../helpers/files");

const dataPath = path.join(__dirname, "..", "data", "users.json");

const getUsers = (req, res) => {
  return getDataFromFile(dataPath)
    .then((users) => res.status(200).send(users))
    .catch(() =>
      res
        .status(500)
        .send({ message: "Не удалось получить информацию о пользователе" })
    );
};

const getProfile = (req, res) => {
  return getDataFromFile(dataPath)
    .then((users) => {
      const user = users.find((user) => user._id === req.params.id);
      if (!user) {
        res.status(404).send({ message: `Нет пользователя с таким id` });
      }

      return res.status(200).send(user);
    })
    .catch(() =>
      res
        .status(500)
        .send({ message: "Не удалось получить информацию о пользователе" })
    );
};

module.exports = { getUsers, getProfile };
