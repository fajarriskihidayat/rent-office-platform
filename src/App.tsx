import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Browse from "./pages/Browse";
import OfficeDetail from "./pages/OfficeDetail";
import BookOffice from "./pages/BookOffice";
import CityDetails from "./pages/CityDetail";
import SuccessBooking from "./pages/SuccessBooking";
import CheckBooking from "./pages/CheckBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/office/:slug" element={<OfficeDetail />} />
        <Route path="/office/:slug/book" element={<BookOffice />} />
        <Route path="/city/:slug" element={<CityDetails />} />
        <Route path="/success-booking" element={<SuccessBooking />} />
        <Route path="/check-booking" element={<CheckBooking />} />
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
