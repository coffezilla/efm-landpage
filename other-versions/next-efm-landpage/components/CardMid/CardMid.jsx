import Image from 'next/image';

const CardMid = (props) => {
	return (
		<>
			<div className='card-mid'>
				<div className='card-mid__cover'>
					{props.cover && (
						<Image
							src={props.cover}
							alt={props.description && props.description}
							width={400}
							height={346}
						/>
					)}
				</div>
				<div className='card-mid__content'>
					{props.title && <h3>{props.title.toUpperCase()}</h3>}
					{props.description && <p>{props.description}</p>}
				</div>
			</div>
		</>
	);
};
export default CardMid;
