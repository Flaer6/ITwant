'use client'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { blogs } from './blogs.data'

function BlogSlider() {
	return (
		<div className='relative'>
			<Swiper
				slidesPerView={1}
				modules={[Pagination]}
				spaceBetween={20}
				grabCursor={true}
				pagination={{
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					bulletElement: 'bg-[#693F8985]',
					bulletActiveClass: 'bg-[#693F89BD]',
				}}
			>
				{blogs.map((item, index) => (
					<SwiperSlide
						key={index}
						className='bg-[#391B7A] rounded-[37px] py-[28px] px-[24px] md:flex md:items-center md:justify-betwee lg:bg-transparent lg:rounded-none lg:gap-[57px]'
					>
						<div className='lg:bg-[#391B7A] lg:rounded-[37px] lg:px-[50px] lg:pb-[50px] lg:pt-[40px] lg:max-w-[580px]'>
							<h3 className='font-bold mb-[7px] md:text-[20px] md:mb-[21px] md:leading-[24px]'>
								{item.title}
							</h3>
							<p className='md:max-w-[280px] lg:max-w-none'>{item.info}</p>
						</div>
						<div className='max-md:hidden'>
							<img src={item.imgUrl} alt={item.title} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className='absolute -bottom-[35px] left-0 w-full md:bottom-0 lg:bottom-[30px]'>
				<div className='swiper-pagination'></div>
			</div>
		</div>
	)
}

export default BlogSlider
