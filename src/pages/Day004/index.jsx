import { useState } from "react";

import pic0 from "./pic0.jpg";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import pic4 from "./pic4.jpg";
import pic5 from "./pic5.jpg";
import pic6 from "./pic6.jpg";
import pic7 from "./pic7.jpg";
import pic8 from "./pic8.jpg";
import pic9 from "./pic9.jpg";

const style = {
    upperSect: {

    },
    lowerSect: {
        padding: "30px",
        display: "flex",
        flexWrap: "flex-wrap"
    },
    images: {
        padding: "10px",
        flexDirection: "row"
    }

}

const picArr = [pic0,
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9]
    
const Day004 = () => {
    const [mainPic, setMainPic] = useState(pic2)

    
    const setPicture = (e) => {
        setMainPic(e.target.src)
    }

    return (
        <div>
            <section className="upper-sect" style={style.upperSect}>
                <h2>I took a break on day 4 to help a friend. :)</h2>
                <div className="img-container">

                    <img src={mainPic} alt="" height="350px" />
                </div>
            </section>

            <section className="lower-sect" style={style.lowerSect}>
                <div className="pic-arr-container" height="200px">
                    {picArr.map((pic, i) => 
                    <img style={style.images}
                    src={pic} alt="" 
                    onClick={(e) => setPicture(e)}
                    select={`pic${i}`}
                    height="100px" /> )}
                </div>
            </section>

        </div>
    )
}

export default Day004;