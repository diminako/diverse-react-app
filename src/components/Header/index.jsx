import logo from '../../logo.svg';

const style = {
    header: {
        backgroundColor: "#383e56",
        color: "white"
    },
    logo: {
        height: "2rem"
    }
}

const Header = () => {
    return (
        <header style={style.header}>
            <h1>Welcome to Dimitri's React Playground</h1>
            <img src={logo} style={style.logo} className="App-logo" alt="logo" />
        </header>
    )
};

export default Header;