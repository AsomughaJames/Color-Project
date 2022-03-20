import React, { useState } from 'react'
import "./pallete.css";
import Colorbox from "../colorbox/Colorbox";
import Navbar from "../Navbar/Navbar"
import { SelectChangeEvent } from '@mui/material/Select';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';




type color = {
    pallete: any | {};
}

function Pallete({ pallete }: color) {
    const [range, setRange] = useState(500)

    const [open, setOpen] = useState(false)

    const handleSnack = () => {
        setOpen(false);
    };

    const [colorT, setColorT] = React.useState("hex");

    const handleSelect = (event: SelectChangeEvent) => {
        setColorT(el => event.target.value);
        setOpen(true)
    };
    const { paletteName, colors, emoji } = pallete
    const firstColor: any = colors[range]
    const color = firstColor.map((el: any) => <Colorbox background={el} colorT={colorT} key={el.id} />)

    const handleChange = (e: any) => {
        const rangeBar = e.target.value
        setRange(el => rangeBar)
    }

    return (
        <div className='pallete'>
            {/* below holds pallete title 
            <div className='title'>{pallete.paletteName}
            </div> */}

            <Navbar range={range} handleChange={handleChange} handleSelect={handleSelect} colorT={colorT} />


            {/* below holds color box */}
            <div className='pallete-color-holder'>
                {color}
            </div>
            {/* below holds pallete footer */}
            <div>

            </div>
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleSnack}
                    message={`Format Changed to ${colorT.toLocaleUpperCase()}`}
                    action={[

                        <button onClick={handleSnack} className="snackB">X</button>]


                    }
                />
            </div>
            <footer>
                <div className='footerDiv'>
                    {paletteName}
                    <span>{emoji}</span>
                </div>
            </footer>
        </div >
    )
}

export default Pallete