'use strict';

const { Transform } = require('stream');

const parsedRows = ['test-row-1', 'test-row-2'];

const S3GetObjectStream = require('../lib/getObjectStream');

class GetOgetObjectTestClass extends S3GetObjectStream {

	static get parsers() {
		return [
			[
				() => {
					const parser = new Transform({ objectMode: true });
					// eslint-disable-next-line no-underscore-dangle
					parser._transform = function(chunk, encoding, cb) {
						cb(null, chunk);
					};
					return parser;
				}
			]
		];
	}

	static get bufferSize() {
		return 1;
	}

	static async processBuffer(buffer) {
		return buffer.map(value => `${value}-processed`);
	}

}

module.exports = {
	GetOgetObjectTestClass,
	processedRows: parsedRows.map(row => `${row}-processed`)
};
