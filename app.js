// I wrote out my logic for finding the solutions, but really didn't know where to start for this programming wise.
// So I've gone through the provided solution and reordered it to align with what makes the most sense to me.
// First I would watch for the form submission, then pull that into an array as individual words and sort alphabetically.
// 

function watchFormSubmission() {
	$('.js-text-form').submit(function(event) {
		event.preventDefault();
		var userText = $(this).find('#user-text').val();
		reportOnText(removeReturns(userText));
	});
}

function textBreakdown(text) {
	return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
	// My thought process is that we should first convert the text into an array, but this approach just creates a long
	// string.  Why go with a string over an array?
	// I'm not sure what match(/\b[^\s]+\b/g) means.  I read through and understand the explanation of match(), but 
	// I'm not sure how the (/\b[^\s]+\b/g) was generated.
}

function removeReturns(text) {
	return text.replace(/\r?\n\|\r/g, "");
}
// I wouldn't have realized that I needed to removeReturns on my own.  And same as above, I'm not sure how
// (/\r?\n\|\r/g,  was generated, but I know those items are being replaced with nothing, "") 


// Now that we have a normalized string we can perform our analysis.
// Though I don't really like the approach in the solution and how it uses hoisting for var=token;
// why didn't the author take more of a liniar approach for the solution? 


function getAverageWordLength(basicWords) {
	var basicWords = textBreakdown(text);
	var totalLength = basicWords.join("").length;
	return (totalLength / basicWords.length).toFixed(2);
// why do we want getAverageWordLength to be a numeric string?  Can't we just keep as a number but reduce to 
// 2 decimal places.
}

function countDistinctWords(basicWords) {
	var distinctWords = [];
	for (var i=0; i<basicWords.length; i++) {
		if (distinctWords.indexOf(basicWords[i]) === -1) {
			// The indexOf() method returns the position of the first occurrence of a specified value in a string.
			// This method returns -1 if the value to search for never occurs.
			distinctWords.push(basicWords[i]);
		}
	}
	return distinctWords.length;
}

function reportOnText(text) {
	var numDistinctWords = countDistinctWords(basicWords);
	var numTotalWords = textBreakdown.length;
	var averageWordLength = getAverageWordLength(basicWords);
// This next portion is for displaying the rusults.
	var textReport = $('.js-text-report');
	textReport.find('js-word-count').text(numTotalWords);
	textReport.find('js-unique-word-count').text(numDistinctWords);
	textReport.find('js-average-word-length').text(getAverageWordLength + ' characters');
	textReport.removeClass('hidden');
}

$(function() {
	watchFormSubmission;
});
