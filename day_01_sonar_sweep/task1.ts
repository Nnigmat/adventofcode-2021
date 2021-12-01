import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf-8');
const values = input.split('\n').map(value => Number(value));

let counter = 0;
for (let i = 1; i < values.length; i++) {
	counter += values[i] > values[i - 1] ? 1 : 0;
}

console.log('Result', counter);
