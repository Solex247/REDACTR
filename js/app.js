document.getElementById("redact-button").addEventListener("click", function () {
    const originalText = document.getElementById("original-text").value;
    const redactWords = document.getElementById("redact-words").value.split(" ");
    const replacementText = document.getElementById("replacement-text").value;

    const startTime = Date.now(); // Start time

    let redactedText = originalText;

    let wordsScanned = 0;
    let wordsMatched = 0;
    let charactersScrambled = 0;

    redactWords.forEach((word) => {
        const regex = new RegExp("\\b" + word + "\\b", "gi");
        const matches = redactedText.match(regex);

        if (matches) {
            wordsMatched += matches.length;
            charactersScrambled += word.length * matches.length;
            redactedText = redactedText.replace(regex, replacementText);
        }
    });

    const endTime = Date.now(); // End time
    const timeTaken = ((endTime - startTime) / 1000).toFixed(2); // Calculate time taken in seconds

    document.getElementById("redacted-output").textContent = redactedText;
    document.getElementById("words-scanned").textContent = redactWords.length;
    document.getElementById("words-matched").textContent = wordsMatched;
    document.getElementById("characters-scrambled").textContent = charactersScrambled;
    document.getElementById("time-taken").textContent = timeTaken;
});
