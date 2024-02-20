import AuthBox from '@/components/ui/box/AuthBox'
import Link from 'next/link'
import { links } from './items.data'

export default function Menu({ className }: { className?: string }) {
	return (
		<div
			className={`h-dvh w-[85%] bg-[#F5F5F5] rounded-l-[44px] absolute top-0 -right-0 text-center ${className} transition-all origin-right`}
		>
			<ul className='pt-[240px]'>
				{links.map(link => (
					<li key={link.link}>
						<Link
							href={link.link}
							className='text-[#150E3C] text-[20px] uppercase mb-[50px] inline-block transition-all hover:underline hover:text-black p-1'
						>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
			<AuthBox className='inline-flex flex-col gap-[13px]' />
		</div>
	)
}
