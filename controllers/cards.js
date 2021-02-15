const path = require("path");
const getDataFromFile = require("../helpers/files");

const cardsPath = path.join(__dirname, "..", "data", "cards.json");

const getCards = (req, res) => {
  return getDataFromFile(cardsPath)
    .then((cards) => res.status(200).send(cards))
    .catch(() => res.status(500).send({ message: "Ошибка сервера" }));
};

module.exports = getCards;
