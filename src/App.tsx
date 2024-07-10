import { Routes, Route, Outlet, Link } from "react-router-dom";
import { PaymentMethod } from "./pages/payment-method";

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<PaymentMethod />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
