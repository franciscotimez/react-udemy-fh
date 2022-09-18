import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui";

export const AppRouter = () => {

  const { status } = useCheckAuth();

  if (status === "auth-checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>

      {
        (status === "auth-ok")
          ? <Route path="/*" element={<JournalRoutes />} />
          : <Route path="/auth/*" element={<AuthRoutes />} />
      }
      <Route path="/*" element={<Navigate to="/auth/login"/>} />
      {/* Login y Registro */}
      {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}
      {/* JournalApp */}
      {/* <Route path="/*" element={<JournalRoutes />} /> */}
    </Routes>
  );
};
