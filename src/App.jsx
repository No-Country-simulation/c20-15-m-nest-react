import {
  AuthPage,
  HomePage,
  Login,
  ContactForm,
  PrivateRoute,
  Register,
  TransferPage,
  TransferForm,
  TransferConfirm,
} from "./components";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/transfer"
            element={
              <PrivateRoute>
                <TransferPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/transfer/form"
            element={
              <PrivateRoute>
                <TransferForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/transfer/form/confirm"
            element={
              <PrivateRoute>
                <TransferConfirm />
              </PrivateRoute>
            }
          />

          <Route
            path="/transfer/newcontact"
            element={
              <PrivateRoute>
                <ContactForm />
              </PrivateRoute>
            }
          />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;