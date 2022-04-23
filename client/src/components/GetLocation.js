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
        if(this.state.lat)
        {
            return (
                
                <div class="ui " style={{'margin-top':'18%','margin-left':'40%'}}>
                    <div class="ui cards">
  <div class="card">
    <div class="content">
      <div class="header">
       User's Location
      </div>
      <div class="meta">
     
      </div>
      <div class="description">
       
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Latitude: {this.state.lat}</div>
        <div class="ui basic orange button">Longitude: {this.state.lng}</div>
      </div>
    </div>
  </div>
 
</div>

                </div>
            );
        }
        else{
            return (
            <div class="ui">
            <div class="ui active dimmer">
              <div class="ui text loader">fetching data</div>
            </div>
            <p></p>
          </div>);
        }
      
    }
}

export default GetLocation;
