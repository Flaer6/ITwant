'use client'
import { useState } from 'react'
import Menu from './Menu'

export default function MobileNav() {
	const [active, isActive] = useState(false)
	return (
		<nav className='xl:hidden'>
			<div className=''>
				<button
					className='w-[40px] h-[40px] z-10 relative'
					onClick={() => isActive(!active)}
				>
					{active ? (
						<img
							src='/closeMenu.svg'
							alt='close'
							className='w-[25px] h-[25px]'
						/>
					) : (
						<img src='/gg_menu-right.svg' alt='open' />
					)}
				</button>
			</div>
			{active ? (
				<Menu className='scale-x-100' />
			) : (
				<Menu className='scale-x-0' />
			)}
		</nav>
	)
}
