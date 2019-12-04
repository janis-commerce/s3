'use strict';

const s3Wrapper = require('./s3Wrapper');

module.exports = {
	putObject: params => s3Wrapper.putObject(params).promise()
};
