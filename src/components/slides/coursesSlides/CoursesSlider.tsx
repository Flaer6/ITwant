'use client'
import { coursesData } from '@/components/slides/coursesSlides/courses.data'
import Link from 'next/link'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Pagination from '../../ui/buttons/Pagination'
import styles from './slides.module.scss'

function CoursesSlider() {
	return (
		<div className='relative'>
			<Swiper
				navigation={{
					prevEl: '.prev',
					nextEl: '.next',
				}}
				breakpoints={{
					575: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 3,
					},
				}}
				modules={[Navigation]}
				slidesPerView={1}
				spaceBetween={20}
				loop={true}
			>
				{coursesData.map(course => (
					<SwiperSlide
						key={course.link}
						className={`${course.styleBg} px-[36px] pt-[30px] pb-[46px] rounded-[37px]`}
					>
						<div className='flex justify-between items-center gap-[15px]'>
							<p className='uppercase font-bold md:text-[15px]'>
								{course.name}
							</p>
							<img
								className='w-[50px] h-[50px]'
								src={course.avatarUrl}
								alt={course.name}
							/>
						</div>
						<Link
							href={course.link}
							className={`${styles.link} text-[9px] font-bold mt-[10px] uppercase md:text-[14px]`}
						>
							Подробнее
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
			<Pagination
				className='prev top-[50px] left-[-17px]'
				classNameImg='-rotate-180'
			/>
			<Pagination className='next top-[50px] right-[-17px]' />
		</div>
	)
}

export default CoursesSlider
