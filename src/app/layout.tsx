import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CV EMPAT SATU ENGINEERING - Specialist Pemasangan Kerangka Baja Profesional',
  description: 'CV EMPAT SATU ENGINEERING adalah perusahaan profesional yang bergerak di bidang pemasangan kerangka baja, fabrikasi, dan konstruksi struktur baja di Lampung.',
  keywords: 'CV EMPAT SATU ENGINEERING, kerangka baja, konstruksi baja, pemasangan baja, fabrikasi baja, struktur baja, kontraktor baja, Lampung, Tulang Bawang',
  authors: [{ name: 'CV EMPAT SATU ENGINEERING' }],
  openGraph: {
    title: 'CV EMPAT SATU ENGINEERING - Specialist Pemasangan Kerangka Baja',
    description: 'Solusi terpercaya untuk kebutuhan konstruksi baja Anda. Pengalaman bertahun-tahun dengan tim ahli profesional.',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1024,
        height: 1024,
        alt: 'CV EMPAT SATU ENGINEERING Logo',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="goe7lo8307kq6fdgr1zns333rx0myr" />
      </head>
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased bg-background text-foreground font-poppins`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
