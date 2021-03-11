import dimitri from "./dimitri.png"

const style = {
    background: {
        backgroundColor: "#cee6b4",
        display: "flex",
        justifyContent: "center",
        height: "100%",
        border: "1px solid black"
    },
    card: {
        borderRadius: "5%",
        margin: "auto 0",
        height: "300px",
        width: "250px",
        position: "relative",
        backgroundColor: "#9ecca4",
        boxShadow: "5px 2px .2 black"
    },
    cardUl: {
        position: "absolute",
        listStyle: "none",
        display: "flex",
        borderTop: "1px solid grey",
        justifyContent: "space-evenly",
        width: "100%"
    },
    cardLi: {
        padding: "auto",
        display: "flex",
        flexDirection: "column"
    },
    span: {
        color: "grey"
    },
    pic: {
        height: "25%",
        paddingTop: "75px",
    },
    space: {
        paddingBottom: "50px"
    }
}

const Day007 = () => {
    return (
        <div style={style.background}>
            <div style={style.card}>
                <img style={style.pic} src={dimitri} alt=""/>
                <h2>Dimitri Nakos <span style={style.span}>35</span></h2>
                <h3>Front end challenge :)</h3>
                <h3 style={style.space}>Charlotte, NC</h3>
                <ul style={style.cardUl}>
                    <li style={style.cardLi}>
                        <h3>80k</h3>
                        <h4>followers</h4>
                    </li>
                    <li style={style.cardLi}>
                        <h3>800k</h3>
                        <h4>likes</h4>
                    </li>
                    <li style={style.cardLi}>
                        <h3>1.4k</h3>
                        <h4>Photos</h4>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Day007;