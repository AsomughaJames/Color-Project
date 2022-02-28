import React from 'react'
import "./pallete.css"
import Colorbox from "../colorbox/Colorbox"

type color = {
    colors: any;
}

function Pallete(props: color) {
    const firstColor = props.colors[1]
    const color = firstColor.colors.map((el: any) => <Colorbox background={el} />)
    return (
        <div className='pallete'>
            {/* below holds pallete title  */}
            <div>{firstColor.paletteName}</div>

            {/* below holds color box */}
            <div className='pallete-color-holder'>
                {color}
            </div>
            {/* below holds pallete footer */}
            <div>

            </div>
        </div>
    )
}

export default Pallete