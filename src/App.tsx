import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "next-themes";
import BottomNav from "./1_components/BottomNav";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Stats from "./pages/Stats";
import Settings from "./pages/Settings";
import ComponentExamples from "@/pages/ComponentExamples";
import { useEffect } from "react";
import BloodSugarRecordDetail from "./pages/BloodSugarRecordDetail";
import { Provider } from "react-redux";
import store from "./8_store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BrowserRouter basename="/">
            <AppContent />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
      <ToastContainer />
    </Provider>
  );
};

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    // 코르도바 deviceready 이벤트 처리
    document.addEventListener(
      "deviceready",
      () => {
        // 필요한 초기화 코드
      },
      false
    );
  }, []);

  // 현재 경로에 따라 BottomNav 표시 여부를 결정하는 로직
  const hideBottomNavRoutes = ["/record-detail"]; // BottomNav를 숨길 경로들
  const shouldShowBottomNav = (pathname: string) => {
    return !hideBottomNavRoutes.some((route) => pathname.startsWith(route));
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/component-examples" element={<ComponentExamples />} />
        <Route path="/record-detail" element={<BloodSugarRecordDetail />} />
      </Routes>
      {shouldShowBottomNav(location.pathname) && <BottomNav />}
    </div>
  );
};

export default App;
