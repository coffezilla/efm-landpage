// import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';

const ListClean = (props) => {
	return (
		<>
			{props.list && (
				<ul className='list-clean'>
					{props.list.map((link) => {
						return (
							<li key={link.title}>
								<Link href={link.url}>{link.title}</Link>
							</li>
						);
					})}
				</ul>
			)}
		</>
	);
};
export default ListClean;
