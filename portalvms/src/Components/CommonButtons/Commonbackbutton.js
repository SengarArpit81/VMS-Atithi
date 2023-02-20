import React from 'react'
import "./commonbutton.css"

const Commonbackbutton = (props) => {
    return (
        <div>
            <div className='Book-Seminar-Hall-Div'>
                <button type="button" className="btn p-0 px-sm-2 btn-outline-dark register-btn1" onClick={props.backButton}>
                    {props.backButtonText}
                </button>
            </div>
        </div >
    )
}

export default Commonbackbutton