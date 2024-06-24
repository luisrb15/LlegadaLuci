document.addEventListener('DOMContentLoaded', (event) => {
    // Define the start date and time
    const startDate = new Date("2024-06-24T10:30:00").getTime();
    
    // Define the target date and time
    const targetDate = new Date("2024-10-19T10:33:00").getTime();

    // Calculate the total duration from the start date to the target date
    const totalDuration = targetDate - startDate;

    // Function to update the countdown and background size
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="countdown"
        document.getElementById("countdown").innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        // Calculate the percentage of time passed and adjust background size
        const timePassed = now - startDate;
        const percentagePassed = (timePassed / totalDuration) * 100;

        const scaleFactor = 1 + (percentagePassed / 100 * 5);
        document.getElementById('background-image').style.transform = `scale(${scaleFactor})`;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("countdown").innerHTML = "¡LLEGO!";
            document.getElementById('background-image').style.transform = 'scale(1)'; // Final size
        }
    };

    // Update the countdown immediately
    updateCountdown();

    // Update the countdown every second
    const countdown = setInterval(updateCountdown, 1000);
});
