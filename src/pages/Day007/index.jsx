const style = {
    background: {
        backgroundColor: "aquamarine",
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
        backgroundColor: "red"
    },
    pic: {

    },
    cardUl: {
        position: "absolute",
        listStyle: "none",
        display: "flex",
        justifyContent: "between"
    },
    cardLi: {
        padding: "5px"
    }

}

const Day007 = () => {
    return (
        <div style={style.background}>
            <div style={style.card}>
                <img style={style.pic} src="" alt=""/>
                <h2>Dimitri Nakos <span>35</span></h2>
                <h3>Charlotte, NC</h3>
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