# s3

![Build Status](https://github.com/janis-commerce/s3/workflows/Build%20Status/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/janis-commerce/s3/badge.svg?branch=master)](https://coveralls.io/github/janis-commerce/s3?branch=master)
[![npm version](https://badge.fury.io/js/%40janiscommerce%2Fs3.svg)](https://www.npmjs.com/package/@janiscommerce/s3)

A package to handle the S3 requests

## Installation
```sh
npm install @janiscommerce/s3
```
## Description
This is a wrapper for the AWS SDK for the management S3 request, that makes easier the use of it.

For more information read the [AWS S3 SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html)

The possible methods are:

* `getObject`
* `putObject`
* `headObject`
* `copyObject`
* `deleteObject`
* `deleteObjects`
* `listObjects`
* `listBuckets`
* `createBucket`
* `deleteBucket`
* `getSignedUrl`
* `createPresignedPost`

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

## Streams

For manage stream the package provide

### GetObjectStream

The class to get, parse and process S3 streams.

#### Usage
```js
const { GetObjectStream } = require('@janiscommerce/s3');

class MyGetObjectStream extends GetObjectStream {

	// Parse the incoming data before process rows
	get parsers() {
		return [
			/*
			* Your parsers here as array, where:
			* [function, ...params]
			*/
		]
	}

	// Manage the buffer rows size
	get bufferSize() {
		return 10;
	}

	// Process the buffered rows and return and array to continue.
	async processBuffer(buffer) {
		// ... Your logic here ...
	}

}

const myGetObjectStream = new MyGetObjectStream();

const myProcessedStream = myGetObjectStream.call({
	Bucket: 'bucket-ame',
	Key: `path/to/file.txt`
});
```

### uploadStream

Method to manage streams upload

#### Usage
```js
const { uploadStream } = require('@janiscommerce/s3');

try {
	const response = await uploadStream(someStream, {
		Bucket: 'bucket-ame',
		Key: `path/to/file.txt`
	});
} catch(e) {
	console.log(e)
}
```

