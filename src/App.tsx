import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Button from "./components/Button";
import Image from "./components/Image";
import SVG from "./components/SVG";

// const Button = lazy(() => import("./components/Button"));
// const Image = lazy(() => import("./components/Image"));
// const SVG = lazy(() => import("./components/SVG"));

export const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Button} />
          <Route exact path="/image" component={Image} />
          <Route exact path="/svg" component={SVG} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
