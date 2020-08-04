import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { remove } from "../../../actions/admin/BrandNameActions";

class BrandNameItem extends Component {
  onDeleteClick(brandNameId) {
    this.props.remove(brandNameId);
  }

  render() {
    const { brandName } = this.props;
    return (
      <tr>
        <th scope="row">{brandName.id}</th>
        <td>
          <Link to={`/admin/brandName/edit/${brandName.id}`} className="text-decoration-none">
            {brandName.name}
          </Link>
        </td>
        <td>{String(brandName.isOld).toUpperCase()}</td>
        <td>
          <button
            type="button"
            className="close text-danger float-left"
            aria-label="Delete"
            onClick={this.onDeleteClick.bind(this, brandName.id)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </td>
      </tr>
    );
  }
}

BrandNameItem.propTypes = {
  deleteBrandName: PropTypes.func.isRequired,
};

export default connect(null, { remove })(BrandNameItem);
