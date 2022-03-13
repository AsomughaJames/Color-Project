import React, { useState } from 'react'
import "./colorbox.css"
const CopyToClipboard = require("react-copy-to-clipboard")

type colorbox = {
    background: any
}

function Colorbox({ background }: colorbox) {

    const [copi, setCopy] = useState(false)
    const { hex, name } = background
    const handleClick = () => {
        setCopy(el => el = true);
        setTimeout(() => { setCopy(copi => false) }, 1500)
    }

    return (
        <CopyToClipboard text={hex} onCopy={handleClick}>
            <div style={{ background: hex }} className="color-box">

                <div style={{ background: hex }} className={`overLay ${copi && "show"}`} />
                <div className={`color-content ${copi && "show"}`}>
                    <h2>{"copied!"}</h2>
                    <p>{hex}</p>
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
