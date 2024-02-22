import { ReactNode } from 'react'

function List({ title, children }: { title: string; children: ReactNode }) {
	return (
		<ul className='text-center'>
			<li className='uppercase font-medium text-[13px] pb-[5.5px] mb-[11.5px] border-b border-solid border-[#558AF1]'>
				{title}
			</li>
			{children}
		</ul>
	)
}

export default List
