import React, {useEffect, useState} from "react";


function TempApp(search){
    const[ city, setCity] = useState(null);
    useEffect(() => {
        const fetchApi = async() =>
        {
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${search.name}&units=metric&appid=560ff3056a78dbdcc8705ba41dec095a`;
            const response = await fetch(url);
            const resJson = await response.json();
            if(resJson){
                setCity(resJson);
            }else{
                setCity("No data found");
            }
        }
        fetchApi();
    }, [search])

    return (
        city?(
            <div className="card d-grid justify-content-center" style={{width: "90%"}}>
                <p style={{fontSize: "18px"}}>{city.name}</p>
                <img className="Picture" src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`} alt=" Weather"></img>
                <p style={{fontSize: "15px", marginLeft: "0.5rem"}}>{city.main.temp} °C</p>
            </div>
        ):
        (
            <p>No data found</p>
        )
    );
}

export default TempApp;