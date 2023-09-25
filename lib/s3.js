'use strict';

const s3Wrapper = require('./s3Wrapper');

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
	HeadObjectCommand,
	CopyObjectCommand
} = s3Wrapper;

const GetObjectStream = require('./getObjectStream');

const getObject = async params => {
	const { Body, ...response } = await S3Client.send(new GetObjectCommand(params));

	let bodyBuffered;

	try {
		// BODY is Readable type; since Node 17+ can convert this new type using Readable.toArray API and Buffer.concat
		bodyBuffered = Buffer.concat(await Body.toArray());

	} catch(error) {
		// If Body is empty will throw;
		bodyBuffered = null;
	}

	return {
		...response,
		Body: bodyBuffered
	};
};

module.exports = {
	getObject,
	getObjectRaw: params => S3Client.send(new GetObjectCommand(params)),
	putObject: params => S3Client.send(new PutObjectCommand(params)),
	deleteObject: params => S3Client.send(new DeleteObjectCommand(params)),
	deleteObjects: params => S3Client.send(new DeleteObjectsCommand(params)),
	listObjects: params => S3Client.send(new ListObjectsCommand(params)),
	listBuckets: params => S3Client.send(new ListBucketsCommand(params)),
	createBucket: params => S3Client.send(new CreateBucketCommand(params)),
	deleteBucket: params => S3Client.send(new DeleteBucketCommand(params)),
	headObject: params => S3Client.send(new HeadObjectCommand(params)),
	copyObject: params => S3Client.send(new CopyObjectCommand(params)),
	getSignedUrl: (params, options = {}) => s3Wrapper.getSignedUrl(S3Client, new GetObjectCommand(params), options),
	createPresignedPost: params => s3Wrapper.createPresignedPost(S3Client, params),
	uploadStream: async (streamToUpload, params, options) => {
		return s3Wrapper.Upload({
			client: S3Client,
			params: { ...params, Body: streamToUpload },
			...options
		});
	},
	GetObjectStream
};
