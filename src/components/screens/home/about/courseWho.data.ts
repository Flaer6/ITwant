interface ICourseWho {
	title: string
	info: string
	imgUrl?: string
	backgroundClass: string
}

export const courseWho: ICourseWho[] = [
	{
		title: 'Школьник',
		info: 'Только начинаешь изучение IT сферы, и погружаешься в мир программирования',
		imgUrl: '/schoolboy.png',
		backgroundClass: 'bg-[#4785EF]',
	},
	{
		title: 'Студент',
		info: 'Хочешь дополнить свое образование, приобрести практические навыки и находить вдохновение в обществе единомышленников',
		imgUrl: '/student.png',
		backgroundClass: 'bg-[#FA8636]',
	},
	{
		title: 'Профи',
		info: 'Ищите обновленные знания, сложные проекты и возможность совершенствовать свои навыки в мире технологий.',
		imgUrl: '/professional.png',
		backgroundClass: 'bg-[#B44EB1]',
	},
]
