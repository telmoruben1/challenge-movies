import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import List from "./views/movie_list";
import "./App.scss";
import MovieInfo from "./views/movie_info";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<List tab="recent" />} />
        <Route path="/popular" element={<List tab="popular" />} />
        <Route path="/favorites" element={<List tab="favorites" />} />
        <Route path="movie" element={<MovieInfo />}>
          <Route path=":id" element={<MovieInfo />} />
        </Route>
        <Route path="*" element={<List tab="recent" />} />
      </Routes>
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
