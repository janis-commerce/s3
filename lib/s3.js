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
	CopyObjectCommand,
	createPresignedPost
	// Upload
} = s3Wrapper;

const GetObjectStream = require('./getObjectStream');

module.exports = {
	getObject: params => S3Client.send(new GetObjectCommand(params)),
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
	createPresignedPost: params => createPresignedPost(S3Client, params),
	// uploadStream: (streamToUpload, params, options) => {
	// 	return new Promise((resolve, reject) => {
	// 		return Upload(S3Client, { ...params, Body: streamToUpload }, options, (error, data) => {
	// 			if(error)
	// 				reject(error);

	// 			resolve(data);
	// 		});
	// 	});
	// },
	GetObjectStream
};
