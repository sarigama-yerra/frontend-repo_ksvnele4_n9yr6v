import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[85vh] overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-end pb-10">
        <div className="text-white">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">Sewa Mobil & Motor Mudah, Cepat, dan Terpercaya</h1>
          <p className="mt-4 text-slate-300 max-w-2xl">Kelola armada rental Anda dan tampilkan kendaraan siap sewa untuk pelanggan. Harga transparan per jam dan status ketersediaan real-time.</p>
          <div className="mt-6 flex flex-wrap gap-3" id="sewa">
            <a href="#kendaraan" className="bg-white text-slate-900 px-5 py-3 rounded-lg font-semibold hover:bg-slate-200 transition">Lihat Kendaraan</a>
            <a href="https://wa.me/6281234567890?text=Halo%20Admin%2C%20saya%20ingin%20menyewa%20kendaraan" target="_blank" rel="noopener" className="bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Sewa via WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
