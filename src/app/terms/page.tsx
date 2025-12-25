'use client';

import { useState } from 'react';
import { Menu, X, ArrowLeft, FileText, AlertCircle, CheckCircle, Gavel } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
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
              <Link href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privacy</Link>
              <span className="text-blue-600 font-semibold">Terms</span>
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
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Privacy</Link>
              <span className="block px-3 py-2 text-blue-600 font-semibold">Terms</span>
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
          <span className="text-blue-600 font-semibold">Terms & Conditions</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="text-blue-600" size={40} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat & Ketentuan <span className="text-blue-600">CV TOGARMA JAYA ABADI</span>
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
                Selamat datang di <strong>CV TOGARMA JAYA ABADI</strong>. Syarat dan Ketentuan ini 
                mengatur penggunaan layanan yang kami sediakan. Dengan mengakses atau menggunakan 
                layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p>
                Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, 
                Anda tidak boleh menggunakan layanan kami.
              </p>
            </div>
          </section>

          {/* Definitions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Definisi</h2>
            <div className="bg-blue-50 p-6 rounded-xl">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-semibold">•</span>
                  <div>
                    <strong>"Perusahaan"</strong> merujuk pada CV TOGARMA JAYA ABADI, entitas bisnis yang 
                    menyediakan layanan sesuai dengan informasi kontak yang tertera.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-semibold">•</span>
                  <div>
                    <strong>"Layanan"</strong> merujuk pada semua produk, jasa, dan solusi bisnis yang 
                    ditawarkan oleh Perusahaan kepada klien.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-semibold">•</span>
                  <div>
                    <strong>"Klien"</strong> merujuk pada individu atau entitas bisnis yang menggunakan 
                    atau memesan layanan dari Perusahaan.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-semibold">•</span>
                  <div>
                    <strong>"Website"</strong> merujuk pada situs web resmi Perusahaan dan semua konten 
                    yang terdapat di dalamnya.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Services Terms */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <CheckCircle className="text-blue-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">Syarat Layanan</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pemesanan Layanan</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">1.</span>
                    <span>Pemesanan layanan dapat dilakukan melalui website, telepon, email, atau kunjungan langsung ke kantor.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">2.</span>
                    <span>Perusahaan berhak meminta informasi lengkap dari klien untuk memproses pemesanan.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">3.</span>
                    <span>Konfirmasi pemesanan akan dikirimkan melalui email atau kontak yang disediakan.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">4.</span>
                    <span>Perusahaan berhak menolak pemesanan tanpa memberikan alasan.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pembayaran</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">1.</span>
                    <span>Metode pembayaran yang tersedia akan diinformasikan pada saat konfirmasi pesanan.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">2.</span>
                    <span>Pembayaran harus dilakukan sesuai dengan tenggat waktu yang ditentukan.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">3.</span>
                    <span>Keterlambatan pembayaran dapat dikenakan denda sesuai dengan kebijakan perusahaan.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">4.</span>
                    <span>Faktur resmi akan diterbitkan setelah pembayaran diterima.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pelaksanaan Layanan</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">1.</span>
                    <span>Perusahaan akan berusaha memberikan layanan terbaik sesuai dengan kesepakatan.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">2.</span>
                    <span>Waktu pelaksanaan layanan akan disepakati bersama antara Perusahaan dan Klien.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">3.</span>
                    <span>Perubahan jadwal harus dikomunikasikan minimal 24 jam sebelumnya.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">4.</span>
                    <span>Perusahaan tidak bertanggung jawab atas keterlambatan yang disebabkan oleh faktor di luar kontrol.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <AlertCircle className="text-blue-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">Kewajiban Klien</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-xl">
              <p className="text-gray-700 mb-6">
                Sebagai pengguna layanan <strong>CV TOGARMA JAYA ABADI</strong>, Anda setuju untuk:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">Informasi Akurat</h4>
                  <p className="text-sm text-gray-600">Memberikan informasi yang benar, lengkap, dan terkini</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">Kerjasama</h4>
                  <p className="text-sm text-gray-600">Bekerjasama dalam pelaksanaan layanan yang disepakati</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">Pembayaran Tepat Waktu</h4>
                  <p className="text-sm text-gray-600">Melakukan pembayaran sesuai dengan kesepakatan</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">Respect</h4>
                  <p className="text-sm text-gray-600">Menghormati tim dan properti Perusahaan</p>
                </div>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hak Kekayaan Intelektual</h2>
            <div className="bg-slate-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">
                Semua konten, materi, dan informasi yang terdapat dalam website dan layanan 
                <strong> CV TOGARMA JAYA ABADI</strong> dilindungi oleh hukum hak cipta dan merek dagang.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Anda tidak boleh menyalin, mendistribusikan, atau menggunakan materi tanpa izin tertulis.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Nama "CV TOGARMA JAYA ABADI" dan logo adalah merek dagang terdaftar.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Setiap pelanggaran hak kekayaan intelektual akan ditindak sesuai hukum yang berlaku.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pembatasan Tanggung Jawab</h2>
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">
                <strong>CV TOGARMA JAYA ABADI</strong> tidak bertanggung jawab atas:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Kerugian tidak langsung, insidental, atau konsekuensial.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Kehilangan data atau informasi yang disebabkan oleh faktor eksternal.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Keterlambatan yang disebabkan oleh force majeure (bencana alam, kerusuhan, dll).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Kerugian yang melebihi nilai pembayaran layanan yang telah dilakukan.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pengakhiran Layanan</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-6 py-3">
                <h3 className="font-semibold text-gray-900 mb-1">Pengakhiran oleh Klien</h3>
                <p className="text-gray-600">
                  Klien dapat mengakhiri layanan dengan memberikan pemberitahuan tertulis minimal 7 hari 
                  sebelum tanggal pengakhiran yang diinginkan.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6 py-3">
                <h3 className="font-semibold text-gray-900 mb-1">Pengakhiran oleh Perusahaan</h3>
                <p className="text-gray-600">
                  Perusahaan berhak mengakhiri layanan jika Klien melanggar syarat dan ketentuan 
                  atau terlibat dalam aktivitas yang merugikan Perusahaan.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6 py-3">
                <h3 className="font-semibold text-gray-900 mb-1">Efek Pengakhiran</h3>
                <p className="text-gray-600">
                  Setelah pengakhiran, Klien tetap bertanggung jawab atas semua pembayaran yang 
                  belum diselesaikan hingga tanggal pengakhiran.
                </p>
              </div>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Gavel className="text-blue-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">Penyelesaian Sengketa</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-xl">
              <p className="text-gray-700 mb-6">
                Setiap sengketa yang timbul dari penggunaan layanan <strong>CV TOGARMA JAYA ABADI</strong> 
                akan diselesaikan melalui prosedur berikut:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">1. Negosiasi</h4>
                  <p className="text-sm text-gray-600">Kedua belah pihak akan berusaha menyelesaikan sengketa melalui diskusi dan negosiasi.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">2. Mediasi</h4>
                  <p className="text-sm text-gray-600">Jika negosiasi gagal, sengketa dapat diselesaikan melalui mediasi dengan pihak ketiga netral.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">3. Yurisdiksi Hukum</h4>
                  <p className="text-sm text-gray-600">Sengketa yang tidak dapat diselesaikan akan diajukan ke pengadilan di Jakarta Timur.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hukum yang Berlaku</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700">
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku 
                di Republik Indonesia. Setiap ketentuan yang dianggap tidak sah atau tidak dapat 
                dilaksanakan tidak akan memengaruhi keabsahan ketentuan lainnya.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hubungi Kami</h2>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl">
              <p className="mb-6">
                Jika Anda memiliki pertanyaan atau memerlukan klarifikasi mengenai Syarat dan Ketentuan ini, 
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
                  <strong>Email:</strong> legal@togarmajayaabadi.co.id
                </div>
              </div>
            </div>
          </section>

          {/* Agreement Statement */}
          <section className="mb-8">
            <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-xl text-center">
              <p className="text-lg font-semibold text-blue-800 mb-2">
                Pernyataan Persetujuan
              </p>
              <p className="text-gray-700">
                Dengan menggunakan layanan <strong>CV TOGARMA JAYA ABADI</strong>, Anda menyatakan bahwa 
                telah membaca, memahami, dan setuju untuk terikat oleh Syarat dan Ketentuan ini.
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
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><span className="text-white">Terms & Conditions</span></li>
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