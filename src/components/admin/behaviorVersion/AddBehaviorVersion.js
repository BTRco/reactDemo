import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { add } from "../../../actions/admin/BehaviorVersionActions";
import classnames from "classnames";

class AddBehaviorVersion extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      isOld: false,
      errors: {},
    };
    this.onCheck = this.onCheck.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({ [e.target.name]: e.target.checked });
  }

  onSubmit(e) {
    e.preventDefault();
    const newBehaviorVersion = {
      name: this.state.name,
      isOld: this.state.isOld,
    };
    this.props.add(newBehaviorVersion, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="container pb-5">
        <br />
        <hr />
        <form className="form" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-10">
              <h3>Add new behavior version</h3>
            </div>
            <div className="col">
              <Link to="/admin" className="btn btn-secondary float-right">
                Back
              </Link>
            </div>
            <div className="col">
              <button
                type="submit"
                className="btn btn-primary mb-2 float-right"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="alert alert-info" role="alert">
            Old values will not be available for new games.
          </div>
          <div className="form-inline">
            <label className="mb-2 mr-sm-2 inline" for="inlineFormInputName">
              Name:
            </label>
            <input
              type="text"
              className={classnames("form-control mb-2 mr-sm-2", {
                "is-invalid": errors.name,
              })}
              id="inlineFormInputName"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
            <div className="form-check mb-2 mr-sm-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineFormCheck"
                onChange={this.onCheck}
                name="isOld"
                checked={this.state.isOld}
              />
              <label className="form-check-label" for="inlineFormCheck">
                Is old
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

AddBehaviorVersion.propTypes = {
  add: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { add })(AddBehaviorVersion);
