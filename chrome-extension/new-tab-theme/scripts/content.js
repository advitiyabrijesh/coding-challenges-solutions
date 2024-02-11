// content.js

// Function to update the current date and time
function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toLocaleString();
    dateTimeElement.textContent = formattedDateTime;
}

// Update the date and time when the page loads
updateDateTime();

// Refresh the date and time every second
setInterval(updateDateTime, 1000);
