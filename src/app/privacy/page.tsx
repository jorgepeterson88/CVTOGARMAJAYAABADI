'use client';

import { useState } from 'react';
import { Menu, X, ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/logo.png" alt="CV TOGARMA JAYA ABADI" className="h-10 w-10 mr-3" />
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    CV TOGARMA JAYA ABADI
                  </h1>
                  <p className="text-xs text-gray-500">Solusi Bisnis Terpercaya</p>
                </div>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</Link>
              <Link href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</Link>
              <Link href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</Link>
              <span className="text-blue-600 font-semibold">Privacy</span>
              <Link href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Terms</Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</Link>
              <Link href="/#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tentang</Link>
              <Link href="/#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Layanan</Link>
              <Link href="/#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</Link>
              <span className="block px-3 py-2 text-blue-600 font-semibold">Privacy</span>
              <Link href="/terms" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <nav className="flex items-center space-x-2 text-sm">
          <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
            Beranda
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-blue-600 font-semibold">Privacy Policy</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-blue-600" size={40} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi <span className="text-blue-600">CV TOGARMA JAYA ABADI</span>
            </h1>
            <p className="text-lg text-gray-600">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pendahuluan</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">
                Di <strong>CV TOGARMA JAYA ABADI</strong>, kami sangat menghargai privasi Anda dan berkomitmen 
                untuk melindungi data pribadi yang Anda percayakan kepada kami. Kebijakan Privasi ini menjelaskan 
                bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika 
                Anda menggunakan layanan kami.
              </p>
              <p>
                Dengan menggunakan layanan <strong>CV TOGARMA JAYA ABADI</strong>, Anda menyetujui praktik-praktik 
                yang dijelaskan dalam kebijakan ini.
              </p>
            </div>
          </section>

          {/* Information Collection */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Database className="text-blue-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">Informasi yang Kami Kumpulkan</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Informasi Pribadi</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Nama lengkap dan identitas resmi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Alamat email dan nomor telepon</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Alamat lengkap (rumah/kantor)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Informasi pembayaran dan faktur</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Informasi Teknis</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Alamat IP dan informasi perangkat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Jenis browser dan sistem operasi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Data penggunaan website (cookies, analytics)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Waktu akses dan durasi kunjungan</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Usage */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Eye className="text-blue-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">Cara Kami Menggunakan Informasi</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Layanan Pelanggan</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Merespons pertanyaan dan permintaan</li>
                  <li>• Memberikan dukungan teknis</li>
                  <li>• Memproses pesanan dan transaksi</li>
                  <li>• Mengirimkan informasi layanan</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Peningkatan Layanan</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Analisis penggunaan website</li>
                  <li>• Pengembangan produk baru</li>
                  <li>• Penelitian pasar</li>
                  <li>• Personalisasi pengalaman</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Komunikasi</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Newsletter dan update</li>
                  <li>• Informasi promosi</li>
                  <li>• Pengumuman penting</li>
                  <li>• Survei kepuasan</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Kepatuhan Hukum</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Memenuhi kewajiban legal</li>
                  <li>• Melindungi hak-hak perusahaan</li>
                  <li>• Mencegah aktivitas ilegal</li>
                  <li>• Kooperasi dengan penegak hukum</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Lock className="text-blue-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">Keamanan Data</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-xl">
              <p className="text-gray-700 mb-6">
                <strong>CV TOGARMA JAYA ABADI</strong> menerapkan berbagai langkah keamanan untuk melindungi 
                informasi pribadi Anda:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">Enkripsi Data</h4>
                  <p className="text-sm text-gray-600">Semua data sensitif dienkripsi dengan standar industri terkini</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">Akses Terbatas</h4>
                  <p className="text-sm text-gray-600">Hanya personel berwenang yang dapat mengakses data pribadi</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">Audit Reguler</h4>
                  <p className="text-sm text-gray-600">Pemeriksaan keamanan dilakukan secara berkala</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">Backup Aman</h4>
                  <p className="text-sm text-gray-600">Data backup disimpan dengan keamanan maksimal</p>
                </div>
              </div>
            </div>
          </section>

          {/* User Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hak Anda Sebagai Pengguna</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-6 py-3">
                <h3 className="font-semibold text-gray-900 mb-1">Akses Data</h3>
                <p className="text-gray-600">Anda berhak mengetahui data pribadi yang kami simpan tentang Anda</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6 py-3">
                <h3 className="font-semibold text-gray-900 mb-1">Koreksi Data</h3>
                <p className="text-gray-600">Anda dapat memperbarui atau memperbaiki informasi pribadi yang tidak akurat</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6 py-3">
                <h3 className="font-semibold text-gray-900 mb-1">Penghapusan Data</h3>
                <p className="text-gray-600">Anda dapat meminta penghapusan data pribadi sesuai dengan ketentuan yang berlaku</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6 py-3">
                <h3 className="font-semibold text-gray-900 mb-1">Opsi Keluar</h3>
                <p className="text-gray-600">Anda dapat berhenti berlangganan komunikasi marketing kapan saja</p>
              </div>
            </div>
          </section>

          {/* Third Party Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pembagian dengan Pihak Ketiga</h2>
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">
                Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. 
                Kami hanya akan membagikan informasi Anda dalam keadaan berikut:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Dengan persetujuan eksplisit Anda</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Kepada mitra layanan yang membantu operasional bisnis kami</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Sesuai yang diwajibkan oleh hukum atau peraturan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hubungi Kami</h2>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl">
              <p className="mb-6">
                Jika Anda memiliki pertanyaan, keluhan, atau permintaan terkait Kebijakan Privasi ini, 
                silakan hubungi kami:
              </p>
              <div className="space-y-3">
                <div>
                  <strong>Perusahaan:</strong> CV TOGARMA JAYA ABADI
                </div>
                <div>
                  <strong>Alamat:</strong> Gedung Maribaya Jalan Otista Raya Nomor 141, Kel. Kampung Melayu, 
                  Kec. Jatinegara, Kota Adm. Jakarta Timur, Prov. DKI Jakarta, Kode Pos 13330
                </div>
                <div>
                  <strong>Telepon:</strong> 082382466336
                </div>
                <div>
                  <strong>Email:</strong> privacy@togarmajayaabadi.co.id
                </div>
              </div>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pembaruan Kebijakan</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700">
                <strong>CV TOGARMA JAYA ABADI</strong> dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. 
                Setiap perubahan akan dipublikasikan di halaman ini dengan tanggal pembaruan terbaru. 
                Kami menyarankan Anda untuk secara berkala meninjau kebijakan ini agar tetap informasi 
                tentang praktik privasi kami.
              </p>
            </div>
          </section>

          {/* Back Button */}
          <div className="text-center">
            <Link 
              href="/" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all"
            >
              <ArrowLeft className="mr-2" size={20} />
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="CV TOGARMA JAYA ABADI" className="h-10 w-10 mr-3" />
                <div>
                  <h3 className="text-xl font-bold">CV TOGARMA JAYA ABADI</h3>
                  <p className="text-gray-400 text-sm">Solusi Bisnis Terpercaya</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Mitra bisnis terpercaya Anda untuk solusi profesional dan berkualitas tinggi. 
                Kami berkomitmen untuk memberikan layanan terbaik dengan integritas dan dedikasi.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigasi Cepat</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Beranda</Link></li>
                <li><Link href="/#about" className="hover:text-white transition-colors">Tentang</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Layanan</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Kontak</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><span className="text-white">Privacy Policy</span></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CV TOGARMA JAYA ABADI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}