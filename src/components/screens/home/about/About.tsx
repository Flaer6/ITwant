import Container from '@/components/container/Container'
import CourseWho from './CourseWho'

function About() {
	return (
		<section
			className='pt-[50px] pb-[35px] md:pb-[60px] xl:pb-[80px]'
			id='about'
		>
			<Container>
				<div className=''>
					<h2>НАША ПЛАТФОРМА ДЛЯ ТЕБЯ, ЕСЛИ ТЫ:</h2>
					<CourseWho />
				</div>
			</Container>
		</section>
	)
}

export default About
