// Generate random number of available seats
const randomNumber = Math.floor(Math.random() * (50 - 11 + 1)) + 11;
document.getElementById('seatAvailability').textContent = "Number of available seats: " + randomNumber;

// Add attendee fields based on the number of attendees
document.getElementById('countofAttendees').addEventListener('change', function () {
    let count = document.getElementById('countofAttendees').value;
    let attendeeDetails = document.getElementById('attendeeDetails');
    let AdditionalAttendee = document.getElementById('AdditionalAttendee');
    if (count == 1) {
        AdditionalAttendee.innerHTML = '';
        return;
    }

    let html = '';
    for (let i = 2; i <= count; i++) {
        html += `
            <div class="labelsContainer">
                <label for="name">Name of Attendee ${i}:</label>
                <input type="text" name="name" id="name${i}" autocomplete="name">
            </div>
        `;
    }
    // Append the html to the AdditionalAttendee div
    AdditionalAttendee.innerHTML = html;
});