import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BrandName from "./brandName/BrandName";

class Admin extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container pb-5">
        <br />
        <hr />
        <h5>Math</h5>
        <div className="row">
          <div className="col-sm">Math Feature Group</div>
          <div className="col-sm">Math Feature</div>
          <div className="col-sm">Jackpot</div>
          <div className="col-sm">Grid</div>
          <div className="col-sm">Game Without Simulation</div>
        </div>
        <h5>Product</h5>
        <div className="row">
          <div className="col-sm">Studio brand</div>
          <div className="col-sm">Game Producer</div>
          <div className="col-sm">Development Platform</div>
          <div className="col-sm">Studio Art</div>
          <div className="col-sm">Art Directors</div>
        </div>
        <div className="row">
          <div className="col-sm">Client Development Unit</div>
          <div className="col-sm">Mathematicians</div>
          <div className="col-sm">Developer</div>
          <div className="col-sm">Game Status</div>
          <div className="col-sm">Gaming Platform</div>
        </div>
        <div className="row">
          <div className="col-sm">Math Source</div>
          <div className="col-sm">Math Status</div>
          <div className="col-sm">Theme Type</div>
          <div className="col-sm">Art Style</div>
          <div className="col-sm">Platform</div>
        </div>
        <div className="row">
          <div className="col-sm">Linked Project</div>
          <div className="col-sm">Linked Jackpot</div>
          <div className="col-sm">Email list Game</div>
          <div className="col-sm">Exclusive owner</div>
          <div className="col-sm">
            <Link to="/admin/brandName">Brand Name</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">Engines</div>
          <div className="col-sm">
          <Link to="/admin/behaviorVersion">Behavior version</Link></div>
          <div className="col-sm">Third party cont. provider</div>
          <div className="col-sm">UI Template</div>
          <div className="col-sm">Target Market</div>
        </div>
        <div className="row">
          <div className="col-sm">Certification</div>
          <div className="col-sm">Game type</div>
          <div className="col-sm">Mobile view</div>
          <div className="col-sm"></div>
          <div className="col-sm"></div>
        </div>
        <h5>SGP</h5>
        <div className="row">
          <div className="col-sm">Game code BI</div>
          <div className="col-sm">Users</div>
          <div className="col-sm">Log activity</div>
          <div className="col-sm">Import simulation</div>
          <div className="col-sm">Email notification</div>
        </div>
        <h5>SGP</h5>
        <div className="row">
          <div className="col-sm">BI report</div>
          <div className="col-sm">Game report</div>
          <div className="col-sm">Jackpot report</div>
          <div className="col-sm"></div>
          <div className="col-sm"></div>
        </div>
      </div>
    );
  }
}

export default connect(null)(Admin);
