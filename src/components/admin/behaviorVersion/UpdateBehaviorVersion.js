import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  get,
  add,
} from "../../../actions/admin/BehaviorVersionActions";
import classnames from "classnames";

class UpdateBehaviorVersion extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
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
    const { id, name, isOld } = nextProps.behaviorVersion;

    this.setState({
      id,
      name,
      isOld,
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({ [e.target.name]: e.target.checked });
  }

  onSubmit(e) {
    e.preventDefault();
    const updatedBehaviorVersion = {
      id: this.state.id,
      name: this.state.name,
      isOld: this.state.isOld,
    };
    this.props.add(updatedBehaviorVersion, this.props.history);
  }

  componentDidMount() {
    const { behaviorVersionId } = this.props.match.params;
    this.props.get(behaviorVersionId);
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
              <h3>{this.state.name}</h3>
            </div>
            <div className="col">
              <Link to="/" className="btn btn-secondary float-right">
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

UpdateBehaviorVersion.propTypes = {
  behaviorVersionRed: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  get: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  behaviorVersion: state.behaviorVersionRed.behaviorVersion,
  errors: state.errors,
});

export default connect(mapStateToProps, { get, add })(
  UpdateBehaviorVersion
);
