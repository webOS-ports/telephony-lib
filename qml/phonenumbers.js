Qt.include("external/PhoneNumberMetadata.js");
Qt.include("external/PhoneNumberNormalizer.js");
Qt.include("external/PhoneNumber.js");

// Only some simple wrappers around PhoneNumber.js to easily use it from QML

function isPlain(number) {
	return PhoneNumber.IsPlain(number);
}

function parse(number, region) {
	return PhoneNumber.Parse(number, region);
}
