import Logo from '@/components/ui/Logo'
import Container from '../../container/Container'
import DesktopMenu from './DesktopMenu'
import MobileNav from './MobileNav'

export default function Header() {
	return (
		<header className='z-[11] h-[100px] bg-[#150E3C] backdrop-blur-[44px] absolute top-0 left-0 right-0 pt-[40px] min-[1180px]:pt-[53px] md:bg-transparent min-[1180px]:h-auto'>
			<Container>
				<div className='flex items-center justify-between xl:justify-stretch xl:gap-[73px]'>
					<Logo />
					<MobileNav />
					<DesktopMenu />
				</div>
			</Container>
		</header>
	)
}
