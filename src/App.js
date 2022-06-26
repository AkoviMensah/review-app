import { FeedbackProvider } from './context/FeedbackContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';
import Header from './components/Header';
import InfoPage from './pages/InfoPage';
import InfoLink from './components/InfoLink';
import Stats from './components/Stats';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <Stats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path='/about' element={<InfoPage />} />
          </Routes>
          <InfoLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;