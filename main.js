fetch('http://ip-api.com/json/')
.then(response => response.json())
.then(data => {
    const locationElement = document.getElementById('user-location');
    locationElement.textContent = data.city || 'your location'; // Fallback to 'your location' if city is not available
})
.catch(() => {
    document.getElementById('user-location').textContent = 'your location';
});
