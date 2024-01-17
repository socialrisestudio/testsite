fetch('https://ip-api.com/json/')
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    const locationElement = document.getElementById('user-location');
    if(data && data.city) {
        locationElement.textContent = data.city;
    } else {
        throw new Error('Location data is not available');
    }
})
.catch(error => {
    console.log('Error fetching or parsing the data:', error);
    document.getElementById('user-location').textContent = 'your location';
});
