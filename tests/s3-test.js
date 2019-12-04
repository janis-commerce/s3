'use strict';

const assert = require('assert');
const sandbox = require('sinon').createSandbox();

const s3Wrapper = require('../lib/s3Wrapper');

const S3 = require('./../lib/s3');

describe('S3', () => {

	afterEach(() => {
		sandbox.restore();
	});

	const s3Params = {
		Body: '<Binary String>',
		Bucket: 'examplebucket',
		Key: 'objectkey'
	};

	context('putObject', () => {

		it('should return a promise with the same params calling to putObject method', async () => {

			sandbox.stub(s3Wrapper, 'putObject').returns({ promise: () => Promise.resolve(s3Params) });

			const putObjectInstance = await S3.putObject(s3Params);

			assert.deepStrictEqual(putObjectInstance, s3Params);
		});

		it('should call with the same params to putObject method', async () => {

			sandbox.stub(s3Wrapper, 'putObject').returns({ promise: () => Promise.resolve(s3Params) });

			await S3.putObject(s3Params);

			sandbox.assert.calledWithExactly(s3Wrapper.putObject, s3Params);
		});
	});
});
