# s3

[![Build Status](https://travis-ci.org/janis-commerce/s3.svg?branch=master)](https://travis-ci.org/janis-commerce/s3)
[![Coverage Status](https://coveralls.io/repos/github/janis-commerce/s3/badge.svg?branch=master)](https://coveralls.io/github/janis-commerce/s3?branch=master)

A package to handle the S3 requests

## Installation
```sh
npm install @janiscommerce/s3
```
## Description
This is a wrapper for the AWS SDK for the management S3 request, that makes easier the use of it.

For more information read the [AWS S3 SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html)

The possible methods are:

* `getObject`
* `putObject`
* `deleteObject`
* `listObjects`
* `listBuckets`
* `createBucket`
* `deleteBucket`
* `getSignedUrl` (alias of `getSignedUrlPromise`)

All of them receive the same params and are promisified.

## Usage
```js
const S3 = require('@janiscommerce/s3');

try {
	const s3Response = await S3.putObject({
		Body: 'File content',
		Bucket: 'bucket-ame',
		Key: `path/to/file.txt`
	});
	console.log(s3Response);
} catch(err) {
	handleError(err);
}
```
