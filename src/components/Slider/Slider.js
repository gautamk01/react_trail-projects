import React, { useState } from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider';


function Slider(props) {

    const [silderindex, setsliderindex] = useState(1);

    const nextslide = () => {
        if (silderindex !== dataSlider.length) {
            setsliderindex(silderindex + 1)
        }
        else if (silderindex === dataSlider.length) {
            setsliderindex(1)
        }
    }
    const prevslide = () => {
        if (silderindex !== 1) {
            setsliderindex(silderindex - 1)
        }
        else if (silderindex === 1) {
            setsliderindex(dataSlider.length)
        }
    }




    return (
        <div className={props.onchange ? "h" : "container-slider "}>
            {dataSlider.map((obj, index) => {
                return (
                    <div key={obj.id} className={silderindex === index + 1 ? "slide active-anim" : "slide"}>
                        <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt="damn" />
                    </div>
                )

            })}
            <BtnSlider move={nextslide} direction={"next"} />
            <BtnSlider move={prevslide} direction={"prev"} />
        </div >
    );
}

export default Slider;