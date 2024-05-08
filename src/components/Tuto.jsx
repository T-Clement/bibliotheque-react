import React, { useEffect, useState } from 'react'

function Tuto() {

    const [duration, setDuration] = useState(10);
    const [secondsLeft, setSecondsLeft] = useState(duration);


    // permet de regrouper deux changements d'états dans qui auraient provoqués 2 re rendus du composant
    const handleChange = (v) => {
        setDuration(v);
        setSecondsLeft(v);
    }

    useEffect(() => {
        // useEffect logic
        // no setters in first level of useEffect()s
        console.log("useEffect !!")

        const interval = setInterval(() => {
            setSecondsLeft(v => {
                if(v <= 1 ) {
                    clearInterval(interval);
                    return 0;
                } 
                return v - 1;
            })
        }, 1000)


        // cleanup function
        return () => {
            clearInterval(interval);
        }
    }, [duration]) 



    // Debug
    console.log("Composant monté !")



  return (
    <div>
        <input type="number" name='timer' value={duration} onChange={(e) => handleChange(e.target.value)}/>

        <p>
            <strong>{secondsLeft}</strong>
        </p>

    </div>
  )
}

export default Tuto