import React from "react";
import web3 from "../web3";
import Pol from "../Pol";

class GetLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: "",
            lng: "",
        };
    }
    async componentDidMount() {
        // fetch the users account
        const fetchedAccounts = await web3.eth.getAccounts();
        // get the user location
        const location = await Pol.methods
            .getLocation(fetchedAccounts[0])
            .call();
        this.setState({
            lat: location["lat"],
            lng: location["lng"],
        });
        // update user lon and lng in state
    }
    render() {
        return (
            <div>
                <h1>GetUserLocation</h1>
                <p>latitude : {this.state.lat}</p>
                <p>longitude : {this.state.lng}</p>
            </div>
        );
    }
}

export default GetLocation;
