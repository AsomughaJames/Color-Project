import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import seedColor from "../../seedColors"
import "./palleteList.css"


function PalleteList() {

    return (
        <div>

            <div className='List-Root'>
                {seedColor.map(el => <Link to={`pallete/${el.id}`} >{el.id}</Link>)}
            </div>
        </div>

    )
}

export default PalleteList