function condenseMeetingTimes(arrayOfMeetings) {

	var sortedMeetings = arrayOfMeetings.slice().sort(function(a, b) {
		return a.startTime > b.startTime ? 1 : -1;
	});
	
	var mergedMeetingList = [sortedMeetings[0]];

	for (var i = 1; i < sortedMeetings.length; i++) {

		var currentMeeting = sortedMeetings[i];
		var lastMergedMeeting = mergedMeetingList[mergedMeetingList.length - 1];

		if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
			lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
		} else {
			mergedMeetingList.push(currentMeeting);
		}
	}
	return mergedMeetingList;
}

console.log(condenseMeetingTimes([
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]));