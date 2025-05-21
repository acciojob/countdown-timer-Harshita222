// Your script here.
const userInput = document.getElementById('userInput');
const countDownDisplay = document.getElementById('countDown');
const endTimeDisplay = document.getElementById('endTime');
const button = document.querySelector('button');
button.addEventListener('click', function() {
    // Get the duration in minutes
    const duration = parseInt(userInput.value);
    if (isNaN(duration) || duration <= 0) {
        alert("Please enter a valid number of minutes.");
        return;
    }

    // Calculate end time
    const now = new Date();
    const endTime = new Date(now.getTime() + duration * 60000);
    endTimeDisplay.textContent = `End Time: ${endTime.toLocaleTimeString()}`;
	let remainingTime = duration * 60; // convert minutes to seconds

    const interval = setInterval(() => {
        // Calculate minutes and seconds
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        // Display remaining time
        countDownDisplay.textContent = `Countdown: ${minutes}m ${seconds}s`;

        // Decrease remaining time
        remainingTime--;

        // Stop countdown when it reaches zero
        if (remainingTime < 0) {
            clearInterval(interval);
            countDownDisplay.textContent = "Countdown finished!";
        }
    }, 1000); // update every second
});