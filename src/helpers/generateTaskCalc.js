import {getRandomInteger} from "./generateNum";


export const generateTaskCalc = () => {
    const operations = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
    };
    const signs = Object.keys(operations);
    const a = getRandomInteger(1, 10);
    const b = getRandomInteger(1, 10);
    const sign = signs[getRandomInteger(1, signs.length) - 1];
    const operation = operations[sign];
    const question = `${a} ${sign} ${b}`;
    const rightAnswer = operation(a, b).toString();
    return {
        question,
        rightAnswer,
    };
};
