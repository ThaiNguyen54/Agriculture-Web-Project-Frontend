import { useState } from "react";

function ClockCurrent(){
    const now = new Date().toLocaleTimeString();
    const [time, setTime] = useState(now);
    setInterval(UpdateTime, 1000);
    function UpdateTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }
    return time;
}


export default ClockCurrent;