import React from 'react';
import { Clock, CheckCircle2, XCircle, Phone } from 'lucide-react';

export default function VehicleCard({ vehicle }) {
  const isAvailable = vehicle.status === 'Tersedia';
  const pesan = encodeURIComponent(
    `Halo Admin, saya ingin menyewa ${vehicle.nama} pada tanggal ${vehicle.tanggal || '...'}.`
  );
  const waLink = `https://wa.me/6281234567890?text=${pesan}`;

  return (
    <div className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="aspect-video overflow-hidden bg-slate-100">
        <img src={vehicle.foto} alt={`Foto ${vehicle.nama}`} className="w-full h-full object-cover group-hover:scale-[1.02] transition" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{vehicle.nama}</h3>
            <p className="text-slate-600">Rp {vehicle.harga.toLocaleString('id-ID')} / jam</p>
          </div>
          {isAvailable ? (
            <span className="inline-flex items-center gap-1 text-green-600 text-sm">
              <CheckCircle2 className="w-4 h-4" /> Tersedia
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-red-600 text-sm">
              <XCircle className="w-4 h-4" /> Disewa
            </span>
          )}
        </div>
        <div className="mt-3 text-sm text-slate-600 flex items-center gap-2">
          <Clock className="w-4 h-4" />
          {isAvailable ? 'Siap disewa sekarang' : `Kembali: ${vehicle.kembali}`}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <a href={waLink} target="_blank" rel="noopener" className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <Phone className="w-4 h-4" />
            <span>Sewa Sekarang</span>
          </a>
        </div>
      </div>
    </div>
  );
}
