export const delay = (time: number): Promise<void> => new Promise((r) => setTimeout(r, time));
