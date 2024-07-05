// script.js
document.addEventListener('DOMContentLoaded', () => {
    updateCurrentTimeUTC();
    updateCurrentDay();
});

function updateCurrentTimeUTC() {
    const utcElement = document.getElementById('utc-time');
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4]; // Extract time in HH:MM:SS format
    utcElement.textContent = utcTime;
}

function updateCurrentDay() {
    const dayElement = document.getElementById('current-day');
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const currentDay = daysOfWeek[now.getUTCDay()];
    dayElement.textContent = currentDay;
}
