window.addEventListener('load',()=> {
    let long;
    let lat;
    let metric = 'metric'
    let key = '4465821f7e8c3391cd3f8bd93139d4a7';
    let tempDegree = document.querySelector('.temperature-degree');
    let tempFeel = document.querySelector('.temperature-feel');
    let location = document.querySelector('.location-timezone')
    let tempType = document.querySelectorAll('.type-degree')
console.log(tempType)
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude

            const api  = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={current}&units=${metric}&appid=${key}`;
            fetch(api)
                .then(response => {
                    return response.json()
                })
                .then(data => { console.log(data);
                const {temp,feels_like} = data.current;
                const location_time = data.timezone;
                tempDegree.textContent = temp;
                tempFeel.textContent = feels_like;
                location.textContent = location_time;

                for(let i = 0;i< tempType.length; i++) {
                    metric === 'metric'?  tempType[i].textContent = 'C': tempType[i].textContent = 'F';
                    console.log(tempType)
                }

                });

        });
    }
})