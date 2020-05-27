import {getRandomInteger} from "./generateNum";

export const generateTaskEven = () => {
    const question = getRandomInteger(1, 10);
    const rightAnswer = question % 2 === 0;
    return  {
        question,
        rightAnswer,
    };
};
