import { useEffect } from "react";
import { BrowserRouter, useRoutes, Navigate } from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import { loginState } from "./recoil/state";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "@/pages/Login";
import Home from "@/pages/Home";

const AuthRoute = () =>
  useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);

const GuestRoute = () =>
  useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    { path: "*", element: <Navigate to="/login" replace /> },
  ]);

const Router = () => {
  const [authState, setAuthState] = useRecoilState(loginState);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setAuthState((prev) => {
        return {
          ...prev,
          isLoggedIn: true,
          token: token,
        };
      });
    }
  }, [authState.token]);

  if (authState.isLoggedIn) {
    return <AuthRoute />;
  } else {
    return <GuestRoute />;
  }
};

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
