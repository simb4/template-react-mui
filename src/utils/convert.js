/*eslint no-extend-native: 0 */
Date.prototype.startOfDay = function() {
	let start = new Date(this);
	start.setHours(0,0,0,0);
	return start;
}

Date.prototype.endOfDay = function() {
	let end = new Date(this);
	end.setHours(23,59,59,999);
	return end;
}

Date.prototype.addDays = function(days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
}
/* jshint ignore:end */
