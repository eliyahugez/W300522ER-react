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
import UseEffectAsComponentWillUnmount from "../sandbox/life-cycle-hooks/UseEffectAsComponentWillUnmount";
import UseEffectAsComponentUpdateNoDeps from "../sandbox/life-cycle-hooks/UseEffectAsComponentUpdateNoDeps";
import CustomCounterHook from "../sandbox/custom-hooks/CustomCounterHook";
import Memoization from "../sandbox/memoization/Memoization";
import UseCallback from "../sandbox/memoization/use-callback/UseCallback";
import UseMemo from "../sandbox/memoization/use-callback/UseMemo";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.SANDBOX} element={<SandBox />} >
        {/* /sandbox/props => FatherPropTypes */}
        <Route path="props" element={<FatherPropTypes />} />
        <Route path="todo" element={<SetArray />} />
        <Route path="life-cycle" element={<LifeCycleHooks />} />

        <Route path={ROUTES.SANDBOX} element={<SandBox />}>                 {/** /sandbox */}
          <Route path="props" element={<FatherPropTypes />} />              {/** /sandbox/props */}
          <Route path="todo" element={<SetArray />} />                      {/** /sandbox/todo */}
          <Route path="custom-counter-hook" element={<CustomCounterHook />} />                      {/** /sandbox/todo */}
          <Route path="memoization" element={<Memoization />}>
            <Route path="use-callback" element={<UseCallback />} />         {/** /sandbox/memoization/use-callback */}
            <Route path="use-memo" element={<UseMemo />} />         {/** /sandbox/memoization/use-callback */}
          </Route>
          <Route path="life-cycle" element={<LifeCycleHooks />}>            {/** /sandbox/life-cycle */}
            <Route path="initial" element={<InitialCycle />} />             {/** /sandbox/life-cycle/initial */}
            <Route path="use-state-cycle" element={<UseStateCycle />} />    {/** /sandbox/life-cycle/use-state-cycle */}
            <Route path="component-did-mount" element={<UseEffectAsComponentDidMount />} />    {/** /sandbox/life-cycle/use-state-cycle */}
            <Route path="component-did-update" element={<UseEffectAsComponentDidUpdate />} />    {/** /sandbox/life-cycle/use-state-cycle */}
            <Route path="component-will-unmount" element={<UseEffectAsComponentWillUnmount />} />    {/** /sandbox/life-cycle/use-state-cycle */}
            <Route path="component-no-dependencies" element={<UseEffectAsComponentUpdateNoDeps />} />    {/** /sandbox/life-cycle/use-state-cycle */}
          </Route>
        </Route>

        <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

Router.propTypes = {};

export default Router;
