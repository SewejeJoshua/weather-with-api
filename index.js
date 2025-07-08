fetch("https://api.open-meteo.com/v1/forecast?latitude=6.52&longitude=3.37&current_weather=true")
    .then(response => response.json())
    .then(data => console.log(`current temperature for ${data.current_weather.time}:`, data.current_weather.temperature))