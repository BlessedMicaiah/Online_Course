import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { MobileMenuProvider } from "@/contexts/MobileMenuContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      <MobileMenuProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </MobileMenuProvider>
    </QueryClientProvider>
  );
}

export default App;
