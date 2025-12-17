'use client'

import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Database, Users, Lock } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/logo.png" alt="CV EMPAT SATU ENGINEERING" className="h-8 w-auto" />
                <div>
                  <h1 className="text-lg font-bold text-slate-900">CV EMPAT SATU ENGINEERING</h1>
                  <p className="text-xs text-slate-600">Privacy Policy</p>
                </div>
              </Link>
            </div>
            
            <Link href="/" className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-lg text-slate-600">
              <span className="font-semibold">CV EMPAT SATU ENGINEERING</span> - Berlaku sejak 1 Januari 2024
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Pendahuluan</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4">
                Di <span className="font-semibold">CV EMPAT SATU ENGINEERING</span>, kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi yang Anda berikan kepada kami 
                melalui website resmi kami.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Dengan menggunakan website kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini. 
                Jika Anda tidak setuju dengan praktik ini, jangan gunakan website kami.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Database className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Informasi yang Kami Kumpulkan</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Informasi Pribadi</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Nama lengkap
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Alamat email
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Nomor telepon
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Alamat perusahaan atau rumah
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Informasi proyek yang Anda butuhkan
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Informasi Teknis</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Alamat IP
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Jenis browser dan perangkat
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Waktu akses website
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Halaman yang dikunjungi
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Bagaimana Kami Menggunakan Informasi</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Untuk Layanan</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• Merespons permintaan informasi</li>
                  <li>• Memberikan penawaran harga</li>
                  <li>• Mengoordinasikan proyek</li>
                  <li>• Memberikan layanan purnajual</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Untuk Komunikasi</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• Mengirim informasi produk</li>
                  <li>• Memberikan update proyek</li>
                  <li>• Newsletter (jika diizinkan)</li>
                  <li>• Follow-up layanan</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Lock className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Perlindungan Data</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-6">
              <p className="text-slate-600 leading-relaxed mb-4">
                <span className="font-semibold">CV EMPAT SATU ENGINEERING</span> berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span>Enkripsi data saat transmisi dan penyimpanan</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span>Akses terbatas hanya untuk staf yang berwenang</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span>Backup data teratur dan aman</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">4</span>
                  <span>Update keamanan sistem secara berkala</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Hak Anda</h2>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="font-semibold text-slate-900 mb-1">Hak Akses</h3>
                <p className="text-slate-600">Anda berhak mengetahui data pribadi yang kami simpan tentang Anda</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="font-semibold text-slate-900 mb-1">Hak Koreksi</h3>
                <p className="text-slate-600">Anda dapat memperbarui atau memperbaiki data pribadi yang tidak akurat</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="font-semibold text-slate-900 mb-1">Hak Penghapusan</h3>
                <p className="text-slate-600">Anda dapat meminta penghapusan data pribadi Anda dari sistem kami</p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="font-semibold text-slate-900 mb-1">Hak Pembatasan</h3>
                <p className="text-slate-600">Anda dapat membatasi pengolahan data pribadi Anda</p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Hubungi Kami</h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <p className="text-slate-600 mb-4">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak Anda, 
                silakan hubungi kami:
              </p>
              <div className="space-y-2 text-slate-700">
                <p><span className="font-semibold">Perusahaan:</span> CV EMPAT SATU ENGINEERING</p>
                <p><span className="font-semibold">Email:</span> privacy@empatsatuengineering.com</p>
                <p><span className="font-semibold">Telepon:</span> 082310598347</p>
                <p><span className="font-semibold">Alamat:</span> JALAN 3 UGU NO.148, Kel. Ujung Gunung Ilir, Kec. Menggala, Kab. Tulang Bawang, Prov. Lampung</p>
              </div>
            </div>
          </section>

          {/* Update Policy */}
          <section className="border-t pt-8">
            <p className="text-sm text-slate-500 text-center">
              Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu. Perubahan akan diinformasikan melalui website kami. 
              Versi terakhir diperbarui pada 1 Januari 2024.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="/logo.png" alt="CV EMPAT SATU ENGINEERING" className="h-6 w-auto" />
            <span className="font-semibold">CV EMPAT SATU ENGINEERING</span>
          </div>
          <p className="text-slate-400 text-sm">
            Specialist Pemasangan Kerangka Baja Profesional
          </p>
          <p className="text-slate-500 text-xs mt-4">
            &copy; 2024 CV EMPAT SATU ENGINEERING. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}