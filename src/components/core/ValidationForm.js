import React from "react";

const setForm = {
    name: "",
    number:""
};

export default class ValidationForm extends React.Component {
    state = setForm;


    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };

    validate = () => {
        let nameError = "";
        // let passwordError = "";

        if (!this.state.name.length>0) {
            nameError = "name cannot be blank";
        }

        return true;
    };

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(setForm);
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.nameError}
                    </div>
                </div>

                <div>


                </div>
                <button type="submit">submit</button>
            </form>
        );
    }
}