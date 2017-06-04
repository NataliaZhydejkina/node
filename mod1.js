var globalValue;
exports.returnGlobal = function () {
	console.log(global);
	return globalValue;
};
exports.setGlobal = function (val) {
	globalValue = val;
};