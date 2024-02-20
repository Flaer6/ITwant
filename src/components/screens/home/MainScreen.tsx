import Container from '@/components/container/Container'
import Button from '@/components/ui/buttons/Button'
import styles from './mainScreen.module.scss'

export default function MainScreen() {
	return (
		<section className={`${styles.wrapper} relative pb-[25px]`}>
			<Container>
				<div
					className={` pt-[155px] md:min-h-screen z-[2] relative md:pt-[265px]`}
				>
					<h1 className='text-[27px] font-bold leading-[33px] pb-[25px] max-w-[390px] md:text-[24px] xl:text-[34px] xl:leading-[41px] '>
						<span className='text-[#4785EF]'>От кода к карьере:</span> Воплоти
						свои <span className='text-[#4785EF]'>it мечты</span> с нами!
					</h1>
					<Button
						className={`${styles.button} px-[34px] pt-[8px] pb-[6.4px] uppercase text-[11px] hover:text-white xl:px-[55px] xl:py-[11px]`}
						href='#courses'
					>
						К КУРСАМ
					</Button>
				</div>
			</Container>
		</section>
	)
}
