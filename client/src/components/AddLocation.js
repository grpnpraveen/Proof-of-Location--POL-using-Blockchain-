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

    componentDidUpdate()
    {
        if(this.state.status === 'Done' && this.state.status !== 'Loading')
        {
          window.location="http://127.0.0.1:5500/Book%20Cabs%20Nearby%20at%20Best%20Price%20_%20Hire%20Taxi%20Nearby%20Online.html";
          console.log("HERE");
          window.reload=true;
        }
    }

    render() {
        if(this.state.status === 'Loading')
        {
            return (
                <div className="ui">
                    <div className="ui active dimmer">
                    <div className="ui text loader">please wait confirming through metamask</div>
                    </div>
                    <p></p>
              </div>);
        }

        if(this.state.status === 'Transaction Rejected')
        {
            return (<div className="ui negative message">

            <div className="header">
              You have rejected your transaction
            </div>
            <p>refresh the page
          </p></div>);
        }
        else{

        return (
            <div className="ui success message" >
              
                <div className="header">
                Adding Location was successful.
                </div>
                <p>You may now get your location using the route getLocation</p>
                
          </div>
        );

        }
   
    }
}

export default AddLocation;
