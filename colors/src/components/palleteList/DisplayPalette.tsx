import React from 'react'
import Pallete from "../../components/pallete/pallete"
import seedColor from "../../seedColors"
import { GeneratePalette } from "../../components/colorHelper"

type findP = {
    params: any
}
function DisplayPalette({ params }: findP) {

    const id = params()

    const findPallete = (id: any) => {
        return seedColor.find(el => el.id === id)
    }

    return (
        <div><Pallete pallete={GeneratePalette(findPallete(id))} /></div>
    )
}

export default DisplayPalette