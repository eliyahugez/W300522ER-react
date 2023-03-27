import './App.css';
// import ChildComp from './sandbox/components/ChildComponent';
// import PageHeader from './components/PageHeader';
// import TypographyComponent from './sandbox/components/TypographyComponent';
import Cards from './cards/components/Cards'
import CardsPage from './cards/pages/CardsPage';
import AboutPage from './pages/AboutPage';
import OnClick from './sandbox/events/OnClick';
import { SetCounter } from './sandbox/hooks/SetCounter';
import { SetObject } from './sandbox/hooks/SetObject';
import FatherPropTypes from './sandbox/propTypes/FatherPropTypes';

function App() {
  // const hwString = 'Hello World';
  // const name = { firstName: 'John', lastName: 'Doe' };
  return (
    <div className="App"  >
      {/* <PageHeader /> */}
      {/* <TypographyComponent /> */}
      {/* <ChildComp firstName={name.firstName} lastName={name.lastName}  /> */}
      {/* <Cards></Cards>
      <OnClick></OnClick> */}
      {/* <FatherPropTypes /> */}
      {/* <CardsPage /> */}
      <AboutPage />
      <SetCounter></SetCounter>
      <SetObject></SetObject>
    </div>
  );
}

export default App;
