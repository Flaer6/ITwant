import Container from '@/components/container/Container'
import Logo from '@/components/ui/Logo'
import List from './List'
import * as data from './footer.data'

function Footer() {
	return (
		<footer>
			<Container>
				<div className=''>
					<div className='flex items-start justify-between gap-[25px]'>
						<div className=''>
							<Logo />
						</div>
						<div className=''>
							<List title='О НАС'>
								{data.about.map((item, index) => (
									<li
										key={index}
										className='text-[14px] xl:text-[20px] mb-[10px]'
									>
										<a href={item.link}>{item.name}</a>
									</li>
								))}
							</List>
						</div>
						<div className=''>
							<List title='УСЛОВИЯ'>
								{data.conditions.map((item, index) => (
									<li
										key={index}
										className='text-[14px] lg:text-[20px] mb-[10px]'
									>
										<a href={item.link}>{item.name}</a>
									</li>
								))}
							</List>
						</div>
					</div>
					<div className='text-center pt-[6px]'>
						<ul className='font-semibold '>
							<li className='flex flex-col items-center gap-[4px]'>
								<a href='tel:+79676899050'>+7 (967) 689-90-50</a>
							</li>
							<li className=''>
								<a href='mailto:itwant@mail.ru'>itwant@mail.ru</a>
							</li>
							<li className='flex justify-center gap-[8px] items-center'>
								<a href='#'>
									<img src='/vk.svg' alt='vk' />
								</a>
								<a href='#'>
									<img src='tg.svg' alt='tg' />
								</a>
							</li>
						</ul>
					</div>
					<div className='mt-[7px] py-[14px] text-center border-t border-solid border-[#4785EF54] text-[10px] tracking-[5.5%]'>
						<p>Все права защищены.</p>
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
