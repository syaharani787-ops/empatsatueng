'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Phone, Mail, MapPin, ChevronRight, Shield, Wrench, Clock, Award, Building2, Users, Target } from 'lucide-react'

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add API call here
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="CV EMPAT SATU ENGINEERING" className="h-10 w-auto" />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-slate-900">CV EMPAT SATU ENGINEERING</h1>
                <p className="text-xs text-slate-600">Specialist in Steel Structure Installation</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Beranda</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Tentang</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Layanan</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Kontak</button>
            </nav>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-blue-600 font-medium text-lg text-left">Beranda</button>
                  <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-blue-600 font-medium text-lg text-left">Tentang</button>
                  <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-blue-600 font-medium text-lg text-left">Layanan</button>
                  <button onClick={() => scrollToSection('portfolio')} className="text-slate-700 hover:text-blue-600 font-medium text-lg text-left">Portfolio</button>
                  <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-blue-600 font-medium text-lg text-left">Kontak</button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-blue-300">CV EMPAT SATU</span><br />
                ENGINEERING
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 font-light">
                Specialist Pemasangan Kerangka Baja Profesional
              </p>
              <p className="text-lg mb-8 text-slate-200 leading-relaxed">
                Solusi terpercaya untuk kebutuhan konstruksi baja Anda. Dengan pengalaman bertahun-tahun 
                dan tim ahli profesional, kami memberikan hasil terbaik untuk setiap proyek.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => scrollToSection('contact')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Hubungi Kami
                </Button>
                <Button size="lg" onClick={() => scrollToSection('portfolio')} variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                  Lihat Portfolio
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-300">50+</div>
                    <div className="text-sm text-slate-200">Proyek Selesai</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-300">10+</div>
                    <div className="text-sm text-slate-200">Tahun Pengalaman</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-300">30+</div>
                    <div className="text-sm text-slate-200">Tim Profesional</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-300">100%</div>
                    <div className="text-sm text-slate-200">Kepuasan Klien</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Tentang Kami</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              <span className="font-semibold text-blue-900">CV EMPAT SATU ENGINEERING</span> adalah perusahaan 
              yang bergerak di bidang pemasangan kerangka baja dengan reputasi terpercaya
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Mengapa Memilih Kami?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Bergaransi & Terpercaya</h4>
                    <p className="text-slate-600">Setiap pekerjaan kami berikan garansi keamanan dan kualitas terbaik</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Wrench className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Tim Profesional</h4>
                    <p className="text-slate-600">Tenaga ahli berpengalaman dan bersertifikat di bidang konstruksi baja</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Tepat Waktu</h4>
                    <p className="text-slate-600">Komitmen untuk menyelesaikan proyek sesuai jadwal yang ditetapkan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Kualitas Premium</h4>
                    <p className="text-slate-600">Menggunakan material berkualitas tinggi dan standar industri</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Building2 className="h-8 w-8 text-blue-600 mb-4" />
                  <h4 className="font-semibold text-slate-900 mb-2">Alamat Kantor</h4>
                  <p className="text-slate-600">
                    JALAN 3 UGU NO.148<br />
                    Kel. Ujung Gunung Ilir, Kec. Menggala<br />
                    Kab. Tulang Bawang, Prov. Lampung
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Phone className="h-8 w-8 text-blue-600 mb-4" />
                  <h4 className="font-semibold text-slate-900 mb-2">Kontak</h4>
                  <p className="text-slate-600">Telepon: 082310598347</p>
                  <p className="text-slate-600">Email: info@empatsatuengineering.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Layanan Kami</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Solusi lengkap untuk kebutuhan konstruksi dan pemasangan kerangka baja
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Pemasangan Struktur Baja</h3>
              <p className="text-slate-600 mb-4">Instalasi kerangka baja untuk gedung, pabrik, dan konstruksi komersial lainnya</p>
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                Pelajari lebih lanjut <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Wrench className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Fabrikasi Baja</h3>
              <p className="text-slate-600 mb-4">Pembuatan komponen baja custom sesuai kebutuhan proyek konstruksi Anda</p>
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                Pelajari lebih lanjut <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Konsultasi Teknis</h3>
              <p className="text-slate-600 mb-4">Konsultasi dan perencanaan struktur baja yang aman dan efisien</p>
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                Pelajari lebih lanjut <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Portfolio Kami</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hasil karya terbaik yang telah kami kerjakan untuk berbagai klien
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all">
              <img src="/project1.jpg" alt="Proyek 1 - Gedung Komersial" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h3 className="text-xl font-bold mb-2">Gedung Komersial</h3>
                  <p className="text-sm">Pemasangan struktur baja untuk gedung perkantoran modern</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all">
              <img src="/project2.jpg" alt="Proyek 2 - Gudang Industri" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h3 className="text-xl font-bold mb-2">Gudang Industri</h3>
                  <p className="text-sm">Konstruksi baja untuk fasilitas pergudangan besar</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all">
              <img src="/project3.jpg" alt="Proyek 3 - Pabrik" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h3 className="text-xl font-bold mb-2">Pabrik Manufaktur</h3>
                  <p className="text-sm">Struktur baja untuk fasilitas produksi industri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Siap untuk mewujudkan proyek konstruksi baja Anda? Tim kami siap membantu
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-8">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Building2 className="h-6 w-6 text-blue-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Alamat</h4>
                    <p className="text-blue-100">
                      JALAN 3 UGU NO.148<br />
                      Kel. Ujung Gunung Ilir, Kec. Menggala<br />
                      Kab. Tulang Bawang, Prov. Lampung
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Telepon</h4>
                    <p className="text-blue-100">082310598347</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-blue-100">info@empatsatuengineering.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nama Lengkap"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-blue-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-blue-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Nomor Telepon"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-blue-300"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Pesan Anda"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-blue-300"
                  ></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="CV EMPAT SATU ENGINEERING" className="h-8 w-auto" />
                <h3 className="font-bold">CV EMPAT SATU ENGINEERING</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Specialist pemasangan kerangka baja profesional dan terpercaya
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Pemasangan Struktur Baja</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Fabrikasi Baja</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Konsultasi Teknis</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="#about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>082310598347</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@empatsatuengineering.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>Tulang Bawang, Lampung</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 CV EMPAT SATU ENGINEERING. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}