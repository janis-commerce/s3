'use strict';

const { S3, Endpoint } = require('aws-sdk');

const { IS_OFFLINE, S3_LOCAL_ENDPOINT } = process.env;

const localConfig = {
	s3ForcePathStyle: true,
	endpoint: S3_LOCAL_ENDPOINT ? /* istanbul ignore next */ new Endpoint(S3_LOCAL_ENDPOINT) : null,
	accessKeyId: 'S3RVER',
	secretAccessKey: 'S3RVER'
};

// Use the ignore because cannot change that process env globally
module.exports = /* istanbul ignore next */ IS_OFFLINE && S3_LOCAL_ENDPOINT ? /* istanbul ignore next */ new S3(localConfig) : new S3();
