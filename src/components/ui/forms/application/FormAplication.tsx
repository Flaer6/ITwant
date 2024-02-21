import Button from '../../buttons/Button'
import Input from '../Input'
import Privacy from '../Privacy'

function FormApplication() {
	return (
		<form action='#' className=''>
			<div className='flex flex-col gap-[6px] md:gap-[12px] xl:gap-[30px]'>
				<Input
					type='text'
					placeholder='Введите ваше имя'
					className='bg-[#D9D9D9]'
				/>
				<Input
					type='text'
					placeholder='Введите ваше E-mail'
					className='bg-[#D9D9D9]'
				/>
				<Button
					href='#'
					className='uppercase px-[25px] py-[7px] hover:bg-white xl:text-[24px] xl:py-[20px]'
				>
					СВЯЗАТЬСЯ
				</Button>
			</div>
			<div className='pt-[11px]'>
				<Privacy />
			</div>
		</form>
	)
}

export default FormApplication
