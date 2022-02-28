import React, { useState } from 'react'
import "./colorbox.css"
const CopyToClipboard = require("react-copy-to-clipboard")

type colorbox = {
    background: any
}

function Colorbox({ background }: colorbox) {

    const [copi, setCopy] = useState(false)
    const { color, name } = background
    const handleClick = () => {
        setCopy(el => el = true);
        setTimeout(() => { setCopy(copi => false) }, 1500)
    }

    return (
        <CopyToClipboard text={color} onCopy={handleClick}>
            <div style={{ background: color }} className="color-box">

                <div style={{ background: color }} className={`overLay ${copi && "show"}`} />
                <div className={`color-content ${copi && "show"}`}>
                    <h2>{"copied!"}</h2>
                    <p>{color}</p>
                </div>
                <div className={`color-box-context`}>
                    <span>{name}</span>
                </div>
                <button className='copy-button'>Copy</button>
                <span className='see-more'>More</span>

            </div>
        </CopyToClipboard >

    )
}

export default Colorbox
