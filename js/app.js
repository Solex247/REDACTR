document.getElementById("redact-button").addEventListener("click", function () {
    const originalText = document.getElementById("original-text").value;
    const redactWords = document.getElementById("redact-words").value.split(" ");
    const replacementText = document.getElementById("replacement-text").value;

    let redactedText = originalText;

    redactWords.forEach((word) => {
        const regex = new RegExp("\\b" + word + "\\b", "gi");
        redactedText = redactedText.replace(regex, replacementText);
    });

    document.getElementById("redacted-output").textContent = redactedText;
});
