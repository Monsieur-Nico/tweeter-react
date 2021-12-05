import Navigation from './components/Navigation'
import Profile from './components/Profile'
import TweetForm from './components/TweetForm'
import TweetList from './components/TweetList'
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <Profile />
      <main className="container">
      <TweetForm />
      <TweetList />
      </main>
    </>
  );
}

export default App;
