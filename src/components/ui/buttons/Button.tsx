import { ReactNode } from 'react'

interface IProps {
	className: string
	children: ReactNode
	href: string
}
export default function Button({ children, className, href }: IProps) {
	return (
		<a
			className={`${className} bg-[#4785EF] rounded-[60px] text-[16px] font-medium uppercase transition-all hover:bg-transparent hover:text-[#150E3C] hover:border hover:border-solid hover:border-[#4785EF] xl:py-[10px] xl:px-[35px] text-center cursor-pointer`}
			href={href}
		>
			{children}
		</a>
	)
}
