import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Hotel from "./Hotel";
import Login from "./Login";
import Register from "./Register";
import Portal from "./Portal";
import ListHotel from "./ListHotel";
import CreateHotel from "./CreateHotel";
import EditHotel from "./EditHotel";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hotel/:id" element={<Hotel />} />
        <Route path="/portal" element={<Portal/>}>
          <Route path="list-hotel" element={<ListHotel/>}></Route>
          <Route path="create-hotel" element={<CreateHotel/>}></Route>
          <Route path="edit-hotel/:id" element={<EditHotel/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
