export const getRandomInteger = (max: number, min = 0) => Math.floor(Math.random() * (max - min)) + min

export const getRandomElelmentFromArray = (items: string[]) => items[getRandomInteger(items.length)]
