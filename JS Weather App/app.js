window.addEventListener('load', ()=>{

    let city = document.querySelector('.city');

    let country = document.querySelector('.country');

    let icon = document.querySelector('.icon');

    let degree = document.querySelector('.degree');

    let description = document.querySelector('.description');
    

    if(navigator.geolocation){
        console.log('Positioning System Active');
        navigator.geolocation.getCurrentPosition((position)=>{
            let long = position.coords.longitude;
            let lat = position.coords.latitude;
            let key = 'f2ee92348e903e922e7c6df253537aeb';

            // const api =`api.openweathermap.org/data/2.5/weather?${lat}&${long}&appid=${key}`

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}` 

            fetch(api)
                .then((response) =>{
                    return response.json()
                })
                    .then((data) => {
                        console.log(data)
                        let APIcity = data.name;
                        let APItemperature = data.main.temp;
                        let APIcountry = data.sys.country;
                        let APIdescription = data.weather[0].description;
                        let APIicon = data.weather[0].icon;

                        //RESETTING THE DOM
                        city.innerText = APIcity;
                        degree.innerText = APItemperature;
                        description.innerText = APIdescription;
                        //icon = APIicon;
                        country.innerText = APIcountry;

                        icon.src = `https://openweathermap.org/img/wn/${APIicon}@2x.png`

                        console.log(icon.href)

                    });
            
        })
    }

})