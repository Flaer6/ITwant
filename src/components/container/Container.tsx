interface IProps {
	children: React.ReactNode
}
export default function Container({ children }: IProps) {
	return <div className='max-w-[1500px] px-[20px] mx-auto'>{children}</div>
}
