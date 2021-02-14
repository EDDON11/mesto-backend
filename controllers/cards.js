const path = require("path");
const getDataFromFile = require("../helpers/files");

const cardsPath = path.join(__dirname, "..", "data", "cards.json");

const getCards = (req, res) => {
  return getDataFromFile(cardsPath)
    .then((cards) => res.status(200).send(cards))
    .catch((err) => res.status(400).send(err));
};

module.exports = getCards;
