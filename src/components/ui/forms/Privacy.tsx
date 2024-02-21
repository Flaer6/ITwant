function Privacy() {
	return (
		<div className='flex gap-2 items-start'>
			<input
				className='cursor-pointer xl:w-[25px] xl:h-[25px]'
				type='checkbox'
				name='privacy'
				id='privacy'
			/>
			<label
				htmlFor='privacy'
				className='text-[5px] font-light leading-[6px] md:text-[11px] md:leading-[13px] xl:text-[15px] xl:leading-[18px]'
			>
				Нажимая на кнопку, я соглашаюсь на
				<a href='skillbox.ru/privacy_policy.pdf' className='underline'>
					обработку персональных данных
				</a>
				и
				<a href='https://skillbox.ru/terms_of_use.pdf' className='underline'>
					с правилами пользования Платформой
				</a>
			</label>
		</div>
	)
}

export default Privacy
