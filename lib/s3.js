'use strict';

const stream = require('stream');
const s3Wrapper = require('./s3Wrapper');
const getObjectStream = require('./getObjectStream');

module.exports = {
	getObject: params => s3Wrapper.getObject(params).promise(),
	putObject: params => s3Wrapper.putObject(params).promise(),
	deleteObject: params => s3Wrapper.deleteObject(params).promise(),
	listObjects: params => s3Wrapper.listObjects(params).promise(),
	listBuckets: params => s3Wrapper.listBuckets(params).promise(),
	createBucket: params => s3Wrapper.createBucket(params).promise(),
	deleteBucket: params => s3Wrapper.deleteBucket(params).promise(),
	getSignedUrl: (...params) => s3Wrapper.getSignedUrlPromise(...params),
	headObject: params => s3Wrapper.headObject(params).promise(),
	createPresignedPost: params => {
		return new Promise((resolve, reject) => {
			s3Wrapper.createPresignedPost(params, (err, data) => {
				if(err)
					return reject(err);
				resolve(data);
			});
		});
	},
	uploadStream: (streamToUpload, params, options) => {
		return new Promise((resolve, reject) => {
			streamToUpload.pipe((() => {
				const pass = new stream.PassThrough();
				s3Wrapper.upload({ ...params, Body: pass }, options, (error, data) => {
					if(error)
						reject(error);

					resolve(data);
				});
				return pass;
			})());
		});
	},
	getObjectStream

};
