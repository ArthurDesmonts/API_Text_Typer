/**
 * This Document is used to generate the JSON file for the TextGenerator.
 *
 * Result :
 * TextDataBase.json
 *
 * Using Faker.js to generate the data.
 *
 * The following code is used to generate the JSON file containing many text composed by random words, depending on the language chosen.
 * */

const faker = require('faker');
const fs = require('fs');

const languages = ['en', 'fr'];

const textDataBase = {
    en: [],
    fr: []
};

const numberOfTexts = 1000;
const maxWordsInText = 300;

function generateTexts(language) {
    for (let i = 0; i < numberOfTexts; i++) {
        const numberOfWords = Math.floor(Math.random() * maxWordsInText) + 1;
        const text = faker.lorem.words(numberOfWords);
        textDataBase[language].push(text);
    }
}

languages.forEach(language => generateTexts(language));

fs.writeFileSync('TextDataBase.json', JSON.stringify(textDataBase, null, 2));