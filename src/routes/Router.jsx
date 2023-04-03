import React from "react";
import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import SandBox from '../sandbox/SandBox';
import SignupPage from "../users/pages/SignupPage";
import CardDetailPage from "../cards/pages/CardDetailPage";
import FatherPropTypes from "../sandbox/propTypes/FatherPropTypes";
import { SetArray } from "../sandbox/hooks/SetArray";
import LifeCycleHooks from "../sandbox/life-cycle-hooks/LifeCycleHooks";


const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailPage /> } />
      <Route path={ROUTES.SIGNUP} element={<SignupPage /> } />
      <Route path={ROUTES.SANDBOX} element={<SandBox /> } >
          {/* /sandbox/props => FatherPropTypes */}
          <Route path="props" element={<FatherPropTypes />} />
          <Route path="todo" element={<SetArray />} />
          <Route path="life-cycle" element={<LifeCycleHooks />} />

        </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

Router.propTypes = {};

export default Router;
