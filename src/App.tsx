import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LandingPage } from '@/pages/LandingPage';
import BlogPage from '@/pages/BlogPage';
import BlogPost from '@/pages/BlogPost';
import { Privacy } from '@/pages/Privacy';
import { Terms } from '@/pages/Terms';

import { ScrollToTop } from '@/components/ScrollToTop';
import { ScrollToHashElement } from '@/components/ScrollToHashElement';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHashElement />
      <div className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden selection:bg-primary/20 selection:text-primary">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
