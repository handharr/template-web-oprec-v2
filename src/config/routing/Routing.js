import React from "react";

//import components
import { AuthProvider } from "../../config";
import { BrowserRouter, Route, Switch } from "react-router-dom"; // import react-router-dom
import { Home, Daftar, Login, FormPendaftaran, Hasil } from "../../pages";

/**
 * routing components with react-router-dom
 */
const Routing = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/daftar">
            <Daftar />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/form">
            <FormPendaftaran />
          </Route>
          <Route path="/result">
            <Hasil />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Routing;
