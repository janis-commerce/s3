# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## Unreleased

## [2.0.3] - 2024-08-15
### Fixed
- Dependencies updated

## [2.0.2] - 2023-09-26
### Fixed
- `S3.uploadStream` method now handles properly the `Upload` constructor from `lib-storage`.

## [2.0.1] - 2023-06-09
### Added
- `S3.getObjectRaw` if you want the original AWS response for `getObject`, you will receive a Readable object in `Body` property.

### Changed
- `S3.getObject` method returns a Buffer type in `Body` property.

## [2.0.0] - 2023-03-03
### Changed
- Migrate `AWS SDK` to `V3` version

## [1.5.1] - 2022-11-28
### Fixed
- `Streams` uploadStream method now resolves properly

## [1.5.0] - 2022-09-05
### Added
- Added `copyObject` method

## [1.4.1] - 2020-12-11
### Changed
- `Streams` GetObjectStream class now uses non-static methods

## [1.4.0] - 2020-11-12
### Added
- `Streams` GetObjectStream class
- `Streams` uploadStream method
- GitHub Actions for build, coverage and publish

## [1.3.0] - 2020-04-27
### Added
- `deleteObjects` method

## [1.2.1] - 2019-12-16
### Fixed
- `createPresignedPost` method now passes all the params received

## [1.2.0] - 2019-12-11
### Added
- Added `headObject` method
- Added `createPresignedPost` method

## [1.1.0] - 2019-12-06
### Added
- Added `getSignedUrl` method

## [1.0.0] - 2019-12-06
### Added
- Initial version of the package
