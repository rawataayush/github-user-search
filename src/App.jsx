import { useState } from "react";
import axios from 'axios';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import InitialState from './components/InitialState';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import UserCard from './components/UserCard';

const App = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState("");

  const handleInputChange =(e) =>{
    setUsername(e);
  }

  const handleSearch = () => {
    if (!username) {
      return;
    } else {
      fetchUser();
    }
  };

  const fetchUser = async () => {
    setError('');
    setLoading(true);
    await axios.get(
      `https://api.github.com/users/${username}`
    ).then((result) => {
      setUser(result.data);
      setLoading(false);
    }).catch((err) => {
      setError(err);
      setLoading(false);
    })
  };

  return (
    <>
    <div className='my-5 mx-4 flex flex-col gap-3'>
      <Header />
      <SearchBar
        username={username}
        onHandleInputChange={handleInputChange}
        onHandleSearch={handleSearch}
      />
    </div>

    {/* Conditional rendering */}
    <div className="my-5 mx-8 flex flex-col md:mx-44 md:my-12 lg:mx-96">
      {!loading && !error && !user && <InitialState />}
      {loading && <Loading />}
      {error && <ErrorMessage error={error} />}
      {!loading && !error && user && <UserCard key={user.id} user={user} />}
    </div>
  </>
  )
}

export default App