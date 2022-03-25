import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { width } from '@mui/system';

const styles = {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        // position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        },
    },

    colors: {
        // backgroundColor: "grey",
        width: "100%",
        height: "100px",
        padding: "5px auto",
        borderRadius: "2.5px",
        overflow: "hidden"
    },

    tittle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        fontSize: "0.7rem",
        paddingTop: "0.2 rem",
        paddingBottom: "0.8rem",
        // position: "relative"





    },

    emoji: {
        marginLeft: "2rem",
        fontSize: "0.8rem",
    },

    minicolor: {
        width: "20%",
        height: "25%",
        display: "inline-block",
        marginBottom: "-4px",
        overflow: "hidden"





    }


}
type classP = {
    classes: React.CSSProperties | any
    emoji: string
    paletteName: string
    colors: {
        color: string
        name: string
    }[],

    navg8: any
    id: string

}
function MiniPallete(props: classP) {
    const { classes, emoji, paletteName, colors, id, navg8 } = props


    const miniColorBoxes = colors.map(el => <div className={classes.minicolor} style={{ backgroundColor: el.color }} key={el.name}></div>)
    return (
        <div className={classes.root} onClick={() => navg8(`/pallete/${id}`)} >

            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.tittle}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5>

        </div>
    )
}

export default withStyles(styles)(MiniPallete)