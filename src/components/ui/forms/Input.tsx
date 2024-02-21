interface IInput {
	placeholder: string
	className?: string
	type: string
}

function Input({ placeholder, className, type }: IInput) {
	return (
		<input
			className={`${className} outline-none px-[20px] py-[5px] rounded-[878px] border border-solid border-white placeholder:text-[13px] placeholder:font-light placeholder:italic md:px-[36px] block xl:py-[18px] xl:placeholder:text-[16px]`}
			type={type}
			placeholder={placeholder}
		/>
	)
}

export default Input
