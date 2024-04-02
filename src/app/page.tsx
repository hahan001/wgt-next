import Card from '@/components/card';

const imageList = [
	'/images/user-cover-1.png',
	'/images/user-cover-2.png',
	'/images/user-cover-3.png',
	'/images/user-cover-4.png',
];

export default function Home() {
	return (
		<main className='px-2 py-5 sm:px-5 sm:py-8 md:px-10 md:py-10 lg:px-32 xl:px-48.75 xl:py-12'>
			<div className='mb-2 sm:mb-5 md:mb-8 lg:mb-28 xl:mb-12'>
				<h3 className='text-sm font-bold leading-6 text-primary '>Team</h3>
				<p className='text-sm font-bold md:py-2.5 md:text-2xl'>Get Quality Education</p>
				<p className='text-xs font-normal  text-secondary-light md:text-sm'>
					<span>Problems trying to resolve the conflict between </span>
					<br />
					<span>the two major realms of Classical physics: Newtonian mechanics</span>
				</p>
			</div>

			<div className='grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-4 lg:gap-5 xl:gap-7.5'>
				{imageList.map((item) => (
					<div
						key={item}
						className='flex-1 flex-grow-0 basis-[238px]'
					>
						<Card src={item} />
					</div>
				))}
			</div>
		</main>
	);
}
