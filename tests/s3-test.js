'use strict';

const assert = require('assert');
const sinon = require('sinon');

const { PassThrough, Readable } = require('stream');

const s3Wrapper = require('../lib/s3Wrapper');

const S3 = require('../lib/s3');
const GetObjectStream = require('../lib/getObjectStream');
const MyGetObjectStream = require('./getObjectTestClass');

describe('S3', () => {

	afterEach(() => {
		sinon.restore();
	});

	const s3Params = {
		Body: '<Binary String>',
		Bucket: 'examplebucket',
		Key: 'objectkey'
	};

	context('getObject', () => {

		it('Should return the same response when calling to getObject method', async () => {

			sinon.stub(s3Wrapper, 'getObject').returns({ promise: () => Promise.resolve(s3Params) });

			const getObjectInstance = await S3.getObject(s3Params);

			assert.deepStrictEqual(getObjectInstance, s3Params);
		});

		it('Should rejects the promise calling to getObject method', async () => {

			const message = 'random message error';

			sinon.stub(s3Wrapper, 'getObject').returns({ promise: () => Promise.reject(new Error(message)) });

			assert.rejects(S3.getObject(s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should call with the same params to getObject method', async () => {

			sinon.stub(s3Wrapper, 'getObject').returns({ promise: () => Promise.resolve(s3Params) });

			await S3.getObject(s3Params);

			sinon.assert.calledWithExactly(s3Wrapper.getObject, s3Params);
		});
	});

	context('putObject', () => {

		it('Should return a the same response when calling to putObject method', async () => {

			sinon.stub(s3Wrapper, 'putObject').returns({ promise: () => Promise.resolve(s3Params) });

			const putObjectInstance = await S3.putObject(s3Params);

			assert.deepStrictEqual(putObjectInstance, s3Params);
		});

		it('Should rejects the promise calling to putObject method', async () => {

			const message = 'random message error';

			sinon.stub(s3Wrapper, 'putObject').returns({ promise: () => Promise.reject(new Error(message)) });

			assert.rejects(S3.putObject(s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should call with the same params to putObject method', async () => {

			sinon.stub(s3Wrapper, 'putObject').returns({ promise: () => Promise.resolve(s3Params) });

			await S3.putObject(s3Params);

			sinon.assert.calledWithExactly(s3Wrapper.putObject, s3Params);
		});
	});

	context('deleteObject', () => {

		it('Should return a the same response when calling to deleteObject method', async () => {

			sinon.stub(s3Wrapper, 'deleteObject').returns({ promise: () => Promise.resolve(s3Params) });

			const deleteObjectInstance = await S3.deleteObject(s3Params);

			assert.deepStrictEqual(deleteObjectInstance, s3Params);
		});

		it('Should rejects the promise calling to deleteObject method', async () => {

			const message = 'random message error';

			sinon.stub(s3Wrapper, 'deleteObject').returns({ promise: () => Promise.reject(new Error(message)) });

			assert.rejects(S3.deleteObject(s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should call with the same params to deleteObject method', async () => {

			sinon.stub(s3Wrapper, 'deleteObject').returns({ promise: () => Promise.resolve(s3Params) });

			await S3.deleteObject(s3Params);

			sinon.assert.calledWithExactly(s3Wrapper.deleteObject, s3Params);
		});
	});

	context('deleteObjects', () => {

		it('Should return a the same response when calling to deleteObjects method', async () => {

			sinon.stub(s3Wrapper, 'deleteObjects').returns({ promise: () => Promise.resolve(s3Params) });

			const deleteObjectsInstance = await S3.deleteObjects(s3Params);

			assert.deepStrictEqual(deleteObjectsInstance, s3Params);
		});

		it('Should rejects the promise calling to deleteObjects method', async () => {

			const message = 'random message error';

			sinon.stub(s3Wrapper, 'deleteObjects').returns({ promise: () => Promise.reject(new Error(message)) });

			assert.rejects(S3.deleteObjects(s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should call with the same params to deleteObjects method', async () => {

			sinon.stub(s3Wrapper, 'deleteObjects').returns({ promise: () => Promise.resolve(s3Params) });

			await S3.deleteObjects(s3Params);

			sinon.assert.calledWithExactly(s3Wrapper.deleteObjects, s3Params);
		});
	});

	context('listObjects', () => {

		it('Should return a the same response when calling to listObjects method', async () => {

			sinon.stub(s3Wrapper, 'listObjects').returns({ promise: () => Promise.resolve(s3Params) });

			const listObjectsInstance = await S3.listObjects(s3Params);

			assert.deepStrictEqual(listObjectsInstance, s3Params);
		});

		it('Should rejects the promise calling to listObjects method', async () => {

			const message = 'random message error';

			sinon.stub(s3Wrapper, 'listObjects').returns({ promise: () => Promise.reject(new Error(message)) });

			assert.rejects(S3.listObjects(s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should call with the same params to listObjects method', async () => {

			sinon.stub(s3Wrapper, 'listObjects').returns({ promise: () => Promise.resolve(s3Params) });

			await S3.listObjects(s3Params);

			sinon.assert.calledWithExactly(s3Wrapper.listObjects, s3Params);
		});
	});

	context('listBuckets', () => {

		it('Should return a the same response when calling to listBuckets method', async () => {

			sinon.stub(s3Wrapper, 'listBuckets').returns({ promise: () => Promise.resolve(s3Params) });

			const listBucketsInstance = await S3.listBuckets(s3Params);

			assert.deepStrictEqual(listBucketsInstance, s3Params);
		});

		it('Should rejects the promise calling to listBuckets method', async () => {

			const message = 'random message error';

			sinon.stub(s3Wrapper, 'listBuckets').returns({ promise: () => Promise.reject(new Error(message)) });

			assert.rejects(S3.listBuckets(s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should call with the same params to listBuckets method', async () => {

			sinon.stub(s3Wrapper, 'listBuckets').returns({ promise: () => Promise.resolve(s3Params) });

			await S3.listBuckets(s3Params);

			sinon.assert.calledWithExactly(s3Wrapper.listBuckets, s3Params);
		});
	});

	context('createBucket', () => {

		it('Should return a the same response when calling to createBucket method', async () => {

			sinon.stub(s3Wrapper, 'createBucket').returns({ promise: () => Promise.resolve(s3Params) });

			const createBucketInstance = await S3.createBucket(s3Params);

			assert.deepStrictEqual(createBucketInstance, s3Params);
		});

		it('Should rejects the promise calling to createBucket method', async () => {

			const message = 'random message error';

			sinon.stub(s3Wrapper, 'createBucket').returns({ promise: () => Promise.reject(new Error(message)) });

			assert.rejects(S3.createBucket(s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should call with the same params to createBucket method', async () => {

			sinon.stub(s3Wrapper, 'createBucket').returns({ promise: () => Promise.resolve(s3Params) });

			await S3.createBucket(s3Params);

			sinon.assert.calledWithExactly(s3Wrapper.createBucket, s3Params);
		});
	});

	context('deleteBucket', () => {

		it('Should return a the same response when calling to deleteBucket method', async () => {

			sinon.stub(s3Wrapper, 'deleteBucket').returns({ promise: () => Promise.resolve(s3Params) });

			const deleteBucketInstance = await S3.deleteBucket(s3Params);

			assert.deepStrictEqual(deleteBucketInstance, s3Params);
		});

		it('Should rejects the promise calling to deleteBucket method', async () => {

			const message = 'random message error';

			sinon.stub(s3Wrapper, 'deleteBucket').returns({ promise: () => Promise.reject(new Error(message)) });

			assert.rejects(S3.deleteBucket(s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should call with the same params to deleteBucket method', async () => {

			sinon.stub(s3Wrapper, 'deleteBucket').returns({ promise: () => Promise.resolve(s3Params) });

			await S3.deleteBucket(s3Params);

			sinon.assert.calledWithExactly(s3Wrapper.deleteBucket, s3Params);
		});
	});

	context('getSignedUrl', () => {

		const url = 'https://bucket-name.s3.us-east-1.amazonaws.com/path/to/file.txt';

		it('Should return a the same response when calling to getSignedUrl method', async () => {

			sinon.stub(s3Wrapper, 'getSignedUrlPromise').returns(Promise.resolve(url));

			const presignedUrl = await S3.getSignedUrl('getObject', s3Params);

			assert.deepStrictEqual(presignedUrl, url);
		});

		it('Should rejects the promise calling to getSignedUrl method', async () => {

			const message = 'random message error';

			sinon.stub(s3Wrapper, 'getSignedUrlPromise').returns(Promise.reject(new Error(message)));

			assert.rejects(S3.getSignedUrl('getObject', s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should call with the same params to getSignedUrlPromise method', async () => {

			sinon.stub(s3Wrapper, 'getSignedUrlPromise').returns(Promise.resolve(url));

			await S3.getSignedUrl('getObject', s3Params);

			sinon.assert.calledWithExactly(s3Wrapper.getSignedUrlPromise, 'getObject', s3Params);
		});
	});

	context('headObject', () => {

		const response = {
			AcceptRanges: 'bytes',
			LastModified: '2019-11-27T18:50:40.000Z',
			ContentLength: 56782,
			ETag: '"e77f5136cc15419e4c81beba285d4bde"',
			ContentType: 'image/jpeg',
			Metadata: {}
		};


		it('Should return a the same response when calling to headObject method', async () => {

			sinon.stub(s3Wrapper, 'headObject').returns({ promise: () => Promise.resolve(response) });

			const headObjectResponse = await S3.headObject(s3Params);

			assert.deepStrictEqual(headObjectResponse, response);
		});

		it('Should rejects the promise calling to headObject method', async () => {

			const message = 'random message error';

			sinon.stub(s3Wrapper, 'headObject').returns({ promise: () => Promise.reject(new Error(message)) });

			assert.rejects(S3.headObject(s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should call with the same params to headObject method', async () => {

			sinon.stub(s3Wrapper, 'headObject').returns({ promise: () => Promise.resolve(response) });

			await S3.headObject(s3Params);

			sinon.assert.calledWithExactly(s3Wrapper.headObject, s3Params);
		});
	});

	context('createPresignedPost', () => {

		const response = {
			url: 'URL',
			fields: {}
		};

		it('Should return a the same response when calling to createPresignedPost method', async () => {

			sinon.stub(s3Wrapper, 'createPresignedPost');

			s3Wrapper.createPresignedPost.callsFake((params, callback) => {
				callback(null, response);
			});

			const createPresignedPostResponse = await S3.createPresignedPost(s3Params);

			assert.deepStrictEqual(createPresignedPostResponse, response);
		});

		it('Should rejects the promise calling to createPresignedPost method', async () => {

			sinon.stub(s3Wrapper, 'createPresignedPost');

			const message = 'random message error';

			s3Wrapper.createPresignedPost.callsFake((params, callback) => {
				callback(new Error(message), null);
			});

			assert.rejects(S3.createPresignedPost(s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should call with the same params to createPresignedPost method', async () => {

			sinon.stub(s3Wrapper, 'createPresignedPost');

			s3Wrapper.createPresignedPost.callsFake((params, callback) => {
				callback(null, response);
			});

			await S3.createPresignedPost(s3Params);

			assert.deepStrictEqual(s3Wrapper.createPresignedPost.getCall(0).args[0], s3Params);
		});
	});

	context('uploadStream', () => {

		it('Should throw an error when s3 upload return an error', async () => {
			const message = 'Cannot found any bucket with the provided key';

			sinon.stub(s3Wrapper, 'upload').returns();

			s3Wrapper.upload.callsFake((params, options, callback) => {
				callback(new Error(message), null);
			});

			const testStream = new PassThrough();

			assert.rejects(S3.uploadStream(testStream, s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should return the uploaded object info', async () => {
			const response = {
				ETag: '"a30c37a2ccde6cf699f557353762815b"',
				Location: 'https://test.s3.amazonaws.com/test.csv',
				key: 'test.csv',
				Key: 'test.csv',
				Bucket: 'test'
			};

			sinon.stub(s3Wrapper, 'upload').returns();

			s3Wrapper.upload.callsFake((params, options, callback) => {
				callback(null, response);
			});

			const testStream = new PassThrough();

			assert.deepStrictEqual(await S3.uploadStream(testStream, s3Params), response);
		});


	});

	context('GetObjectStream', () => {

		it('Should return instance of class get object stream', () => {
			const testProto = new S3.GetObjectStream();
			assert.ok(GetObjectStream.prototype.isPrototypeOf(testProto));
		});

		it('Should process stream chunks and returned', async () => {

			const streamRows = [{ test01: 'test' }, { test02: 'test' }];
			const testStream = Readable.from(streamRows);

			sinon.stub(s3Wrapper, 'getObject').returns({ createReadStream: () => testStream });

			const getObjectStream = new S3.GetObjectStream();

			const streamResult = await getObjectStream.call(s3Params);

			const streamData = [];
			for await (const chunk of streamResult)
				streamData.push(JSON.parse(chunk.toString()));

			assert.deepStrictEqual(streamData, streamRows);
		});

		it('Should process stream chunks with defined parser, process buffer and buffer size', async () => {

			const streamRows = ['test-row-1', 'test-row-2'];
			const testStream = Readable.from(streamRows);

			sinon.stub(s3Wrapper, 'getObject').returns({ createReadStream: () => testStream });

			const myGetObjectStream = new MyGetObjectStream();

			const streamResult = await myGetObjectStream.call(s3Params);

			const streamData = [];
			for await (const chunk of streamResult)
				streamData.push(chunk.toString());

			assert.deepStrictEqual(streamData, streamRows.map(row => `${row}-processed`));
		});

	});

});
