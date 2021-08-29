import Link from 'next/link';

interface IProps {
	list: {
		title: string;
		url: string;
	}[];
}

const ListClean = ({ list }: IProps) => {
	return (
		<>
			{list && (
				<ul className="list-clean">
					{list.map((link) => {
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
