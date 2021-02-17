const style = {
    item: {
        height: "3rem",
        width: "3rem",
        backgroundColor: "blue"
    },
    header: {
        marginTop: "2rem",
        fontSize: "2rem"
    },
    container: {
        marginTop: "8rem",
        display: "flex",
        justifyContent: "center"
    },
    blue: {
        height: "3rem",
        width: "3rem",
        backgroundColor: "blue"
    },
    red: {
        height: "3rem",
        width: "3rem",
        backgroundColor: "red"
    },
    yellow: {
        height: "3rem",
        width: "3rem",
        backgroundColor: "yellow"
    },
    green: {
        height: "3rem",
        width: "3rem",
        backgroundColor: "green"
    },
}

let arr = ["blue", "red", "yellow", "green"];

function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(3));
  }

let winningChoice = arr[getRandomInt()]

const clickBox = (e) => {
    e.preventDefault();

    if(e.target.className == winningChoice) {
        alert("Congrats You were right!")
    } else {
        alert("Nope!  Try again!")
    }
    
    winningChoice = arr[getRandomInt()]
}

const Day001 = () => {
    return (

        <div>
            <div className="header" style={style.header}>Guess the correct Box!</div>

            <div className="container" style={style.container}>


                <form action="" style={style.container} onClick={(e) => clickBox(e)}>
                    <div className="blue" style={style.blue}></div>
                    <div className="red" style={style.red}></div>
                    <div className="yellow" style={style.yellow}></div>
                    <div className="green" style={style.green}></div>
                </form>

            </div>


        </div>
    )
}

export default Day001;