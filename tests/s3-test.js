'use strict';

const assert = require('assert');
const sinon = require('sinon');

// const { PassThrough, Readable } = require('stream');

const { mockClient } = require('aws-sdk-client-mock');
// const s3RequestSigner = require('@aws-sdk/s3-request-presigner');

const s3Wrapper = require('../lib/s3Wrapper');

const {
	S3Client,
	GetObjectCommand,
	PutObjectCommand,
	DeleteObjectCommand,
	DeleteObjectsCommand,
	ListObjectsCommand,
	ListBucketsCommand,
	CreateBucketCommand,
	DeleteBucketCommand,
	HeadObjectCommand
	// CopyObjectCommand
} = s3Wrapper;

const S3 = require('../lib/s3');
// const GetObjectStream = require('../lib/getObjectStream');
// const MyGetObjectStream = require('./getObjectTestClass');
const s3Params = {
	Body: '<Binary String>',
	Bucket: 'examplebucket',
	Key: 'objectkey'
};

const message = 'random message error';

describe('S3', () => {

	beforeEach(() => {
		this.s3ClientMock = mockClient(S3Client);
		process.env.IS_OFFLINE = true;
		process.env.S3_LOCAL_ENDPOINT = 'janis.localhost';
	});

	afterEach(() => {
		this.s3ClientMock.restore();
		delete process.env.IS_OFFLINE;
		delete process.env.S3_LOCAL_ENDPOINT;
	});

	context('getObject', () => {

		it('Should return the same response when calling to getObject method', async () => {

			this.s3ClientMock.on(GetObjectCommand).resolves(s3Params);

			const getObjectInstance = await S3.getObject(s3Params);

			assert.deepStrictEqual(getObjectInstance, s3Params);
		});

		it('Should rejects the promise calling to getObject method', async () => {

			this.s3ClientMock.on(GetObjectCommand).resolves(new Error(message));

			assert.rejects(S3.getObject(s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should call with the same params to getObject method', async () => {

			this.s3ClientMock.on(GetObjectCommand).resolves(s3Params);

			await S3.getObject(s3Params);

			this.s3ClientMock.commandCalls(GetObjectCommand, s3Params);
		});
	});

	context('putObject', () => {

		it('Should return a the same response when calling to putObject method', async () => {

			this.s3ClientMock.on(PutObjectCommand).resolves(s3Params);

			const putObjectInstance = await S3.putObject(s3Params);

			assert.deepStrictEqual(putObjectInstance, s3Params);
		});

		it('Should rejects the promise calling to putObject method', async () => {

			this.s3ClientMock.on(PutObjectCommand).resolves(new Error(message));

			assert.rejects(S3.putObject(s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should call with the same params to putObject method', async () => {

			this.s3ClientMock.on(PutObjectCommand).resolves(s3Params);

			await S3.putObject(s3Params);

			this.s3ClientMock.commandCalls(PutObjectCommand, s3Params);
		});
	});

	context('deleteObject', () => {

		it('Should return a the same response when calling to deleteObject method', async () => {

			this.s3ClientMock.on(DeleteObjectCommand).resolves(s3Params);

			const deleteObjectInstance = await S3.deleteObject(s3Params);

			assert.deepStrictEqual(deleteObjectInstance, s3Params);
		});

		it('Should rejects the promise calling to deleteObject method', async () => {

			this.s3ClientMock.on(DeleteObjectCommand).resolves(new Error(message));

			assert.rejects(S3.deleteObject(s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should call with the same params to deleteObject method', async () => {

			this.s3ClientMock.on(DeleteObjectCommand).resolves(s3Params);

			await S3.deleteObject(s3Params);

			this.s3ClientMock.commandCalls(DeleteObjectCommand, s3Params);
		});
	});

	context('deleteObjects', () => {

		it('Should return a the same response when calling to deleteObjects method', async () => {

			this.s3ClientMock.on(DeleteObjectsCommand).resolves(s3Params);

			const deleteObjectsInstance = await S3.deleteObjects(s3Params);

			assert.deepStrictEqual(deleteObjectsInstance, s3Params);
		});

		it('Should rejects the promise calling to deleteObjects method', async () => {

			this.s3ClientMock.on(DeleteObjectsCommand).resolves(new Error(message));

			assert.rejects(S3.deleteObjects(s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should call with the same params to deleteObjects method', async () => {

			this.s3ClientMock.on(DeleteObjectCommand).resolves(s3Params);

			await S3.deleteObjects(s3Params);

			this.s3ClientMock.commandCalls(DeleteObjectCommand, s3Params);
		});
	});

	context('listObjects', () => {

		it('Should return a the same response when calling to listObjects method', async () => {

			this.s3ClientMock.on(ListObjectsCommand).resolves(s3Params);

			const listObjectsInstance = await S3.listObjects(s3Params);

			assert.deepStrictEqual(listObjectsInstance, s3Params);
		});

		it('Should rejects the promise calling to listObjects method', async () => {

			this.s3ClientMock.on(ListObjectsCommand).resolves(new Error(message));

			assert.rejects(S3.listObjects(s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should call with the same params to listObjects method', async () => {

			this.s3ClientMock.on(ListObjectsCommand).resolves(s3Params);

			await S3.listObjects(s3Params);

			this.s3ClientMock.commandCalls(ListObjectsCommand, s3Params);
		});
	});

	context('listBuckets', () => {

		it('Should return a the same response when calling to listBuckets method', async () => {

			this.s3ClientMock.on(ListBucketsCommand).resolves(s3Params);

			const listBucketsInstance = await S3.listBuckets(s3Params);

			assert.deepStrictEqual(listBucketsInstance, s3Params);
		});

		it('Should rejects the promise calling to listBuckets method', async () => {

			this.s3ClientMock.on(ListBucketsCommand).resolves(new Error(message));

			assert.rejects(S3.listBuckets(s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should call with the same params to listBuckets method', async () => {

			this.s3ClientMock.on(ListBucketsCommand).resolves(s3Params);

			await S3.listBuckets(s3Params);

			this.s3ClientMock.commandCalls(ListBucketsCommand, s3Params);
		});
	});

	context('createBucket', () => {

		it('Should return a the same response when calling to createBucket method', async () => {

			this.s3ClientMock.on(CreateBucketCommand).resolves(s3Params);

			const createBucketInstance = await S3.createBucket(s3Params);

			assert.deepStrictEqual(createBucketInstance, s3Params);
		});

		it('Should rejects the promise calling to createBucket method', async () => {

			this.s3ClientMock.on(CreateBucketCommand).resolves(new Error(message));

			assert.rejects(S3.createBucket(s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should call with the same params to createBucket method', async () => {

			this.s3ClientMock.on(CreateBucketCommand).resolves(s3Params);

			await S3.createBucket(s3Params);

			this.s3ClientMock.commandCalls(CreateBucketCommand, s3Params);
		});
	});

	context('deleteBucket', () => {

		it('Should return a the same response when calling to deleteBucket method', async () => {

			this.s3ClientMock.on(DeleteBucketCommand).resolves(s3Params);

			const deleteBucketInstance = await S3.deleteBucket(s3Params);

			assert.deepStrictEqual(deleteBucketInstance, s3Params);
		});

		it('Should rejects the promise calling to deleteBucket method', async () => {

			this.s3ClientMock.on(DeleteBucketCommand).resolves(new Error(message));

			assert.rejects(S3.deleteBucket(s3Params), {
				name: 'Error',
				message
			});
		});

		it('Should call with the same params to deleteBucket method', async () => {

			this.s3ClientMock.on(DeleteBucketCommand).resolves(s3Params);

			await S3.deleteBucket(s3Params);

			this.s3ClientMock.commandCalls(DeleteBucketCommand, s3Params);
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

			this.s3ClientMock.on(HeadObjectCommand).resolves(response);

			const headObjectResponse = await S3.headObject(s3Params);

			assert.deepStrictEqual(headObjectResponse, response);
		});

		it('Should rejects the promise calling to headObject method', async () => {

			this.s3ClientMock.on(HeadObjectCommand).resolves(new Error(message));

			assert.rejects(S3.headObject(s3Params), {
				name: 'Error',
				message
			});
		});
	});

	// context('copyObject', () => {

	// 	const response = {
	// 		LastModified: '2019-11-27T18:50:40.000Z',
	// 		ETag: '"e77f5136cc15419e4c81beba285d4bde"'
	// 	};

	// 	it('Should return a the same response when calling to copyObject method', async () => {

	// 		this.s3ClientMock.on(CopyObjectCommand).resolves(s3Params);

	// 		const copyObjectResponse = await S3.copyObject(s3Params);

	// 		assert.deepStrictEqual(copyObjectResponse, response);
	// 	});

	// 	it('Should rejects the promise calling to copyObject method', async () => {


	// 		this.s3ClientMock.on(PutObjectCommand).resolves(new Error(message));

	// 		assert.rejects(S3.copyObject(s3Params), {
	// 			name: 'Error',
	// 			message
	// 		});
	// 	});

	// 	// it('Should call with the same params to copyObject method', async () => {

	// 	// 	await S3.copyObject(s3Params);

	// 		// sinon.assert.calledWithExactly(s3Wrapper.copyObject, s3Params);
	// 	// });

	// });

	// context('createPresignedPost', () => {

	// 	const response = {
	// 		url: 'https://examplebucket.s3.us-east-1.amazonaws.com/',
	// 		fields: {
	// 			bucket: 'examplebucket',
	// 			'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
	// 			'X-Amz-Credential': 'AKIAQMPR4JN2JZLNHRH4/20230217/us-east-1/s3/aws4_request',
	// 			'X-Amz-Date': '20230217T204948Z',
	// 			key: 'objectkey',
	// eslint-disable-next-line max-len, max-len
	// 			Policy: 'eyJleHBpcmF0aW9uIjoiMjAyMy0wMi0xN1QyMTo0OTo0OFoiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJleGFtcGxlYnVja2V0In0seyJYLUFtei1BbGdvcml0aG0iOiJBV1M0LUhNQUMtU0hBMjU2In0seyJYLUFtei1DcmVkZW50aWFsIjoiQUtJQVFNUFI0Sk4ySlpMTkhSSDQvMjAyMzAyMTcvdXMtZWFzdC0xL3MzL2F3czRfcmVxdWVzdCJ9LHsiWC1BbXotRGF0ZSI6IjIwMjMwMjE3VDIwNDk0OFoifSx7ImtleSI6Im9iamVjdGtleSJ9XX0=',
	// 			'X-Amz-Signature': 'e6dd2d6bb7056dac00aab1fb31341f4006c602feae02f17ddabcb22317464a29'
	// 		}
	// 	};

	// 	it('Should return a the same response when calling to createPresignedPost method', async () => {

	// 		sinon.stub(s3Wrapper, 'createPresignedPost');

	// 		s3Wrapper.createPresignedPost.callsFake((params, callback) => {
	// 			callback(null, response);
	// 		});

	// 		const createPresignedPostResponse = await S3.createPresignedPost(s3Params);
	// 		console.log('createPresignedPostResponse:', createPresignedPostResponse);
	// 		assert.deepStrictEqual(createPresignedPostResponse, response);
	// 	});

	// 	it('Should rejects the promise calling to createPresignedPost method', async () => {

	// 		sinon.stub(s3Wrapper, 'createPresignedPost');

	// 		s3Wrapper.createPresignedPost.callsFake((params, callback) => {
	// 			callback(new Error(message), null);
	// 		});

	// 		assert.rejects(S3.createPresignedPost(s3Params), {
	// 			name: 'Error',
	// 			message
	// 		});
	// 	});

	// 	// it('Should call with the same params to createPresignedPost method', async () => {

	// 	// 	sinon.stub(s3Wrapper, 'createPresignedPost');

	// 	// 	s3Wrapper.createPresignedPost.callsFake((params, callback) => {
	// 	// 		console.log('createPresignedPost params:', params);
	// 	// 		callback(params, response);
	// 	// 	});

	// 	// 	await S3.createPresignedPost(s3Params);
	// 	// 	console.log('s3Wrapper.createPresignedPost.getCall(0):', s3Wrapper.createPresignedPost);
	// 	// 	assert.deepStrictEqual(s3Wrapper.createPresignedPost.getCall(0).args, s3Params);
	// 	// });
	// });

	// context('uploadStream', () => {

	// 	it('Should throw an error when s3 upload return an error', async () => {

	// 		const errorMessage = 'Cannot found any bucket with the provided key';

	// 		sinon.stub(S3Client, 'send').returns();

	// 		s3Wrapper.upload.callsFake((params, options, callback) => {
	// 			callback(new Error(errorMessage), null);
	// 		});

	// 		const testStream = new PassThrough();

	// 		assert.rejects(S3.uploadStream(testStream, s3Params), {
	// 			name: 'Error',
	// 			errorMessage
	// 		});
	// 	});

	// 	it('Should return the uploaded object info', async () => {

	// 		const response = {
	// 			ETag: '"a30c37a2ccde6cf699f557353762815b"',
	// 			Location: 'https://test.s3.amazonaws.com/test.csv',
	// 			key: 'test.csv',
	// 			Key: 'test.csv',
	// 			Bucket: 'test'
	// 		};

	// 		sinon.stub(S3Client, 'send').returns();

	// 		s3Wrapper.upload.callsFake((params, options, callback) => {
	// 			callback(null, response);
	// 		});

	// 		const testStream = new PassThrough();

	// 		assert.deepStrictEqual(await S3.uploadStream(testStream, s3Params), response);
	// 	});

	// });

	// context('GetObjectStream', () => {

	// 	it('Should return instance of class get object stream', () => {
	// 		const testProto = new S3.GetObjectStream();
	// 		assert.ok(GetObjectStream.prototype.isPrototypeOf(testProto));
	// 	});

	// 	it('Should process stream chunks and returned', async () => {

	// 		const streamRows = [{ test01: 'test' }, { test02: 'test' }];
	// 		const testStream = Readable.from(streamRows);

	// 		sinon.stub(S3Client, 'send').returns({ createReadStream: () => testStream });

	// 		const getObjectStream = new S3.GetObjectStream();

	// 		const streamResult = await getObjectStream.call(s3Params);

	// 		const streamData = [];
	// 		for await (const chunk of streamResult)
	// 			streamData.push(JSON.parse(chunk.toString()));

	// 		assert.deepStrictEqual(streamData, streamRows);
	// 	});

	// 	it('Should process stream chunks and returned', async () => {

	// 		const streamRows = [{ test01: 'test' }, { test02: 'test' }];
	// 		const testStream = Readable.from(streamRows);

	// 		sinon.stub(S3Client, 'getObject').returns({ createReadStream: () => testStream });

	// 		const getObjectStream = new S3.GetObjectStream();

	// 		const streamResult = await getObjectStream.call(s3Params);

	// 		const streamData = [];
	// 		for await (const chunk of streamResult)
	// 			streamData.push(JSON.parse(chunk.toString()));

	// 		assert.deepStrictEqual(streamData, streamRows);
	// 	});

	// 	it('Should process stream chunks with defined parser, process buffer and buffer size', async () => {

	// 		const streamRows = ['test-row-1', 'test-row-2'];
	// 		const testStream = Readable.from(streamRows);

	// 		sinon.stub(S3Client, 'send').returns({ createReadStream: () => testStream });

	// 		const myGetObjectStream = new MyGetObjectStream();

	// 		const streamResult = await myGetObjectStream.call(s3Params);

	// 		const streamData = [];
	// 		for await (const chunk of streamResult)
	// 			streamData.push(chunk.toString());

	// 		assert.deepStrictEqual(streamData, streamRows.map(row => `${row}-processed`));
	// 	});

	// });

});

describe('getSignedUrl', () => {

	afterEach(() => sinon.restore());

	const url = 'https://bucket-name.s3.us-east-1.amazonaws.com/path/to/file.txt';

	it('Should return a the same response when calling to getSignedUrl method', async () => {

		sinon.stub(s3Wrapper, 'getSignedUrl').returns(url);

		const presignedUrl = await S3.getSignedUrl(s3Params);

		assert.deepStrictEqual(presignedUrl, url);
	});

	it('Should rejects the promise calling to getSignedUrl method', async () => {

		sinon.stub(s3Wrapper, 'getSignedUrl').rejects(new Error(message));

		await assert.rejects(S3.getSignedUrl('getObject', s3Params), {
			name: 'Error',
			message
		});
	});

	it('Should call with the same params to getSignedUrlPromise method', async () => {

		sinon.stub(s3Wrapper, 'getSignedUrl').returns(url);

		await S3.getSignedUrl(s3Params);

		// sinon.assert.calledWithExactly(s3Wrapper.getSignedUrl, S3Client, new GetObjectCommand(s3Params), {});
	});
});
