import React from "react";

const style = {
    section: {
        backgroundColor: "#9fb8ad",
        height: "5%",
        fontSize: "1.2rem"
    },
    form: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    select: {
        width: "10%"
    },
    label: {
        margin: "1rem"
    }

}

const Selection = ({ daySelection }) => {
    return (
        <>
            <section className="main" style={style.section}>
                <form
                    style={style.form}
                    onSubmit={(e) => daySelection(e)}
                >

                    <label style={style.label} htmlFor="days">Choose a Day - </label>
                    <select
                    style={style.select}
                        name="days" id="days">
                        <option value="Day000">Home</option>
                        <option value="Day001">Day - 1</option>
                        <option value="Day002">Day - 2</option>
                        <option value="Day003">Day - 3</option>
                        <option value="Day004">Day - 4</option>
                        <option value="Day005">Day - 5</option>
                        <option value="Day006">Day - 6</option>
                        <option value="Day010">Day - 10</option>
                    </select>
                    <button>Go!</button>
                </form>

            </section>
        </>
    )
}

export default Selection;