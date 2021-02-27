import {useState} from "react";

const style = {
    strike: {
        textDecoration: "line-through"
    },
    button: {
        border: "1px solid black"
    }
}


const cartoons = ["Xmen", "Rugrats", "Dragonball Z", "Recess", "Teenage Mutant Ninja Turtles", "Talespin", "Tiny Toons", "Darkwing Duck", "Animaniacs", "Ducktales", "Chip'n Dale", "Goof Troop", "Pokemon", "Powderpuff Girls", "Hey Arnold", "Inspector Gadget", "Muppet Babies", "Gargoyles", "Sailor Moon", "Dexter's Lab"]

const createNum = (x) => Math.floor(Math.random() * x);

const Day006 = () => {
    const [cartoonList, setCartoonList] = useState(["Xmen", "Rugrats", "Dragonball Z", "Recess", "Teenage Mutant Ninja Turtles", "Talespin", "Tiny Toons", "Darkwing Duck", "Animaniacs", "Ducktales", "Chip'n Dale", "Goof Troop", "Pokemon", "Powderpuff Girls", "Hey Arnold", "Inspector Gadget", "Muppet Babies", "Gargoyles", "Sailor Moon", "Dexter's Lab"])
    const [watch, setWatched] = useState("")


    // const cartoonList = []

    // const watched = []

    const watchedIt = (e) => {
        console.log(e.target.textContent);
            // e.target.
    }

    const randoShow = () => {
        const num = createNum(cartoons.length)
        setWatched(cartoons[num])
    }

    return (
        <div>
            <h1>Date Night with Emily!</h1>
            <ul>
                <h2>Shows to Watch</h2>
            {cartoonList.map((cartoon) => <li
            onClick={(e)=> watchedIt(e)}
            >{cartoon}</li>)}
            </ul>
            <ul>
                <h2>What's Next?!</h2>
                <button onClick={()=> randoShow()} style={style.button}>Click to find the next Show to watch!</button>
            <li>{watch}</li>
            </ul>
        </div>
    )
}

export default Day006;