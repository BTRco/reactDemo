import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import AddBrandName from "./components/admin/brandName/AddBrandName";
import AddBehaviorVersion from "./components/admin/behaviorVersion/AddBehaviorVersion";
import UpdateBrandName from "./components/admin/brandName/UpdateBrandName";
import Admin from "./components/admin/Admin";
import BrandName from "./components/admin/brandName/BrandName";
import UpdateBehaviorVersion from "./components/admin/behaviorVersion/UpdateBehaviorVersion";
import BehaviorVersion from "./components/admin/behaviorVersion/BehaviorVersion";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/brandName/add" component={AddBrandName} />
          <Route exact path="/admin/behaviorVersion/add" component={AddBehaviorVersion} />
          <Route
            exact
            path="/admin/brandName/edit/:brandNameId"
            component={UpdateBrandName}
          />
          <Route
            exact
            path="/admin/behaviorVersion/edit/:behaviorVersionId"
            component={UpdateBehaviorVersion}
          />
          <Route exact path="/admin/brandName" component = {BrandName} />
          <Route exact path="/admin/behaviorVersion" component = {BehaviorVersion} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
