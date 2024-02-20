import AuthBox from '@/components/ui/box/AuthBox'
import Link from 'next/link'
import { links } from './items.data'

export default function DesktopMenu() {
	return (
		<nav className='max-xl:hidden flex justify-between items-center w-full'>
			<ul className='flex items-center gap-[47px]'>
				{links.map(item => (
					<li key={item.link}>
						<Link
							className='text-[20px] font-bold transition-all hover:underline'
							href={item.link}
						>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
			<AuthBox
				className='flex gap-[25px]'
				buttonStyle='hover:text-[#f5f5f5]'
				styleSignIn='bg-transparent border border-[#4785EF] hover:bg-[#4785EF]'
			/>
		</nav>
	)
}
