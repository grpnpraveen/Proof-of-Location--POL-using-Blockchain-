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
                status: "Transaction Rejected",
            });
        }
    }
    render() {
        if(this.state.status === 'Loading')
        {
            return (
                <div class="ui">
                <div class="ui active dimmer">
                  <div class="ui text loader">please wait confirming through metamask</div>
                </div>
                <p></p>
              </div>);
        }
        if(this.state.status === 'Transaction Rejected')
        {
            return (<div class="ui negative message">
        
            <div class="header">
              You have rejected your transaction
            </div>
            <p>refresh the page
          </p></div>);
        }
        else{
        return (
            <div class="ui success message">
            <div class="header">
              Adding Location was successful.
            </div>
            <p>You may now get your location using the route getLocation</p>
          </div>
        );
        }
    }
}

export default AddLocation;
