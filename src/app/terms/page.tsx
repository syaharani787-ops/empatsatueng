'use client'

import Link from 'next/link'
import { ArrowLeft, FileText, Shield, AlertCircle, Users, Gavel, CheckCircle } from 'lucide-react'

export default function TermsAndConditions() {
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
                  <p className="text-xs text-slate-600">Terms & Conditions</p>
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
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Syarat & Ketentuan
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
                Selamat datang di website resmi <span className="font-semibold">CV EMPAT SATU ENGINEERING</span>. 
                Syarat dan Ketentuan ini mengatur penggunaan website dan layanan yang kami sediakan. 
                Dengan mengakses atau menggunakan website kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, 
                Anda tidak boleh mengakses atau menggunakan website kami.
              </p>
            </div>
          </section>

          {/* Company Information */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Informasi Perusahaan</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Identitas Perusahaan</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li><span className="font-medium">Nama:</span> CV EMPAT SATU ENGINEERING</li>
                    <li><span className="font-medium">Bidang Usaha:</span> Pemasangan Kerangka Baja</li>
                    <li><span className="font-medium">Telepon:</span> 082310598347</li>
                    <li><span className="font-medium">Email:</span> info@empatsatuengineering.com</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Alamat Kantor</h3>
                  <p className="text-slate-600">
                    JALAN 3 UGU NO.148<br />
                    Kel. Ujung Gunung Ilir<br />
                    Kec. Menggala, Kab. Tulang Bawang<br />
                    Prov. Lampung
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Terms */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Gavel className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Syarat Layanan</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">1. Jangkauan Layanan</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Pemasangan kerangka baja untuk gedung, pabrik, dan konstruksi komersial</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fabrikasi komponen baja custom</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Konsultasi teknis dan perencanaan struktur</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Layanan purnajual dan maintenance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">2. Proyek dan Penawaran</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Setiap penawaran harga berlaku selama 30 hari sejak tanggal diterbitkan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Harga dapat berubah sesuai dengan fluktuasi material pasar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Proyek akan dimulai setelah persetujuan teknis dan pembayaran uang muka</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Perubahan desain akan dikenakan biaya tambahan sesuai kesepakatan</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">3. Pembayaran</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Uang muka minimal 30% dari total nilai kontrak</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Pembayaran tahapan sesuai progress pekerjaan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Pelunasan maksimal 14 hari setelah serah terima proyek</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Keterlambatan pembayaran akan dikenakan denda 1% per minggu</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Responsibilities */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Hak dan Kewajiban</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Kewajiban Kami</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• Menyelesaikan proyek sesuai spifikasi dan waktu yang disepakati</li>
                  <li>• Menggunakan material berkualitas sesuai standar</li>
                  <li>• Memberikan garansi untuk setiap pekerjaan</li>
                  <li>• Memastikan keselamatan kerja selama pelaksanaan proyek</li>
                  <li>• Memberikan laporan progress secara berkala</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Kewajiban Klien</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• Menyediakan akses lokasi yang memadai</li>
                  <li>• Melakukan pembayaran sesuai jadwal</li>
                  <li>• Memberikan informasi yang akurat untuk perencanaan</li>
                  <li>• Memastikan perizinan yang diperlukan tersedia</li>
                  <li>• Mengkoordinasikan dengan pihak terkait jika diperlukan</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Warranty */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Garansi dan Jaminan</h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Kebijakan Garansi</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Struktur Baja</h4>
                    <p className="text-slate-600 text-sm">Garansi 10 tahun untuk kekuatan struktur</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Pekerjaan Instalasi</h4>
                    <p className="text-slate-600 text-sm">Garansi 2 tahun untuk kualitas pemasangan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Material</h4>
                    <p className="text-slate-600 text-sm">Garansi sesuai ketentuan produsen material</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white/50 rounded-lg">
                <p className="text-sm text-slate-600">
                  <strong>Catatan:</strong> Garansi tidak berlaku untuk kerusakan akibat bencana alam, 
                  penggunaan yang tidak sesuai, atau modifikasi tanpa persetujuan kami.
                </p>
              </div>
            </div>
          </section>

          {/* Limitations */}
          <section className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <AlertCircle className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Batasan Tanggung Jawab</h2>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-orange-400 bg-orange-50 pl-6 py-4 rounded-r-lg">
                <h3 className="font-semibold text-slate-900 mb-2">Force Majeure</h3>
                <p className="text-slate-600 text-sm">
                  Kami tidak bertanggung jawab atas keterlambatan atau ketidakmampuan pelaksanaan 
                  akibat bencana alam, perang, kerusuhan, atau kejadian di luar kendali kami.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-400 bg-orange-50 pl-6 py-4 rounded-r-lg">
                <h3 className="font-semibold text-slate-900 mb-2">Batasan Kerugian</h3>
                <p className="text-slate-600 text-sm">
                  Tanggung jawab kami maksimal sebesar nilai kontrak proyek yang bersangkutan.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-400 bg-orange-50 pl-6 py-4 rounded-r-lg">
                <h3 className="font-semibold text-slate-900 mb-2">Kerugian Tidak Langsung</h3>
                <p className="text-slate-600 text-sm">
                  Kami tidak bertanggung jawab atas kerugian tidak langsung, konsekuensial, 
                  atau punitive damages.
                </p>
              </div>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Penyelesaian Sengketa</h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <p className="text-slate-600 mb-4">
                Setiap sengketa yang timbul dari penggunaan website atau layanan kami akan diselesaikan melalui:
              </p>
              <ol className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span>Musyawarah dan kekeluargaan antara kedua belah pihak</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span>Mediasi melalui pihak ketiga yang netral</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span>Penyelesaian melalui Pengadilan Negeri di wilayah hukum kami beroperasi</span>
                </li>
              </ol>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Hubungi Kami</h2>
            <div className="bg-slate-50 rounded-lg p-6">
              <p className="text-slate-600 mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="space-y-2 text-slate-700">
                <p><span className="font-semibold">Perusahaan:</span> CV EMPAT SATU ENGINEERING</p>
                <p><span className="font-semibold">Email:</span> legal@empatsatuengineering.com</p>
                <p><span className="font-semibold">Telepon:</span> 082310598347</p>
                <p><span className="font-semibold">Alamat:</span> JALAN 3 UGU NO.148, Kel. Ujung Gunung Ilir, Kec. Menggala, Kab. Tulang Bawang, Prov. Lampung</p>
              </div>
            </div>
          </section>

          {/* Update Policy */}
          <section className="border-t pt-8">
            <p className="text-sm text-slate-500 text-center">
              Syarat & Ketentuan ini dapat diperbarui dari waktu ke waktu. Perubahan akan diinformasikan melalui website kami. 
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