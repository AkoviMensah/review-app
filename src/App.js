import Header from './components/Header'
import Review from './components/Review';
import { ReviewsProvider } from "./context/ReviewsContext"

function App() {
  return (
    <ReviewsProvider>
      <div>
      <Header/>
      <Review/>
    </div>
    </ReviewsProvider>
  );
}

export default App;
