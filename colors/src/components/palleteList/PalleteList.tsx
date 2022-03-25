import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import seedColor from "../../seedColors"
import "./palleteList.css"
import MiniPallete from './MiniPallete'
import { display, grid, height } from '@mui/system';
import { Container } from '@material-ui/core';
const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",


    },


}
type pp = {
    classes: React.CSSProperties | any
}

function PalleteList(props: pp) {
    const { classes } = props

    let navigate = useNavigate()


    return (
        <div className={classes.root}>
            <div className="classes-container">
                <nav className={classes.nav}>
                    <h1>React Color</h1>
                </nav>
                <div className="classes-palette">
                    {seedColor.map(el => <MiniPallete{...el} navg8={navigate} />)}
                </div>
            </div>
        </div>

    )
}

export default withStyles(styles)(PalleteList)