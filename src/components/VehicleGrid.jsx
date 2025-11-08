import React from 'react';
import VehicleCard from './VehicleCard';

const sampleVehicles = [
  {
    id: 1,
    nama: 'Toyota Avanza 1.5 AT',
    harga: 85000,
    status: 'Tersedia',
    kembali: '-',
    foto: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    nama: 'Honda PCX 160',
    harga: 45000,
    status: 'Disewa',
    kembali: '12 Nov 2025 15:00',
    foto: 'https://images.unsplash.com/photo-1609433862961-5d1cbb22a9ad?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    nama: 'Daihatsu Xenia MT',
    harga: 80000,
    status: 'Tersedia',
    kembali: '-',
    foto: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    nama: 'Yamaha NMAX 155',
    harga: 42000,
    status: 'Disewa',
    kembali: '10 Nov 2025 10:00',
    foto: 'https://images.unsplash.com/photo-1609259885910-2dc18fdb3cd5?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function VehicleGrid() {
  return (
    <section id="kendaraan" className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Kendaraan Tersedia</h2>
            <p className="text-slate-600">Mobil dan motor dengan perawatan rutin, siap menemani perjalanan Anda.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleVehicles.map(v => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
