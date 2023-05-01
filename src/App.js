import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import ChildComp from './sandbox/components/ChildComponent';
// import PageHeader from './components/PageHeader';
// import TypographyComponent from './sandbox/components/TypographyComponent';
import Cards from './cards/components/Cards'
import CardsPage from './cards/pages/CardsPage';
import AboutPage from './pages/AboutPage';
import OnClick from './sandbox/events/OnClick';
import { SetArray } from './sandbox/hooks/SetArray';
import { SetCounter } from './sandbox/hooks/SetCounter';
import { SetObject } from './sandbox/hooks/SetObject';
import FatherPropTypes from './sandbox/propTypes/FatherPropTypes';
import Router from './routes/Router';
import Layout from './layout/Layout';
import { ThemeProvider } from './providers/ThemeProvider';
import { SnackbarProvider } from './providers/SnackbarProvider';

function App() {
  // const hwString = 'Hello World';
  // const name = { firstName: 'John', lastName: 'Doe' };
  return (
    <div className="App"  >
      <BrowserRouter>
        <ThemeProvider>
          <SnackbarProvider>
            <Layout>
              <Router />
            </Layout>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
