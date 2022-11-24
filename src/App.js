import "./App.css";
import { Provider } from "react-redux";
import store from "./Store/redux-store";
import SearchContainer from "./Components/Search/searchContainer";
import UniversitiesContainer from "./Components/UniversitiesContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SearchContainer />
        <UniversitiesContainer />
      </Provider>
    </div>
  );
}

export default App;
