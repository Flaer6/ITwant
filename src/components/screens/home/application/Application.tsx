import Container from '@/components/container/Container'
import FormApplication from '@/components/ui/forms/application/FormAplication'

function Application() {
	return (
		<section className='py-[45px] bg-[#B44EB1] md:py-[85px] xl:py-[120px]'>
			<Container>
				<div className='flex justify-between items-center gap-1 md:gap-[60px]'>
					<div className=''>
						<h3 className='text-[16px] font-semibold leading-[20px] md:text-[32px] md:leading-[39px] xl:text-[48px] xl:leading-[59px]'>
							ОСТАВЬТЕ СВОИ КОНТАКТЫ И МЫ ПОМОЖЕМ ВАМ
						</h3>
					</div>
					<div className=' '>
						<FormApplication />
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Application
