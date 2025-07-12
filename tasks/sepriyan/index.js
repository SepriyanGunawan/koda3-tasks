const createTriangle = require("./createTriangle");
// const temperature = require("./temperature");
const perkalianarry = require("./perkalianarry");
const notiga = require("./notiga");
const noempat = require("./noempat");
const nolima = require("./nolima");
module.exports = {
    triangle: createTriangle.triangle,
    perkalianarry: perkalianarry.menambahkan,
    notiga: notiga.notiga,
    noempat: noempat.noempat,
    nolima: nolima.nolima
    // multiplyNumbers: calc.multiplyNumbers,
    // celciusToFahrenheit: temperature.celciusToFahrenheit
};
