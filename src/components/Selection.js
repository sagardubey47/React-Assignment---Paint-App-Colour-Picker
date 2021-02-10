
import React, {useState} from 'react'
import '../styles/Child.css'

function Selection({applyColor, Selection}) {

    return (
        
            <div className="fix-box" onClick={applyColor} style={Selection}>
                <h2 className="subheading">selection</h2>
            </div>
        
    )
}

export default Selection
