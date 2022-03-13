import React, { useState } from 'react'
import 'rc-slider/assets/index.css';
import "./pallete.css";
import Colorbox from "../colorbox/Colorbox";

type color = {
    pallete: any;
}

function Pallete({ pallete }: color) {
    const [range, setRange] = useState(300)

    const firstColor: any = pallete.colors[range]
    const color = firstColor.map((el: any) => <Colorbox background={el} />)

    const handleChange = (e: any) => {
        const rangeBar = e.target.value
        console.log(rangeBar)
        setRange(el => rangeBar)
    }

    return (
        <div className='pallete'>
            {/* below holds pallete title  */}
            <div className='title'>{pallete.paletteName}

            </div>
            <div className="slidecontainer">
                <input type="range" min={100} max={900} step={100} onChange={handleChange} className="slider" />

            </div>


            {/* below holds color box */}
            <div className='pallete-color-holder'>
                {color}
            </div>
            {/* below holds pallete footer */}
            <div>

            </div>
        </div >
    )
}

export default Pallete

function getElementByID(arg0: string) {
    throw new Error('Function not implemented.');
}
