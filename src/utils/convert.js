/*eslint no-extend-native: 0 */

Date.prototype.startOfDay = function() {
	var start = new Date(this);
	start.setHours(0,0,0,0);
	return start;
}

Date.prototype.endOfDay = function() {
	var end = new Date(this);
	end.setHours(23,59,59,999);
	return end;
}

Date.prototype.addDays = function(days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
}

Date.prototype.startOfMonth = function() {
	return new Date(this.getFullYear(), this.getMonth(), 1);
}

Date.prototype.endOfMonth = function() {
	return new Date(this.getFullYear(), this.getMonth() + 1, 0);
}

Date.prototype.addMonths = function(months) {
	var date = new Date(this.getFullYear(), this.getMonth(), this.getDate());
	date.setMonth(date.getMonth() + months);
	return date;
}

/* jshint ignore:end */
