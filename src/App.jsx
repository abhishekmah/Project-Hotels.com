import { Home } from "./Pages/Home/Home";
import "./App.css";
import LastMinDeals from "./Pages/LastDeals/LastMinDeals";
import { Signin } from "./Pages/Auth/Signin";
import { Routes } from "./Routes/Route";
import { SearchResultPage } from "./Pages/SearchResult/SearchResultPage";
import { GetData } from "./Components/CardHotelSearch/Data";

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
