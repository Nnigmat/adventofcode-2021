import fs from 'fs';
import path from 'path';

const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf-8');

const finalPosition = input.split('\n').reduce(({ x, y, aim }, value) => {
	const [direction, amountString] = value.split(' ');
	const amount = Number(amountString);

	if (direction === 'forward') {
		return { x: x + amount, y: y + aim * amount, aim };
	} else if (direction === 'up') {
		return { x, y, aim: aim - amount };
	} else {
		return { x, y, aim: aim + amount };
	}
}, { x: 0, y: 0, aim: 0 });

const { x, y } = finalPosition;
const result = x * y;

console.log('Result', result);
