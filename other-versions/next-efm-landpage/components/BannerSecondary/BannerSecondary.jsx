import Image from 'next/image';

import ButtonPrimary from '../../components/ButtonPrimary';

const BannerSecondary = (props) => {
	if (props.type === 'BANNER_IMAGE') {
		return (
			<>
				<section
					className='banner-secondary'
					style={
						props.background && {
							backgroundImage: `url(${props.background.src})`,
						}
					}
				>
					<div className='container py-3 py-md-5'>
						<div className='row justify-content-between align-items-center'>
							{props.image && (
								<div className='col-12 col-md-6 p-5 '>
									<Image
										src={props.image}
										alt={props.title && props.title}
										width={496}
										height={393}
									/>
								</div>
							)}
							<div className='col-12 col-md-6'>
								<div className='banner-secondary__description py-3 py-md-0'>
									{props.title && <h2>{props.title.toUpperCase()}</h2>}
									{props.description && <p>{props.description}</p>}
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
	return (
		<section
			className='banner-secondary'
			style={
				props.background && {
					backgroundImage: `url(${props.background.src})`,
				}
			}
		>
			<div className='container py-3 py-md-0'>
				<div className='row justify-content-between align-items-center'>
					<div className='col-12 col-lg-5 py-0 py-md-0'>
						<div className='banner-secondary__description py-3 py-md-5'>
							{props.title && <h2>{props.title.toUpperCase()}</h2>}
							{props.description && <p>{props.description}</p>}
							<ButtonPrimary />
						</div>
					</div>
					<div className='col-6 col-md-auto col-image p-0 d-none d-lg-flex'>
						{props.image && (
							<Image
								src={props.image}
								alt={props.title && props.title}
								width={542}
								height={490}
							/>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
export default BannerSecondary;
