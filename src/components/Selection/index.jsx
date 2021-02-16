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
                        <option value="Day001">Day - 1</option>
                        <option value="Day002">Day - 2</option>
                        <option value="Day003">Day - 3</option>
                    </select>
                    <button>Go!</button>
                </form>

            </section>
        </>
    )
}

export default Selection;