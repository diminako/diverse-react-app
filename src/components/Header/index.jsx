import logo from '../../logo.svg';

const style = {
    header: {
        backgroundColor: "#383e56",
        color: "white"
    },
    logo: {
        cursor: "pointer",
        height: "10vh"
    },
    form: {
        display: "flex",
        justifyContent: "center"
    },
    img: {
        cursor: "pointer"
    }
}

const Header = ({ returnHome }) => {
    return (
        <header style={style.header}>
            <h1>Welcome to Dimitri's React Playground</h1>
            <form action="" style={style.form}>
                <div style={style.img} onClick={(e) => returnHome(e)}>
                    <img src={logo} value="Day000" style={style.logo} className="App-logo" alt="logo" />
                </div>
            </form>
        </header>
    )
};

export default Header;