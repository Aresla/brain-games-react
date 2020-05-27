

export const getRandomInteger = (from, to) => {
    const notRoundedRandom = (Math.random() * (to - from)) + from;
    return Math.floor(notRoundedRandom);
};
