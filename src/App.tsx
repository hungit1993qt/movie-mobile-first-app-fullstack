import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ErrorBoundary from "Components/ErrorBoundary/ErrorBoundary";
import HomeTemplate from "./Templates/HomeTemplate";
import ProtectedRoute from "Routes/ProtectedRoute";
import PageLoading from "Components/PageLoading/PageLoading";

const HomePage = lazy(() => import("Pages/HomePage/HomePage"));
const ListCheckout = lazy(() => import("Components/ListCheckout/ListCheckout"));
const SearchNavbar = lazy(() => import("Components/SearchNavbar/SearchNavbar"));
function App() {
  return (
    <ErrorBoundary>
      {/* Suspense dùng để hiện thị ra fallback UI khi component đang được load */}
      <Suspense fallback={<PageLoading />}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<HomeTemplate />}>
              <Route path="/search" element={<SearchNavbar />} />
              <Route
                path="list-checkout"
                element={
                  <ProtectedRoute>
                    <ListCheckout />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to={""} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}
export default App;
