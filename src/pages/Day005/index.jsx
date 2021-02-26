import "./style.css"




const Day005 = () => {

    const textArr = ["Oh geez... day 5 and I'm already running out of things to do.", "Except for this cool typewriter effect.", "I'll have to work on it when I have more time!", "That's pretty Neat!"]

    let i =0 ;
    let jsxArray = [];
    for(i=0; i<textArr.length;i++){
      jsxArray.push(
        <div className='background'>
          <h1 className="typewriter">
              {textArr[i]}    
          </h1>
        </div>
       );
    }

    return jsxArray;
  }

export default Day005;