import { useState } from "react";
import "./style.css";

const style = {
    h1: {
        marginTop: "3rem",
        fontSize: "3rem",
        display: "flex",
        justifyContent: "center"
    },
    div: {
        flexWrap: "flex-wrap"
    }
}

const Day001 = () => {
    const [textFill, setTextFill] = useState("")


    return (
        <div>
            <form action="">

                <label htmlFor=""></label>
                <input onChange={(e) =>
                    setTextFill(e.target.value)
                }
                    type="textarea" />
            </form>


            <h1 style={style.h1}>
                <div style={style.div}>{textFill}</div>
                </h1>

        </div>
    )
}

export default Day001;
