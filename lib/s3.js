'use strict';

const s3Wrapper = require('./s3Wrapper');

module.exports = {
	getObject: params => s3Wrapper.getObject(params).promise(),
	putObject: params => s3Wrapper.putObject(params).promise(),
	deleteObject: params => s3Wrapper.deleteObject(params).promise(),
	listObjects: params => s3Wrapper.listObjects(params).promise(),
	listBuckets: params => s3Wrapper.listBuckets(params).promise(),
	createBucket: params => s3Wrapper.createBucket(params).promise(),
	deleteBucket: params => s3Wrapper.deleteBucket(params).promise()
};
