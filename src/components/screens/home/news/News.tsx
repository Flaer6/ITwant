import Container from '@/components/container/Container'
import NewsList from './NewsList'

function News() {
	return (
		<section className='pt-[31px] pb-[70px] xl:pt-[100px]'>
			<Container>
				<div className=''>
					<h2>Новости itwant</h2>
					<NewsList />
				</div>
			</Container>
		</section>
	)
}

export default News
