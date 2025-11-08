import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VehicleGrid from './components/VehicleGrid';
import Footer from './components/Footer';

export default function App() {
  React.useEffect(() => {
    document.title = 'Sewa Mobil & Motor | RentRide';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Sewa mobil dan motor dengan mudah. Lihat ketersediaan, harga per jam, dan hubungi admin via WhatsApp.');
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = 'Sewa mobil dan motor dengan mudah. Lihat ketersediaan, harga per jam, dan hubungi admin via WhatsApp.';
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <VehicleGrid />
      <Footer />
    </div>
  );
}
