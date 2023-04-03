import React from "react";
import PropTypes from "prop-types";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import SandBox from "../sandbox/Sandbox";
import SignupPage from "../users/pages/SignupPage";
import CardDetailPage from "../cards/pages/CardDetailPage";
import FatherPropTypes from "../sandbox/propTypes/FatherPropTypes";
import { SetArray } from "../sandbox/hooks/SetArray";
import LifeCycleHooks from "../sandbox/life-cycle-hooks/LifeCycleHooks";
import InitialCycle from "../sandbox/life-cycle-hooks/InitialCycle";
import UseStateCycle from "../sandbox/life-cycle-hooks/UseStateCycle";
import UseEffectAsComponentDidMount from "../sandbox/life-cycle-hooks/UseEffectAsComponentDidMount";
import UseEffectAsComponentDidUpdate from "../sandbox/life-cycle-hooks/UseEffectAsComponentDidUpdate";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.SANDBOX} element={<SandBox />}>                 {/** /sandbox */}
        <Route path="props" element={<FatherPropTypes />} />              {/** /sandbox/props */}
        <Route path="todo" element={<SetArray />} />                      {/** /sandbox/todo */}
        <Route path="life-cycle" element={<LifeCycleHooks />}>            {/** /sandbox/life-cycle */}
          <Route path="initial" element={<InitialCycle />} />             {/** /sandbox/life-cycle/initial */}
          <Route path="use-state-cycle" element={<UseStateCycle />} />    {/** /sandbox/life-cycle/use-state-cycle */}
          <Route path="component-did-mount" element={<UseEffectAsComponentDidMount />} />    {/** /sandbox/life-cycle/use-state-cycle */}
          <Route path="component-did-update" element={<UseEffectAsComponentDidUpdate />} />    {/** /sandbox/life-cycle/use-state-cycle */}
        </Route>
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

Router.propTypes = {};

export default Router;
