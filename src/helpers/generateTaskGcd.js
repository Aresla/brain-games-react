import {getRandomInteger} from "./generateNum";

const findGcd = (num1, num2) => {
    let numOne = num1;
    let numTwo = num2;
    while (numOne !== 0 && numTwo !== 0) {
        if (numOne > numTwo) {
            numOne %= numTwo;
        } else {
            numTwo %= numOne;
        }
    }
    return numOne > numTwo ? numOne : numTwo;
};

export const generateTaskGcd = () => {
    const a = getRandomInteger(1, 10);
    const b = getRandomInteger(1, 10);
    const question = `${a}, ${b}`;
    const rightAnswer = findGcd(a, b).toString();
    return {
        question,
        rightAnswer,
    };
};
