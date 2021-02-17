
import dimitri from "./dimitri.png"

const style = {
    welcome: {
        marginTop: "3rem",
        fontSize: "3rem"
    },
    img: {
        marginTop: "3rem",
        height: "10rem",
        width: "10rem"
    },
    who: {
        marginTop: "3rem",
        fontSize: "2rem"
    },
    p: {
        marginTop: "3rem",
        fontSize: "1.5rem"
    }
}

const Day000 = () => {
    return (
        <div>
            <div className="welcome" style={style.welcome}>Hello :)</div>
            <img src={dimitri} alt="" style={style.img} />
            <div className="who-am-i" style={style.who}>Who am I?!</div>
            <p style={style.p}>Hi!  My name is Dimitri Nakos.  I'm creating a new react component every day to keep myself busy messing with react every day until I hit 180 days.  :)  Wish me luck!</p>
        </div>
    )
}

export default Day000;