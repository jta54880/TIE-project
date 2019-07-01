import React, {useState, useEffect} from "react"
import { withContext } from "../AppContext"
import "./Shoulderpad.css"

const Shoulderpad = props => {
    const {getShoulderpads, getPlayers} = props
    useEffect(() => {
        getShoulderpads()
    }, [getShoulderpads])

    useEffect(() => {
        getPlayers()
    }, [getPlayers])
    
    const sortedShoulderpads = props.shoulderpads.sort((a,b)=>a.make.localeCompare(b.make))
    .map(
        shoulderpad => 
            <div key={shoulderpad._id} className="grid-shoulderpad-layout">
                <p>
                    {shoulderpad.make.toUpperCase()} 
                </p>
                <p>
                    {shoulderpad.model.toUpperCase()}
                </p>
                <p>
                    {shoulderpad.size.toUpperCase()}
                </p>
                <p>
                    {shoulderpad.shoulderpadNumber.toUpperCase()}
                </p>
                <p>
                    {shoulderpad.assignedTo.toUpperCase()}
                </p>
                {/* <Helmet className="helmet" height="4vh" style={player.helmet === "No Helmet Assigned" ? {fill: "slategray", opacity: 0.3} : {fill: "limegreen"}} onClick={() => props.getHelmetAssignCard(player._id)}/>
                <ShPad className="shoulderpads" height="4vh" style={player.shoulderpads === "No Shoulderpads Assigned" ? {fill: "slategray", opacity: 0.3} : {fill: "limegreen"}} onClick={() => props.getShoulderpadAssignCard(player._id)}/>
                <button className="see-more-btn" onClick={() => props.getPlayerCardInfo(player._id)}>...</button> */}
            </div>    
    )

    return (
        <div className="shoulderpad-container">
            {sortedShoulderpads}
        </div>
    )
}

export default withContext(Shoulderpad)