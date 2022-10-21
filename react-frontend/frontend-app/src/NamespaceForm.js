import React from 'react';

function promiseHandler(response) {
    console.log(response)

    if (response.status === 200){
        alert("Namespace creation is successful")
        alert("Refresh the screen to get the revised Namespaces list")
    }
    else if (response.status === 409) {
        alert("Namespace creation failed. \nReason: Namespace already exists")
    }
}

class NamespaceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {

        fetch('http://localhost:5000/namespace/'+this.state.value,{
            'method':'POST',
            'mode': 'cors',
            headers : {
                'Content-Type':'application/json'
            }
        }).then(response => promiseHandler(response))

        event.preventDefault();
    }

    render() {
        return (
            <form className="ui form big labels" onSubmit={this.handleSubmit}>
                <div className="field ">
                <label>
                    Name:
                </label>

                <input type="text" placeholder="Namespace name" value={this.state.value}
                   onChange={this.handleChange} required={true}/>

                </div>
                <div>
                    <button className="ui primary button" type="submit">Submit</button>
                </div>
            </form>

        );
    }
}

export default NamespaceForm;