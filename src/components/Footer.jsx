import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="kontak" className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">RentRide</h3>
          <p className="mt-2 text-slate-600">Solusi rental mobil & motor terpercaya. Harga transparan, layanan cepat, dan armada terawat.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Kontak</h4>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 0812-3456-7890</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> admin@rentridesample.com</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Jl. Merdeka No. 123, Jakarta</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Jam Operasional</h4>
          <ul className="mt-3 space-y-1 text-slate-600">
            <li>Senin - Jumat: 08.00 - 21.00</li>
            <li>Sabtu - Minggu: 09.00 - 20.00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">© {new Date().getFullYear()} RentRide. All rights reserved.</div>
    </footer>
  );
}
