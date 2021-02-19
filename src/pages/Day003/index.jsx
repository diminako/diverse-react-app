import React from "react"

const style = {
    button: {
        marginTop: "3rem",
        height: "3rem",
        width: "5rem",
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
    }
}

const textArr = ["You Got This!", "Don't give up!", "Keep Learning!", "React is FUN!", ""]


const createNum = () => Math.floor(Math.random(1) * 11)

const createNewDiv = (e) => {
    let num = createNum();
    let parent = e.target.parentNode;
    let newDiv = <div>Hello!!!</div>

    parent.append(newDiv)

    console.log(parent)
    // console.log(newDiv)
    // mainDiv.append(newDiv)
    // div.createElement()
}

const Day003 = () => {
    return (

        <div style={style.mainDiv}>
            <button
                onClick={(e) => createNewDiv(e)}
                style={style.button}>
                Click Me!
             </button>

        </div>
    )
}

export default Day003;