import React from "react";
import web3 from "../web3";
import Pol from "../Pol";

class AddLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "Loading",
        };
    }

    async componentDidMount() {
        // fetch the users account
        const fetchedAccounts = await web3.eth.getAccounts();
        // get the user location
        await Pol.methods.addUserLocation("20", "77").send({
            from: fetchedAccounts[0],
            gas: "1000000",
        });
        this.setState({
            status: "Done",
        });
    }
    render() {
        return (
            <div>
                <h1>Add User Location</h1>
                <p>{this.state.status}</p>
            </div>
        );
    }
}

export default AddLocation;
