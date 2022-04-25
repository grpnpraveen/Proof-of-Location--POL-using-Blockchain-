import React from "react";
class Landing extends React.Component {
    render() {
        // return <div style={{color: 'white'}}>Proof of location</div>;
        return ( 
        <div>
            <div className="hold">
              <div className="headerc">
                <div className="container">
                
                  <div id="logo">
                  <a href="/"><img id="logoim" alt="logo" src="./logo.png" /></a>
                  </div>
                  <ul className="nav">
                    <li><a href="/getLocation">GetLocation</a></li>
                    <li><a href="#">AddLocation</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="slider">
                <div className="container slidercontent">
                  <h1 className="hero">Blockchain Based Location Proving Application</h1>
                  <h2 className="hero">Proving.Location.Easy</h2>
                  <div className="call"><a href="#"><span>Documentation</span></a></div>
                </div>
              </div>
            </div>
            <div className="section bg">
              <div className="container">
                <h1>POL</h1>
                <h2>Use cases of this app</h2>
                <div className="col two bg margin extrapad">
                  <h1 className="icon side">[]</h1>
                  <span className="feature side">Delivery Based</span><span className="side"> -like amazon,zomato</span>
                  <p className="side">Wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow</p>
                </div>
                <div className="col two bg margin extrapad">
                  <h1 className="icon side">[]</h1>
                  <span className="feature side">Transaction Based</span><span className="side"> - like gpay,paytm</span>
                  <p className="side">Wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow</p>
                </div>
                <div className="group margin"></div>
                <div className="col two bg margin extrapad">
                  <h1 className="icon side">[]</h1>
                  <span className="feature side">IOT Based</span><span className="side"> - home automation</span>
                  <p className="side">Wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow</p>
                </div>
                <div className="col two bg margin extrapad">
                  <h1 className="icon side">[]</h1>
                  <span className="feature side">Games Based</span><span className="side"> - pokemongo</span>
                  <p className="side">Wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow</p>
                </div>
                <div className="group"></div>
              </div>
            </div>

            <div className="section">
  <div className="footer">
    <div className="container white">
      <div className="col four left">
        <h1>What?</h1>
        <p>So that's it. This started out as 20 minutes of making fun of modern web dev. Then it turned into a few hours of it.</p>
        <p>I hope you've enjoyed looking at every modern website ever.</p>
        <p>I don't actually hate this style as long as the content is meaningful. In fact, I think this type of design is pretty cool and effective.</p>
      </div>
      <div className="col four left">
        <h1>How?</h1>
        <p>CSS3 and HTML. JS for header shrinking; optional. Site works perfectly with JS disabled (another gripe of mine with modern web dev).</p>
        <p>Only external libraries are GFonts.</p>
        <p>Moderately responsive, should work on anything modern.</p>
      </div>
      <div className="col four left">
        <h1>Why?</h1>
        <p>Many popular HTML themes have thousands of lines of HTML, thousands of lines of CSS and several JS plugins on every page amounting to tens of thousands of lines of JavaScript.</p>
        <p>I fail to see a valid reason for this, particularly the horrendous line counts that are usually due to unused features or badly designed code.</p>
      </div>
      <div className="col four left">
        <h1>Who?</h1>
        <p>I'm Andrew.</p>
        <p>You can get in touch with me through <a href="http://atunnecliffe.com">http://atunnecliffe.com</a> or <a href="mailto:andrew@atunnecliffe.com">emailing me</a>.</p>
      </div>
      <div className="group"></div>
    </div>
  </div>
</div>
            
          </div>);
    }
}
export default Landing;
