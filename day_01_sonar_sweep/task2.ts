import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf-8');
const values = input.split('\n').map(value => Number(value));

let counter = 0;
let prev = values[0] + values[1] + values[2];

for (let i = 3; i < values.length; i++) {
	const cur = prev - values[i - 3] + values[i]

	if (prev < cur) {
		counter++;
	}

	prev = cur;
}

console.log('Result', counter);
