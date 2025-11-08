import React from 'react';
import { Car, Phone, Menu, Shield } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-blue-600 font-semibold">
            <Car className="w-6 h-6" />
            <span>RentRide</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#kendaraan" className="text-slate-700 hover:text-blue-600">Kendaraan</a>
            <a href="#harga" className="text-slate-700 hover:text-blue-600">Harga</a>
            <a href="#kontak" className="text-slate-700 hover:text-blue-600">Kontak</a>
            <a href="#sewa" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              <Phone className="w-4 h-4" />
              <span>Sewa Sekarang</span>
            </a>
            <a href="#admin" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50">
              <Shield className="w-4 h-4" />
              <span>Admin</span>
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-slate-200">
            <Menu className="w-5 h-5" />
          </button>
        </div>
        {open && (
          <div className="md:hidden py-3 space-y-2">
            <a href="#kendaraan" className="block px-2 py-2 rounded hover:bg-slate-100">Kendaraan</a>
            <a href="#harga" className="block px-2 py-2 rounded hover:bg-slate-100">Harga</a>
            <a href="#kontak" className="block px-2 py-2 rounded hover:bg-slate-100">Kontak</a>
            <a href="#sewa" className="block px-2 py-2 rounded bg-blue-600 text-white text-center">Sewa Sekarang</a>
            <a href="#admin" className="block px-2 py-2 rounded border text-center">Admin</a>
          </div>
        )}
      </nav>
    </header>
  );
}
