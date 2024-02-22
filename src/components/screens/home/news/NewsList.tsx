import { news } from './news.data'

function NewsList() {
	return (
		<div className='flex flex-col gap-[7px] md:flex-row md:justify-between xl:gap-[20px]'>
			{news.map((item, index) => (
				<div
					key={index}
					className={`relative ${item.tagName} ${item.tagBg} before:absolute before:top-[13px] before:left-[25px] before:py-[2px] before:px-[4px] before:rounded-[70px] before:text-[5px] before:font-semibold before:text-[rgb(5,12,28)] md:before:text-[10px] w-full`}
				>
					<a href={item.link} className='block hover:block'>
						<img src={item.imgUrl} alt={item.tagName} />
					</a>
				</div>
			))}
		</div>
	)
}

export default NewsList
