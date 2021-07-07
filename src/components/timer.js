import React, { useState, useEffect } from 'react';
function Timer(){
    let total_time="03:00:00";
    const [time,setTime]=useState(total_time);

  
    useEffect(()=>{ 
        const id= setInterval(()=>{
              
            setTime((time_prev)=>{
            let [hour,minute,second]=time_prev.split(':');
            //console.log(hour,minute,second);
            let newminute,newhour,newsecond;
           
            if(parseInt(second)===0){
                newsecond=59;
                newminute=parseInt(minute)-1;
                newhour=hour;
            }
            else{
                newsecond=parseInt(second)-1;
                newminute=minute;
                newhour=hour;
            }
            if(parseInt(minute)<=0){
                newminute=59;
                newhour=parseInt(hour)-1;
            }
            if(parseInt(hour)<=0){
                clearInterval();
            }
            let newTime=newhour+":"+newminute+":"+newsecond;
            return newTime;
            });
            
        },1000);
        return () => clearInterval(id);
    },[]);

    return (<>
    <div>{time}</div>
    </>)
}
export default Timer;
