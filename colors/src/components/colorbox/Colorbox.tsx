import React, { useState } from 'react'
import "./colorbox.css"
const CopyToClipboard = require("react-copy-to-clipboard")

type colorbox = {
    background: any
    colorT: string;
}

function Colorbox({ background, colorT }: colorbox) {

    const [copi, setCopy] = useState(false)
    const { name } = background
    const handleClick = () => {
        setCopy(el => el = true);
        setTimeout(() => { setCopy(copi => false) }, 1500)
    }

    return (
        <CopyToClipboard text={background[colorT]} onCopy={handleClick}>
            <div style={{ background: background[colorT] }} className="color-box">

                <div style={{ background: background[colorT] }} className={`overLay ${copi && "show"}`} />
                <div className={`color-content ${copi && "show"}`}>
                    <h2>{"copied!"}</h2>
                    <p>{background[colorT]}</p>
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
