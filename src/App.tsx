import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactPage from './pages/Contact';
import ServicesPage from './pages/Services';
import AboutPage from './pages/About';
import Loader from './components/Loader';
import ProductPage from './pages/Products';
import { Location } from 'react-router-dom';
import Login from './components/Admin/Login';

const AppWrapper = (): JSX.Element => {
  const location: Location = useLocation();
  const [loading, setLoading] = useState<boolean>(true);
  const [previousLocation, setPreviousLocation] = useState<Location>(location);

  useEffect(() => {
    // Only show loader if pathname changes (not on first load)
    if (location.pathname !== previousLocation.pathname) {
      setLoading(true);
    }
    setPreviousLocation(location);
  }, [location]);

  useEffect(() => {
    if (loading) {
      // Hide content for at least 500ms for smooth transition
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div className="flex flex-col min-h-screen">
      {!loading && (
        <>
          <Navbar />
          <main className="flex-grow">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/admin" element={<Login />} />

            </Routes>
          </main>
          <Footer />
        </>
      )}
      {loading && <Loader />}
    </div>
  );
};

function App(): JSX.Element {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;