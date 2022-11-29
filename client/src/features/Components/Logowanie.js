import React from "react";
export class Logowanie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value1: '', value2: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value1: event.target.value});
    }
    handleChange1(event) {
        this.setState({value2: event.target.value});
    }
    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        console.log('A name was submitted: ' + this.state.value1 + ' '+
        this.state.value2)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email:
                    <input type="text" value={this.state.value1} onChange={this.handleChange} />
                    <br/>
                    Haslo:
                    <input type="text" value={this.state.value2} onChange={this.handleChange1} />
                    <br/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
