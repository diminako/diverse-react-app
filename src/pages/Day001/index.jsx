import "./style.css";

let sabin = document.getElementsByClassName("sabin");
let train = document.getElementsByClassName("train");

const doSuplex = () => {

        sabin[0].classList.toggle("animate")
        train[0].classList.toggle("trainAnimate")

    

}

const Day001 = () => {
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

export default Day001;