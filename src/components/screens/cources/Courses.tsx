import Container from '@/components/container/Container'
import CoursesSlider from '@/components/slides/coursesSlides/CoursesSlider'
import styles from './courses.module.scss'

function Courses() {
	return (
		<section className={`${styles.wrapper} pt-[30px]`} id='courses'>
			<Container>
				<div className=''>
					<h2 className='z-[1] relative'>НАШИ КУРСЫ</h2>
					<CoursesSlider />
				</div>
			</Container>
		</section>
	)
}

export default Courses
