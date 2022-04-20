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

    async componentWillMount() {
        // fetching the url
        const strArr = this.props.location.pathname.split("/");
        const lat = strArr[2],
            lng = strArr[3];
        console.log(`lat : ${lat}`);
        console.log(`lng : ${lng}`);

        // fetch the users account
        const fetchedAccounts = await web3.eth.getAccounts();
        // get the user location
        try {
            await Pol.methods.addUserLocation(lat, lng).send({
                from: fetchedAccounts[0],
                gas: "1000000",
            });
            this.setState({
                status: "Done",
            });
        } catch (err) {
            console.error(err);
            this.setState({
                status: "Transaction Rejected ",
            });
        }
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
