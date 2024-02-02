import { ReactNode } from 'react'

interface IProps {
	className?: string
	children: ReactNode
}
export default function Button({ children, className }: IProps) {
	return (
		<button
			className={`${className} bg-[#4785EF] rounded-[60px] pt-[9px] pb-[6.45px] px-[27px] text-[16px] font-medium uppercase transition-all hover:bg-transparent hover:text-[#150E3C] hover:border hover:border-solid hover:border-[#4785EF] xl:py-[10px] xl:px-[35px]`}
		>
			{children}
		</button>
	)
}
