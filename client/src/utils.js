export function FormatDate(utcTime){
	// if (utcTime is null or '') return '';
	var date = new Date(utcTime * 1000);
	var min = date.getMinutes();
	if (min < 10){
		min = "0" + min;
	}
	var hours = date.getHours();
	if (hours < 10)
		hours = "0" + hours;
	return hours + ":" + min;
}

export function FormatLateness(seconds) {
	if (seconds < 60)
		return '';
	if (seconds < 3600)
		return Math.floor(seconds/60) + ' min';
	return '1hr +';
}