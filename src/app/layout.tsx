import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './global.scss'

const montserrat = Montserrat({
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	weight: ['300', '400', '500', '600', '700'],
	style: ['italic', 'normal'],
	variable: '--font-montserrat',
})

export const metadata: Metadata = {
	title: 'ITwant',
	description: 'IT Company',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
