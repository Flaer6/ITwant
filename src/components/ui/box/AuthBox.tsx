import Button from '../buttons/Button'

interface IProps {
	className?: string
	buttonStyle?: string
	styleSignIn?: string
}

export default function AuthBox({
	className,
	buttonStyle,
	styleSignIn,
}: IProps) {
	return (
		<div className={`${className}`}>
			<Button
				href='#'
				className={`${styleSignIn} ${buttonStyle} xl:w-[200px] pt-[9px] pb-[6.45px] px-[27px]`}
			>
				ВОЙТИ
			</Button>
			<Button
				href='#'
				className={`${buttonStyle} xl:w-[200px] pt-[9px] pb-[6.45px] px-[27px]`}
			>
				РЕГИСТРАЦИЯ
			</Button>
		</div>
	)
}
