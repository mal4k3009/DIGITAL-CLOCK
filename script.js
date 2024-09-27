function updateClock() {
    const now = new Date(); // Get the current date and time

    // Get hours, minutes, seconds, and format them
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Convert to 12-hour format and determine AM/PM
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 0 to 12 for 12 AM

    // Get the clock elements
    const hour1 = document.getElementById('hour1');
    const hour2 = document.getElementById('hour2');
    const minute1 = document.getElementById('minute1');
    const minute2 = document.getElementById('minute2');
    const second1 = document.getElementById('second1');
    const second2 = document.getElementById('second2');
    const amPmDisplay = document.getElementById('amPm');

    // Update hour, minute, second, and AM/PM display
    const newHour = String(hours).padStart(2, '0');
    const newMinute = String(minutes).padStart(2, '0');
    const newSecond = String(seconds).padStart(2, '0');

    hour1.textContent = newHour[0]; // Update first hour digit
    hour2.textContent = newHour[1]; // Update second hour digit
    minute1.textContent = newMinute[0]; // Update first minute digit
    minute2.textContent = newMinute[1]; // Update second minute digit
    second1.textContent = newSecond[0]; // Update first second digit
    second2.textContent = newSecond[1]; // Update second second digit
    amPmDisplay.textContent = amPm; // Update AM/PM display

    // Get the date in DD/MM/YYYY format
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = now.getFullYear();
    
    const dateDisplay = document.getElementById('date'); // Get the date element
    dateDisplay.textContent = `${day}/${month}/${year}`; // Update the date display
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);
