'use strict';

const { S3Client, GetObjectCommand } = require('./s3Wrapper');

module.exports = {
	getObject: params => S3Client.send(new GetObjectCommand(params))
};
