import Container from '@/components/container/Container'
import BlogSlider from '@/components/slides/blogSlides/BlogSlider'

function Blog() {
	return (
		<section className='pt-[31px] lg:pt-[80px]' id='blog'>
			<Container>
				<div className=''>
					<h2>почему мы?</h2>
					<BlogSlider />
				</div>
			</Container>
		</section>
	)
}

export default Blog
