import React, { Component } from "react";
import { Link } from "react-router-dom";
import BehaviorVersionItem from "./BehaviorVersionItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { list } from "../../../actions/admin/BehaviorVersionActions";

class BehaviorVersion extends Component {
  componentDidMount() {
    this.props.list();
  }

  render() {
    
    const { behaviorVersions } = this.props.behaviorVersionRed;

    let BehaviorVersionContent;
    let behaviorVersionItems = [];

    const BehaviorVersionAlgorithm = (behaviorVersions) => {
      if (behaviorVersions.length < 1) {
        return (
          <div className="alert alert-info text-center" role="alert">
            No Behavior Versions
          </div>
        );
      } else {
        const behaviorVersionList = behaviorVersions.map((behaviorVersion) => (
          <BehaviorVersionItem key={behaviorVersion.id} behaviorVersion={behaviorVersion} />
        ));

        for (let i = 0; i < behaviorVersionList.length; i++) {
          behaviorVersionItems.push(behaviorVersionList[i]);
        }
      }

      return (
        <React.Fragment>
          <div className="row">
            <div className="col">
              <h3>Studio Brand</h3>
            </div>
            <div className="col">
              <Link
                to="/admin/behaviorVersion/add"
                className="btn btn-success mb-3 float-right"
              >
                <i className="fas fa-plus-circle">Add new studio brand</i>
              </Link>
            </div>
          </div>

          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">
                  <a
                    href="#"
                    className="text-reset text-decoration-none disabled"
                    data-toggle="tooltip"
                    title="Old values will not be available for new games"
                  >
                    Is old
                  </a>
                </th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>{behaviorVersionItems}</tbody>
          </table>
        </React.Fragment>
      );
    };

    BehaviorVersionContent = BehaviorVersionAlgorithm(behaviorVersions);

    return (
      <div className="container pb-5">
        <br />
        <hr />
        {BehaviorVersionContent}
      </div>
    );
  }
}

BehaviorVersion.propTypes = {
  list: PropTypes.func.isRequired,
  behaviorVersionRed: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  behaviorVersionRed: state.behaviorVersionRed,
});

export default connect(mapStateToProps, { list })(BehaviorVersion);
