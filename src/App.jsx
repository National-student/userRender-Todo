import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      document.body.style.backgroundColor = "red";
    }
    if (count > 1) {
      document.body.style.backgroundColor = "green";
    }
    if (count > 2) {
      document.body.style.backgroundColor = "blue";
    }
  }, [count]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>

      {loading && <strong>Loading...</strong>}
      {error && <strong>Xatolik....</strong>}

      {user.length > 0 && (
        <ul>
          {user.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong>
            </li>
          ))}
        </ul>
      )}

      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
      <strong>{count}</strong>
    </div>
  );
}

export default App;
