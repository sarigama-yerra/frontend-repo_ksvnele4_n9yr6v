import React from 'react';
import { Plus, Pencil, Trash2, LogOut } from 'lucide-react';

function VehicleForm({ initial, onSave, onCancel }) {
  const [form, setForm] = React.useState(
    initial || { id: Date.now(), nama: '', harga: 0, status: 'Tersedia', kembali: '-', foto: '' }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form, harga: Number(form.harga) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-slate-700">Nama Kendaraan</label>
          <input className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2" value={form.nama} onChange={e=>setForm({...form,nama:e.target.value})} required />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">Harga per Jam (Rp)</label>
          <input type="number" className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2" value={form.harga} onChange={e=>setForm({...form,harga:e.target.value})} required />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">Status</label>
          <select className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2" value={form.status} onChange={e=>setForm({...form,status:e.target.value})}>
            <option>Tersedia</option>
            <option>Disewa</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">Estimasi Kembali</label>
          <input className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2" value={form.kembali} onChange={e=>setForm({...form,kembali:e.target.value})} placeholder="12 Nov 2025 15:00" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-slate-700">URL Foto</label>
          <input className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2" value={form.foto} onChange={e=>setForm({...form,foto:e.target.value})} placeholder="https://..." />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Simpan</button>
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded-lg border">Batal</button>
      </div>
    </form>
  );
}

export default function AdminDashboard({ onLogout }) {
  const [items, setItems] = React.useState(() => {
    const stored = localStorage.getItem('vehicles');
    return stored ? JSON.parse(stored) : [
      { id: 1, nama: 'Toyota Avanza 1.5 AT', harga: 85000, status: 'Tersedia', kembali: '-', foto: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop' },
      { id: 2, nama: 'Honda PCX 160', harga: 45000, status: 'Disewa', kembali: '12 Nov 2025 15:00', foto: 'https://images.unsplash.com/photo-1609433862961-5d1cbb22a9ad?q=80&w=1600&auto=format&fit=crop' },
    ];
  });

  const [editing, setEditing] = React.useState(null);
  const [adding, setAdding] = React.useState(false);

  React.useEffect(() => {
    localStorage.setItem('vehicles', JSON.stringify(items));
  }, [items]);

  const handleSave = (vehicle) => {
    if (editing) {
      setItems(prev => prev.map(it => (it.id === editing.id ? { ...vehicle, id: editing.id } : it)));
      setEditing(null);
    } else {
      setItems(prev => [{ ...vehicle, id: Date.now() }, ...prev]);
      setAdding(false);
    }
  };

  const totalDisewa = items.filter(i => i.status === 'Disewa').length;
  const totalTersedia = items.filter(i => i.status === 'Tersedia').length;

  return (
    <div className="min-h-[80vh] bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">Dashboard Admin</h1>
          <button onClick={onLogout} className="inline-flex items-center gap-2 text-slate-700 hover:text-red-600">
            <LogOut className="w-5 h-5" /> Keluar
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border rounded-xl p-4"><div className="text-sm text-slate-600">Total Kendaraan</div><div className="text-2xl font-bold">{items.length}</div></div>
          <div className="bg-white border rounded-xl p-4"><div className="text-sm text-slate-600">Tersedia</div><div className="text-2xl font-bold text-green-600">{totalTersedia}</div></div>
          <div className="bg-white border rounded-xl p-4"><div className="text-sm text-slate-600">Disewa</div><div className="text-2xl font-bold text-red-600">{totalDisewa}</div></div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Data Kendaraan</h2>
          <button onClick={() => { setAdding(true); setEditing(null); }} className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Plus className="w-4 h-4" /> Tambah Kendaraan
          </button>
        </div>

        {(adding || editing) && (
          <div className="mt-6 bg-white border rounded-xl p-6">
            <VehicleForm
              initial={editing || undefined}
              onSave={handleSave}
              onCancel={() => { setAdding(false); setEditing(null); }}
            />
          </div>
        )}

        <div className="mt-6 overflow-x-auto bg-white border rounded-xl">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left p-3">Foto</th>
                <th className="text-left p-3">Nama</th>
                <th className="text-left p-3">Harga / jam</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Kembali</th>
                <th className="text-left p-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id} className="border-t">
                  <td className="p-3"><img src={item.foto} alt={`Foto ${item.nama}`} className="w-20 h-12 object-cover rounded" /></td>
                  <td className="p-3 font-medium">{item.nama}</td>
                  <td className="p-3">Rp {item.harga.toLocaleString('id-ID')}</td>
                  <td className="p-3">{item.status}</td>
                  <td className="p-3">{item.kembali}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <button onClick={() => { setEditing(item); setAdding(false); }} className="inline-flex items-center gap-1 px-3 py-1.5 rounded border hover:bg-slate-50">
                        <Pencil className="w-4 h-4" /> Edit
                      </button>
                      <button onClick={() => setItems(prev => prev.filter(p => p.id !== item.id))} className="inline-flex items-center gap-1 px-3 py-1.5 rounded border hover:bg-slate-50 text-red-600">
                        <Trash2 className="w-4 h-4" /> Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-3">Riwayat & Ringkasan Sederhana</h2>
          <div className="text-sm text-slate-600">(Demo) Total transaksi bulan ini: {Math.floor(items.length * 1.4)}</div>
        </div>
      </div>
    </div>
  );
}
