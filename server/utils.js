const delay = (time) => new Promise((r) => setTimeout(r, time));

const randomFromTo = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

module.exports = {
	delay,
	randomFromTo,
};
