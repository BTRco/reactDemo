import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { remove } from "../../../actions/admin/BehaviorVersionActions";

class BehaviorVersionItem extends Component {
  onDeleteClick(behaviorVersionId) {
    this.props.remove(behaviorVersionId);
  }

  render() {
    const { behaviorVersion } = this.props;
    return (
      <tr>
        <th scope="row">{behaviorVersion.id}</th>
        <td>
          <Link to={`/admin/behaviorVersion/edit/${behaviorVersion.id}`} className="text-decoration-none">
            {behaviorVersion.name}
          </Link>
        </td>
        <td>{String(behaviorVersion.isOld).toUpperCase()}</td>
        <td>
          <button
            type="button"
            className="close text-danger float-left"
            aria-label="Delete"
            onClick={this.onDeleteClick.bind(this, behaviorVersion.id)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </td>
      </tr>
    );
  }
}

BehaviorVersionItem.propTypes = {
  remove: PropTypes.func.isRequired,
};

export default connect(null, { remove })(BehaviorVersionItem);
