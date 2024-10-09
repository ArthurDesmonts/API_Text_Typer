import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getText() {
    const filePath = path.resolve(__dirname, '../data/data-files/TextDataBase.json');
    const data = JSON.parse(await fs.readFile(filePath, 'utf-8'));
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
}

export default getText;