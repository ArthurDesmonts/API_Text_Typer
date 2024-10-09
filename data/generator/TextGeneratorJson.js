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

import { faker } from '@faker-js/faker';
import fs from 'fs';

const generateTextData = (numEntries) => {
    const data = [];
    for (let i = 0; i < numEntries; i++) {
        const words = Array.from({ length: 300 }, () => faker.word.noun()).join(' ');
        data.push({
            id: i + 1,
            text: words
        });
    }
    return data;
};

const saveTextDataToFile = (filename, data) => {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
};

const numEntries = 1000;
const filename = 'TextDataBase.json';
const textData = generateTextData(numEntries);
saveTextDataToFile(filename, textData);

console.log(`File ${filename} generated successfully.`);