import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { MobileMenuProvider } from "@/contexts/MobileMenuContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ui/ThemeToggle";
import DayNightBackground from "@/components/ui/DayNightBackground";
import Home from "@/pages/Home";
import LessonPage from "@/pages/LessonPage";
import ChallengePage from "@/pages/ChallengePage";
import CommunityPage from "@/pages/CommunityPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/lessons/:id" component={LessonPage} />
      <Route path="/lessons" component={() => (
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold">Lessons Page</h1>
          <p className="text-gray-400">Lessons overview will be displayed here.</p>
        </div>
      )} />
      <Route path="/challenges/:id" component={ChallengePage} />
      <Route path="/challenges" component={() => (
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold">Challenges Page</h1>
          <p className="text-gray-400">Challenges overview will be displayed here.</p>
        </div>
      )} />
      <Route path="/community" component={CommunityPage} />
      <Route path="/account" component={() => (
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold">Account Page</h1>
          <p className="text-gray-400">Account details will be displayed here.</p>
        </div>
      )} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <MobileMenuProvider>
          <div className="flex flex-col min-h-screen">
            <DayNightBackground className="fixed inset-0 pointer-events-none" />
            <Header />
            <main className="flex-grow relative z-10">
              <Router />
            </main>
            {/* Ensure the footer is rendered separately and after main content */}
            <Footer />
            <div className="fixed bottom-6 right-6 z-50">
              <ThemeToggle />
            </div>
          </div>
          <Toaster />
        </MobileMenuProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
