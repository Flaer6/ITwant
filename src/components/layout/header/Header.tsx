import Link from 'next/link'
import Container from '../../container/Container'
import DesktopMenu from './DesktopMenu'
import MobileNav from './MobileNav'

export default function Header() {
	return (
		<header className='h-[100px] bg-[#150E3C] backdrop-blur-[44px] relative pt-[40px] min-[1180px]:pt-[53px]'>
			<Container>
				<div className='flex items-center justify-between xl:justify-stretch xl:gap-[73px]'>
					<Link href='/' className=''>
						<img
							className='w-[85px] h-[36px] md:w-[185px] md:h-[75px]'
							src='/logo.svg'
							alt='ITwant'
						/>
					</Link>
					<MobileNav />
					<DesktopMenu />
				</div>
			</Container>
		</header>
	)
}
