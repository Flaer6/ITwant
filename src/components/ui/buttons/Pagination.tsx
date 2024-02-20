interface IPagination {
	className: string
	classNameImg?: string
}

function Pagination({ className, classNameImg }: IPagination) {
	return (
		<div className={`${className} inline-block absolute z-10 cursor-pointer`}>
			<img
				src='/arrow-pagination.svg'
				alt='arrow'
				className={`${classNameImg} w-[40px] h-[40px]`}
			/>
		</div>
	)
}

export default Pagination
