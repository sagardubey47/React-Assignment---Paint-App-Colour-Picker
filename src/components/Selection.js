
import React, {useState} from 'react'
import '../styles/Child.css'

function Selection({applyColor}) {

    const [selectionStyle, updateSelectionStyle] = useState({background:""})
    return (
        
            <div className="fix-box" onClick={() => applyColor(updateSelectionStyle)} style={selectionStyle}>
                <h2 className="subheading">selection</h2>
            </div>
        
    )
}

export default Selection
