import React, {useEffect, useState} from "react";
function TempApp(){
    const[ city, setCity] = useState(null);
    const[ search, setSearch] = useState("Hanoi");
    useEffect(() => {
    const fetchApi = async() =>
    {
        const url =`http://api.openweathermap.org/data/2.5/weather?q=Hanoi&units=metric&appid=560ff3056a78dbdcc8705ba41dec095a`;
        const response = await fetch(url);
        const resJson = await response.json();
        setCity(resJson);
    }
    fetchApi(); 
    }, [search])
    return city;
}

function ReturnIconTemp(props){
    return(
        <div className="card d-grid justify-content-center" style={{width: "8rem"}}>
            <p style={{fontSize: "18px"}}>{props.name.name}</p>
            <img className="Picture" src={`http://openweathermap.org/img/wn/${props.name.weather[0].icon}.png`} alt=" Weather"></img>
            <p style={{fontSize: "15px", marginLeft: "0.5rem"}}>{props.name.main.temp} °C</p>
        </div>
    );
}

export {TempApp, ReturnIconTemp};