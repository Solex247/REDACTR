document.addEventListener('DOMContentLoaded', function () {
    const redactForm = document.getElementById('redact-form');
    const originalText = document.getElementById('original-text');
    const wordsToRedact = document.getElementById('words-to-redact');
    const redactedOutput = document.getElementById('redacted-output');

    redactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        redactText();
    });

    const redactButton = document.getElementById('redact-button');
    redactButton.addEventListener('click', redactText);

    function redactText() {
        const text = originalText.value;
        const words = wordsToRedact.value.split(' ');

        let redactedText = text;

        words.forEach(word => {
            const regex = new RegExp(word, 'gi');
            redactedText = redactedText.replace(regex, '****');
        });

        redactedOutput.textContent = redactedText;
    }
});
