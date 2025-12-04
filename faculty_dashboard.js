document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const eventName = document.getElementById('event-name').value;
    const eventDescription = document.getElementById('event-description').value;
    
    const notification = document.createElement('div');
    notification.innerHTML =` <strong>${eventName}</strong>: ${eventDescription}`;
    document.getElementById('notifications').appendChild(notification);
    
    // Clear form after adding event
    document.getElementById('event-form').reset();
});

function generateReport() {
    const reportContent = "Event Report: Overview of added events and registrations.";
    document.getElementById('report').innerText = reportContent;
}