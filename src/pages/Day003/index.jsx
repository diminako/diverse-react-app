import React, {useState} from "react"

const style = {
    button: {
        marginTop: "3rem",
        height: "3rem",
        width: "10rem",
        border: "3px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold"
    },
    mainDiv: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        JustifyContent: "center",
        alignItems: "center"
    },
    _0: [{
        marginTop: "2rem", 
        fontSize: "3rem",
        backgroundColor: "orangered"
    },
    {
        marginTop: "5rem", 
        fontSize: "2rem",
        backgroundColor: "blue"
    },
    {
        marginTop: "5rem", 
        fontSize: "5rem",
        backgroundColor: "green"
    }]
}

const textArr = ["You Got This!", "Don't give up!", "Keep Learning!", "React is FUN!", "JSX is neat!", "Keep it up!", "Stay Motivated!"];
const createNum = (x) => Math.floor(Math.random() * x);

const Day003 = () => {
    const [text, setText] = useState("");

    const selectItem = () => {
        const num = createNum(textArr.length);
        setText(textArr[num])
    }
    
    const renderText = () => {
        const num = createNum(style._0.length);
        return (
            <h2 style={style._0[num]}>{text}</h2>
        )
    }

    return (
        <div style={style.mainDiv}>
            <button
                onClick={(e) => selectItem(e)}
                style={style.button}>
                Keep Clicking Me!
             </button>
            {renderText()}
        </div>
    )
}

export default Day003;