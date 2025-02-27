import React, { useState } from 'react'

export default function ColorPicker() {
    const [red, setRed] = useState('0');
    const [green, setGreen] = useState('0');
    const [blue, setBlue] = useState('0');
   

    function changeRed(event) {
        setRed(event.target.value);
    }
    function changeGreen(event) {
        setGreen(event.target.value);
    }
    function changeBlue(event) {
        setBlue(event.target.value);
    }
    return (
        <>
            <div className='colorPicker' style={
                { backgroundColor: `rgb(${red},${green},${blue})`,
                        // display:`${disp}`,
            }
            }>

            </div>
            <div className='pickerRanges'>
                <div>
                    Red<input type="range" min={0} max={255} value={red} onChange={changeRed} />{red}
                </div>
                <div>
                    Green<input type="range" min={0} max={255} value={green} onChange={changeGreen} />{green}
                </div>
                <div>
                    BLue<input type="range" min={0} max={255} value={blue} onChange={changeBlue} />{blue}
                </div>


            </div>
        </>


    )
}
