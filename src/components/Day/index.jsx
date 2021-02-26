import Day000 from "../../pages/Day000";
import Day001 from "../../pages/Day001";
import Day002 from "../../pages/Day002";
import Day003 from "../../pages/Day003";
import Day004 from "../../pages/Day004";
import Day005 from "../../pages/Day005";
import Day010 from "../../pages/Day010";




const style = {
    day: {
        height: "78%",
        borderLeft: "1px solid black",
        borderRight: "1px solid black"
    }
}

const Day = ({day}) => {
    return (
        <div style={style.day}>
            {(day === "Day000" && <Day000 />) ||
            (day === "Day001" && <Day001 />) ||
            (day === "Day002" && <Day002 />) ||
            (day === "Day003" && <Day003 />) || 
            (day === "Day004" && <Day004 />) || 
            (day === "Day005" && <Day005 />) || 
            (day === "Day010" && <Day010 />)
            
      
      }
        </div>
    )
}

export default Day;