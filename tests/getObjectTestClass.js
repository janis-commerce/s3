'use strict';

const S3GetObjectStream = require('../lib/getObjectStream');

module.exports = class MyGetObjectStream extends S3GetObjectStream {

	get bufferSize() {
		return 1;
	}

	async processBuffer(buffer) {
		return buffer.map(value => `${value}-processed`);
	}

};
