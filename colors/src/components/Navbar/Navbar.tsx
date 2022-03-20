import React, { useState, ReactEventHandler } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"
import { makeStyles } from '@material-ui/core/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
type Navbar = {
    range: number;
    handleChange: (e: any) => void
    colorT: string;
    handleSelect: (e: any) => void
}
function Navbar({ range, handleChange, colorT, handleSelect }: Navbar) {


    return (
        <header>
            <Link to="/" className='logoText'> Pallete Project</Link>

            <div className="slidecontainer">
                <label htmlFor="id">Level: {range} </label>
                <input type="range" min={100} max={900} value={range} step={100} onChange={handleChange} className="slider" id="myrange" />

            </div>
            <div className='color-type'>
                <FormControl variant="standard" >
                    <Select value={colorT} onChange={handleSelect}>
                        <MenuItem value={"hex"}>HEX -#ffff</MenuItem>
                        <MenuItem value={"rgb"}>RGB (222,222,222)</MenuItem>
                        <MenuItem value={"rgba"}>RGBA (255.255.255)</MenuItem>
                    </Select>
                </FormControl>
            </div>


        </header>
    )
}

export default Navbar