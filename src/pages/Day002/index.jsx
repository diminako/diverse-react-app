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
    },
    container: {
        display: "flex",
        justifyContent: "space-around"
    },
    congrats: {
        marginTop: "20rem",
        height: "10rem",
        width: "10rem",
        display: "flex",
        justifyContent: "space-around"
    },
    li: {
        marginBottom: "2rem",
        fontSize: "1.5rem",
        listStyleType: "none"
    },

}

const Day001 = () => {
    const [textFill, setTextFill] = useState(" ");
    const [first, setFirst] = useState("Odaes Mivegs");
    const [second, setSecond] = useState("Gycieohlrhpsi");
    const [third, setThird] = useState("Ug Nawc Tanl");


    return (
        <div>
            <h1 style={{fontSize: "2rem", marginBottom: "2rem"}}>Decypher each see what happens!</h1>
            <ul className="container" style={style.container}>
                <li className="first" style={style.li}>{first}</li>
                {/* Video Games */}
                <li className="second" style={style.li}>{second}</li>
                {/* Hieroglyphics */}
                <li className="third" style={style.li}>{third}</li>
                {/* Wu Tang Clan */}
            </ul>
            <form action="">

                <label htmlFor=""></label>
                <input onChange={
                    (e) => {
                        setTextFill(e.target.value)
                        if (e.target.value === "Video Games") {
                            setFirst(e.target.value);
                        }
                        if (e.target.value === "Hieroglyphics") {
                            setSecond(e.target.value);
                        }
                        if (e.target.value === "Wu Tang Clan") {
                            setThird(e.target.value)
                        }
                        if(first === "Video Games" && second === "Hieroglyphics" && third === "Wu Tang Clan") {
                            alert("You DID IT!!!");
                            setFirst("Video Games ")
                            setSecond("Hieroglyphics ")
                            setThird("Wu Tang Clan ")
                        }
                    }
                }
                    type="textarea" />
            </form>


            <h1 style={style.h1}>
                <div style={style.div}>{textFill}</div>
            </h1>

                <button onClick={() => {
                    setFirst("Video Games ");
                    setSecond("Hieroglyphics ");
                    setThird("Wu Tang Clan ");
                    alert("Congrats You CHEATED!")

                }}>Cheater Button</button>

            <div style={style.congrats} className="congrats">

            </div>

        </div>
    )
}

export default Day001;
