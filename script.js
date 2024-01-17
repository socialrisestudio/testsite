fetch('https://ipinfo.io/json?token=d6a3cde87c2e63')
.then(response => response.json())
.then(data => {
    const locationElement = document.getElementById('user-location');
    locationElement.textContent = data.city || 'your location'; // Fallback to 'your location' if city is not available
})
.catch(() => {
    document.getElementById('user-location').textContent = 'your location';
});
