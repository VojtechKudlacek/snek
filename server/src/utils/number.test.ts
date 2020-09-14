import { randomFromTo } from './number';

describe('utils/number', () => {
	describe('randomFromTo', () => {
		it('returns a random positive number', () => {
			const value = randomFromTo(0, 10);
			expect(value).toBeGreaterThanOrEqual(0);
			expect(value).toBeLessThanOrEqual(10);
		});

		it('returns a random negative number', () => {
			const value = randomFromTo(-10, -1);
			expect(value).toBeGreaterThanOrEqual(-10);
			expect(value).toBeLessThanOrEqual(-1);
		});

		it('returns a random number', () => {
			const value = randomFromTo(-10, 10);
			expect(value).toBeGreaterThanOrEqual(-10);
			expect(value).toBeLessThanOrEqual(10);
		});

		it('includes given values', () => {
			expect(randomFromTo(10, 10)).toEqual(10);
			expect(randomFromTo(-10, -10)).toEqual(-10);
			expect(randomFromTo(0, 0)).toEqual(0);
		});
	})
})
