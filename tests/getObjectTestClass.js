'use strict';

const { Transform } = require('stream');

const S3GetObjectStream = require('../lib/getObjectStream');

module.exports = class MyGetObjectStream extends S3GetObjectStream {

	get parsers() {
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

	get bufferSize() {
		return 1;
	}

	async processBuffer(buffer) {
		return buffer.map(value => `${value}-processed`);
	}

};
