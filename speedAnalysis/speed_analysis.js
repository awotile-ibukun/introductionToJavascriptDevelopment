let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest(){
    //set the test text
    document.getElementById('inputText').value = testText;

    //reset user input, make the not readonly and focus the input text
    let userInput = document.getElementById('userInput');
    
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();


    // reset the output display div
    document.getElementById('output').innerHTML = "";

    //start timer
    startTime = new Date().getTime();


}

function endTest(){
    // keep track of the endTime
    endTime = new Date().getTime();

    //disable userInput so you can no longer type again.

    document.getElementById('userInput').readOnly = true;

    //calculate time elapsed and word per minute(wpm)

    let timeElapsed = (endTime - startTime)/ 1000 //dividing by 1000 convert millisec to secs.
    let userTypedText = document.getElementById('userInput').value;

 
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    let wpm = 0;

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

        // Display the results
        var outputDiv = document.getElementById("output");
        outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
            "<p>Words Typed: " + typedWords + "</p>" +
            "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
            "<p>Words Per Minute (WPM): " + wpm + "</p>";


}