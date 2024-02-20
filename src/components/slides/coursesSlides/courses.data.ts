interface ICourses {
	name: string
	avatarUrl: string
	link: string
	styleBg: string
}

export const coursesData: ICourses[] = [
	{
		name: 'Python базовый',
		avatarUrl: '/python.png',
		link: '/python',
		styleBg: 'bg-[#4785EF]',
	},
	{
		name: 'C# от новичка до профессионала',
		avatarUrl: '/c-sharp.png',
		link: '/CSharp',
		styleBg: 'bg-[#B44EB1]',
	},
	{
		name: 'Web-разработка',
		avatarUrl: '/js.png',
		link: '/web',
		styleBg: 'bg-[#FA8636]',
	},
]
