'use strict';

const { Readable } = require('stream');
const s3Wrapper = require('./s3Wrapper');

module.exports = class S3GetObjectStream {

	/**
	 * Get the parser functions
	 *
	 * @readonly
	 * @memberof S3GetObjectStream
	 */
	get parsers() {
		return [];
	}

	/**
	 * The buffer size of chunks
	 *
	 * @readonly
	 * @memberof S3GetObjectStream
	 */
	get bufferSize() {
		return 100;
	}

	/**
	 * Call the get object stream
	 *
	 * @static
	 * @param {Object} params
	 * @returns
	 * @memberof S3GetObjectStream
	 */
	call(params) {

		const getObjectStream = !Array.isArray(this.parsers) || !this.parsers.length
			? s3Wrapper.getObject(params).createReadStream()
			: this.parsers.reduce((parsed, [parser, ...parserParams]) => parsed.pipe(parser(...parserParams)), s3Wrapper.getObject(params).createReadStream());

		return Readable.from(this.processChunks(getObjectStream));
	}

	/**
	 * Process chunk generators
	 *
	 * @static
	 * @param {Stream} s3Stream
	 * @memberof S3GetObjectStream
	 */
	async* processChunks(s3Stream) {

		let buffer = [];
		for await (const chunk of s3Stream) {
			buffer.push(chunk);
			if(buffer.length < this.bufferSize)
				continue;

			yield* this.transformByBuffer(buffer);

			buffer = [];
		}

		if(buffer.length)
			yield* this.transformByBuffer(buffer);
	}

	/**
	 * Transform chunks by buffer information
	 *
	 * @static
	 * @param {Array} buffer
	 * @memberof S3GetObjectStream
	 */
	async* transformByBuffer(buffer) {
		const processedBuffer = await this.processBuffer(buffer);
		for await (const bufferChunk of processedBuffer)
			yield Buffer.from(typeof bufferChunk === 'object' ? JSON.stringify(bufferChunk) : bufferChunk);
	}

	/**
	 * For process chunks
	 *
	 * @static
	 * @param {Array} buffer
	 * @returns
	 * @memberof S3GetObjectStream
	 */
	async processBuffer(buffer) {
		return [...buffer];
	}
};
