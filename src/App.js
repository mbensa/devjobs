import "./App.css";
import Header from "./components/Header";
import FilteredJobs from "./components/FilteredJobs";

export default function App() {
  return (
    <div className="app">
      <Header />
      <FilteredJobs />
    </div>
  );
}
