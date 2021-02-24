import { useState } from "react";

const style = {
    upperSect: {

    },
    lowerSect: {

    }

}

const Day004 = () => {
    const [mainPic, setMainPic] = useState("./pic-0.jpg")

    const picArr = ["./pic-0.jpg",
        "./pic-1.jpg",
        "./pic-2.jpg",
        "./pic-3.jpg",
        "./pic-4.jpg",
        "./pic-5.jpg",
        "./pic-6.jpg",
        "./pic-7.jpg",
        "./pic-8.jpg",
        "./pic-9.jpg"]

    return (
        <div>
            <section className="upper-sect" style={style.upperSect}>
                <h2>I took a break on day 4 to help a friend. :)</h2>
                <div className="img-container">

                    <img src={picArr[0]} alt="" height="100%" />
                </div>
            </section>
            <section className="lower-sect" style={style.lowerSect}>

            </section>

        </div>
    )
}

export default Day004;