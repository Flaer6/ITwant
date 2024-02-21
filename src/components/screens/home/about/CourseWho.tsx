import styles from './about.module.scss'
import { courseWho } from './courseWho.data'

function CourseWho() {
	return (
		<div className='flex flex-col gap-x-[20px] gap-y-[31px] justify-center md:flex-row md:flex-wrap xl:gap-x-[40px] xl:justify-between'>
			{courseWho.map((item, index) => (
				<div
					key={index}
					className={`${item.backgroundClass} ${styles.box} rounded-[37px] py-[30px] pl-[37px] pr-[10px] flex items-start justify-between gap-1 md:max-w-[345px] md:min-w-[306px] md:rounded-[60px] xl:flex-col xl:gap-[27px] xl:max-w-[368px] xl:items-end`}
				>
					<div className=''>
						<h4 className='text-[15px] md:text-[20px] xl:text-[32px] font-bold -tracking-[4%] pb-[15px] xl:pb-[64px]'>
							{item.title}
						</h4>
						<p>{item.info}</p>
					</div>
					<div className=''>
						<img
							src={item.imgUrl}
							alt={item.title}
							className='min-w-[82px] max-w-none md:min-w-[104px]'
						/>
					</div>
				</div>
			))}
		</div>
	)
}

export default CourseWho
