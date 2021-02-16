import React from "react";

const style = {
    section: {
        backgroundColor: "#9fb8ad",
        maxHeight: "100%"
    }
}

const Selection = () => {
    return (
        <>
            <section className="main" style={style.section}>

                <label htmlFor="days">Choose a Day</label>
                <select name="days" id="days">
                    <option value="day-001">Day 001</option>
                </select>

            </section>
        </>
    )
}

export default Selection;