import "./style.css";

let sabin = document.getElementsByClassName("sabin");
let train = document.getElementsByClassName("train");

const doSuplex = () => {
        sabin[0].classList.add("animate")
        train[0].classList.add("trainAnimate")

}

const Day010 = () => {
    return (
        <div className="main-div">
            <div className="sabin">
            </div>
            <div className="cyan"></div>
            <div className="train"></div>
            <div className="menu">
                <div className="char-move">
                    <button
                    onClick={()=>doSuplex()}>SUPLEX!</button>
                </div>
                <div className="enemy"></div>
            </div>
        </div>
    )
}

export default Day010;