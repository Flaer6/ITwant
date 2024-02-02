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
			<Button className={`${buttonStyle} ${styleSignIn} xl:w-[200px]`}>
				ВОЙТИ
			</Button>
			<Button className={`${buttonStyle} xl:w-[200px]`}>РЕГИСТРАЦИЯ</Button>
		</div>
	)
}
