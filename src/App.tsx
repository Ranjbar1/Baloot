import { Navigate, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import AppContent from "./layout/Content";
function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/app/all" />} />
      <Route path="/app" element={<AppLayout />}>
        <Route path="all" element={<AppContent />} />
        <Route path=":category" element={<AppContent />} />
      </Route>
      <Route path="*" element={<>NotFound</>} />
    </Routes>
  );
}

export default App;
