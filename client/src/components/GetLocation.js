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
              <div>
              <div class="hold">
              <div class="headerc">
                <div class="container">
                
                  <div id="logo">
                  <a href="/"><img id="logoim" src="./logo.png" /></a>
                  </div>
                  <ul class="nav">
                    <li><a href="/getLocation">GetLocation</a></li>
                    <li><a href="#">AddLocation</a></li>
                  </ul>
                </div>
              </div>
            </div>
              <div class="section" >
              <div class="slider" style={{"background":"#303134"}}>
                <div class="container slidercontent">
                  <h1 class="hero"> User's Location</h1>
                  <h2 class="hero">that retrieved from blockchain</h2>
                  <div class="call">

                  <div className="ui" style={{'marginLeft':'39%'}}>
                    <div className="ui cards">
                        <div className="card">
                          <div className="content">
                            <div className="header">
                             
                            </div>
                            <div className="meta">
                         
                            </div>
                            <div className="description">
                              Below showing latitude and longitude is the Geolocation of the user 
                            </div>
                          </div>
                          <div className="extra content">
                            <div className="ui two buttons">
                              <div className="ui basic green button">Latitude: {this.state.lat}</div>
                              <div className="ui basic orange button">Longitude: {this.state.lng}</div>
                            </div>
                          </div>
                    </div>
 
                </div>

                </div>
                  </div>
                </div>
              </div>
              <div class="section">
      <div class="footer">
        <div class="container white">
          <div class="col four left">
            <h1>What?</h1>
            <p>So that's it. This started out as 20 minutes of making fun of modern web dev. Then it turned into a few hours of it.</p>
            <p>I hope you've enjoyed looking at every modern website ever.</p>
            <p>I don't actually hate this style as long as the content is meaningful. In fact, I think this type of design is pretty cool and effective.</p>
          </div>
          <div class="col four left">
            <h1>How?</h1>
            <p>CSS3 and HTML. JS for header shrinking; optional. Site works perfectly with JS disabled (another gripe of mine with modern web dev).</p>
            <p>Only external libraries are GFonts.</p>
            <p>Moderately responsive, should work on anything modern.</p>
          </div>
          <div class="col four left">
            <h1>Why?</h1>
            <p>Many popular HTML themes have thousands of lines of HTML, thousands of lines of CSS and several JS plugins on every page amounting to tens of thousands of lines of JavaScript.</p>
            <p>I fail to see a valid reason for this, particularly the horrendous line counts that are usually due to unused features or badly designed code.</p>
          </div>
          <div class="col four left">
            <h1>Who?</h1>
            <p>I'm Andrew.</p>
            <p>You can get in touch with me through <a href="http://atunnecliffe.com">http://atunnecliffe.com</a> or <a href="mailto:andrew@atunnecliffe.com">emailing me</a>.</p>
          </div>
          <div class="group"></div>
        </div>
      </div>
    </div>
            </div>
            </div>
            );
        }
        else{
            return (
            <div className="ui">
            <div className="ui active dimmer">
              <div className="ui text loader">fetching data</div>
            </div>
            <p></p>
          </div>);
        }
      
    }
}

export default GetLocation;
