import {getRandomInteger} from "./generateNum";

const progressionLength = 10;

const getProgression = (start, step, length) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
        progression.push(start + step * i);
    }
    return progression;
};

export const generateTaskProgression = () => {
    const start = getRandomInteger(0, 10);
    const step = getRandomInteger(1, 5);
    const progression = getProgression(start, step, progressionLength);
    const missingMemberIndex = getRandomInteger(0, progressionLength);
    const rightAnswer = progression[missingMemberIndex].toString();
    progression[missingMemberIndex] = '..';
    const question = progression.join(' ');
    return  {
        question,
        rightAnswer,
    };
};
