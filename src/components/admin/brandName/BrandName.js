import React, { Component } from "react";
import { Link } from "react-router-dom";
import BrandNameItem from "./BrandNameItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { list } from "../../../actions/admin/BrandNameActions";

class BrandName extends Component {
  componentDidMount() {
    this.props.list();
  }

  render() {
    
    const { brandNames } = this.props.brandNameRed;

    let BrandNameContent;
    let brandNameItems = [];

    const BrandNameAlgorithm = (brandNames) => {
      if (brandNames.length < 1) {
        return (
          <div className="alert alert-info text-center" role="alert">
            No brand names
          </div>
        );
      } else {
        const brandNameList = brandNames.map((brandName) => (
          <BrandNameItem key={brandName.id} brandName={brandName} />
        ));

        for (let i = 0; i < brandNameList.length; i++) {
          brandNameItems.push(brandNameList[i]);
        }
      }

      return (
        <React.Fragment>
          <div className="row">
            <div className="col">
              <h3>Brand name</h3>
            </div>
            <div className="col">
              <Link
                to="/admin/brandName/add"
                className="btn btn-success mb-3 float-right"
              >
                <i className="fas fa-plus-circle">Add new brand name</i>
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
            <tbody>{brandNameItems}</tbody>
          </table>
        </React.Fragment>
      );
    };

    BrandNameContent = BrandNameAlgorithm(brandNames);

    return (
      <div className="container pb-5">
        <br />
        <hr />
        {BrandNameContent}
      </div>
    );
  }
}

BrandName.propTypes = {
  list: PropTypes.func.isRequired,
  brandNameRed: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  brandNameRed: state.brandNameRed,
});

export default connect(mapStateToProps, { list })(BrandName);
