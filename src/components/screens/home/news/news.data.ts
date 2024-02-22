interface INews {
	imgUrl: string
	tagName: string
	tagBg: string
	link: string
}

export const news: INews[] = [
	{
		imgUrl: '/Frame-1-1.png',
		tagName: 'before:content-["#webdesign"]',
		tagBg: 'before:bg-[#FA8636]',
		link: '#',
	},
	{
		imgUrl: '/Rectangle-18.png',
		tagName: 'before:content-["#programming"]',
		tagBg: 'before:bg-[#4785EF]',
		link: '#',
	},
	{
		imgUrl: '/Rectangle-20.png',
		tagName: 'before:content-["#gamedev"]',
		tagBg: 'before:bg-[#B44EB1]',
		link: '#',
	},
]
