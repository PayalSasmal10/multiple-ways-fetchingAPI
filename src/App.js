import logo from './logo.svg';
import './App.css';
import {useFetch} from './UseFetch';

function App() {
  const url = "https://jsonplaceholder.typicode.com/todos/";
  
  const {apiData, isPending } = useFetch(url);
  return (
    <div className="App">
      <h1>Title</h1>
      {isPending && <div>Loading</div>}
      {apiData.map((data) => {
        return(
          <div key={data.id}>
            <p>{data.title}</p>
          </div>
        )
        })}
    </div>
  );
}

export default App;
