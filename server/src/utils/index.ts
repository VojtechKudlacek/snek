export const delay = (time: number): Promise<void> => new Promise((r) => setTimeout(r, time));

export const randomFromTo = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);
