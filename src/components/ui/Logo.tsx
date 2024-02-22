import Link from 'next/link'

function Logo() {
	return (
		<Link href='/' className=''>
			<img
				className='w-[85px] h-[36px] md:w-[185px] md:h-[75px]'
				src='/logo.svg'
				alt='ITwant'
			/>
		</Link>
	)
}

export default Logo
