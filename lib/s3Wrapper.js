'use strict';

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
} = require('@aws-sdk/client-s3');

const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const { createPresignedPost } = require('@aws-sdk/s3-presigned-post');
// const { Upload } = require('@aws-sdk/lib-storage');

const { IS_OFFLINE, S3_LOCAL_ENDPOINT } = process.env;

const localConfig = {
	s3ForcePathStyle: true,
	endpoint: S3_LOCAL_ENDPOINT || null,
	accessKeyId: 'S3RVER',
	secretAccessKey: 'S3RVER'
};

// Use the ignore because cannot change that process env globally
module.exports = {
	S3Client: /* istanbul ignore next */ IS_OFFLINE && S3_LOCAL_ENDPOINT ? /* istanbul ignore next */ new S3Client(localConfig) : new S3Client(),
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
	getSignedUrl,
	createPresignedPost
	// Upload
};
