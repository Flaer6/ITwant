interface ISlide {
	title: string
	info: string
	imgUrl?: string
}

export const blogs: ISlide[] = [
	{
		title: 'Обучение, адаптированное для школьников',
		info: 'Мы понимаем, что старт в мире IT может быть вызовом для школьников. Поэтому мы разработали уникальные программы, специально адаптированные для школьников. Наши курсы представляют сложные концепции IT в доступной форме.',
		imgUrl: '/blogImg.png',
	},
	{
		title: 'Lorem ipsum dolor sit.',
		info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est iure nemo at blanditiis possimus ipsam eius enim, dolorem architecto praesentium nihil sed commodi, quas dolor reiciendis iste temporibus maxime corporis.',
		imgUrl: '/blogImg.png',
	},
	{
		title: 'Lorem ipsum dolor sit amet.',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iusto voluptatibus, pariatur atque quae consectetur minima neque sint excepturi facere error commodi consequatur cumque accusantium ab quis optio ea?',
		imgUrl: '/blogImg.png',
	},
]
