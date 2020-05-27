import {getRandomInteger} from "./generateNum";

const isPrime = (num) => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= num / 2; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

export const generateTaskPrime = () => {
    const question = getRandomInteger(1, 10);
    const rightAnswer = isPrime(question)? true : false;
    return {
        question,
        rightAnswer,
    };
};
