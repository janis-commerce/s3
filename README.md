# s3

[![Build Status](https://travis-ci.org/janis-commerce/s3.svg?branch=master)](https://travis-ci.org/janis-commerce/s3)
[![Coverage Status](https://coveralls.io/repos/github/janis-commerce/s3/badge.svg?branch=master)](https://coveralls.io/github/janis-commerce/s3?branch=master)

A package to handle the S3 requests

## Installation
```sh
npm install @janiscommerce/s3
```
## Description
This is a package that wrapped the AWS SDK for the management S3 request, it will make easier the using of it. For more information read the AWS S3 SDK [AWS S3 SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html)

The possible methods are:

* `getObject`
* `putObject`
* `deleteObject`
* `listObjects`
* `listBuckets`
* `createBucket`
* `deleteBucket`

## Usage
```js
const S3 = require('@janiscommerce/s3');

const putObjectParams = {
	Body: 'body',
	Bucket: 'bucketName',
	Key: `objectKey`
};

const s3Response = S3.putObject(putObjectParams);

return s3Response.then(response => {
	// do some stuf with the success
}).cath(err => {
	// do some stuf with the error
})

```
