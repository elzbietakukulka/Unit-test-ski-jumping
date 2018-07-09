const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
	describe('mamut', () => {
		it('should return 153 on mamut', () => {
			const actual = calculateDistancePoints(227.5, 225, 200);

			const expected = 153;

			assert.equal(actual, expected);
		});

		it('should return 151.2 on mamut', () => {
			const actual = calculateDistancePoints(226, 225, 200);

			const expected = '151.2';

			assert.equal(actual, expected);
		});

		it('should return 147.6 on mamut', () => {
			const actual = calculateDistancePoints(223, 225, 200);

			const expected = '147.6';

			assert.equal(actual, expected);
		});
	});

	describe('big', () => {
		it('should return 85.2 on big', () => {
			const actual = calculateDistancePoints(134, 134, 120);

			const expected = 85.2;

			assert.equal(actual, expected);
		});

		it('should return 83.4 on big', () => {
			const actual = calculateDistancePoints(134, 134, 120);

			const expected = 85.2;

			assert.equal(actual, expected);
		});

		it('should return 79.8 on big', () => {
			const actual = calculateDistancePoints(131, 134, 120);

			const expected = '79.8';

			assert.equal(actual, expected);
		});
	});

	describe('normal', () => {
		it('should return 86 on normal', () => {
			const actual = calculateDistancePoints(111, 109, 98);

			const expected = 86;

			assert.equal(actual, expected);
		});

		it('should return 77 on normal', () => {
			const actual = calculateDistancePoints(106.5, 109, 98);

			const expected = '77';

			assert.equal(actual, expected);
		});

		it('should return 76 on normal', () => {
			const actual = calculateDistancePoints(106, 109, 98);

			const expected = '76';

			assert.equal(actual, expected);
		});
	});
});