import Image from 'next/image';

const HeaderSection = (props) => {
	return (
		<>
			<div className='header-section py-0 py-md-5'>
				{props.icon && (
					<Image
						src={props.icon}
						alt={props.description && props.description}
						width={90}
						height={90}
					/>
				)}
				<div className='py-0 py-md-3'>
					{props.title && <h2>{props.title.toUpperCase()}</h2>}
					{props.description && <p>{props.description}</p>}
				</div>
			</div>
		</>
	);
};
export default HeaderSection;
