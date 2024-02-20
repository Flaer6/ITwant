import Blog from '@/components/screens/blog/Blog'
import Courses from '@/components/screens/cources/Courses'
import MainScreen from '@/components/screens/home/MainScreen'

export default function Home() {
	return (
		<main className=''>
			<MainScreen />
			<Courses />
			<Blog />
		</main>
	)
}
