import Day001 from "../../pages/Day001";
import Day002 from "../../pages/Day002";
import Day003 from "../../pages/Day003";











const style = {
    day: {
        height: "78%"
    }
}

const Day = ({day}) => {
    return (
        <div style={style.day}>
            {(day === "Day001" && <Day001 />) ||
            (day === "Day002" && <Day002 />) ||
            (day === "Day003" && <Day003 />)
      
      }
        </div>
    )
}

export default Day;