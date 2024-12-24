import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import BottomNav from "./1_components/BottomNav";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Stats from "./pages/Stats";
import Settings from "./pages/Settings";
import ComponentExamples from "@/pages/ComponentExamples";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // 코르도바 deviceready 이벤트 처리
    document.addEventListener('deviceready', () => {
      // 필요한 초기화 코드
    }, false);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <BrowserRouter basename="/">
          <div className="min-h-screen bg-background dark:bg-background-dark">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/component-examples" element={<ComponentExamples />} />
            </Routes>
            <BottomNav />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
};

export default App;