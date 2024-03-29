import MainScreen from '@/components/screens/home/MainScreen'
import About from '@/components/screens/home/about/About'
import Application from '@/components/screens/home/application/Application'
import Blog from '@/components/screens/home/blog/Blog'
import Courses from '@/components/screens/home/courses/Courses'
import News from '@/components/screens/home/news/News'

export default function Home() {
	return (
		<main className=''>
			<MainScreen />
			<Courses />
			<Blog />
			<About />
			<Application />
			<News />
		</main>
	)
}
