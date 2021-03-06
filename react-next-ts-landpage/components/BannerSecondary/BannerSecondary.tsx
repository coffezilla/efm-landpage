import React from 'react';

import ButtonPrimary from '../ButtonPrimary';

interface IProps {
	type: 'BANNER_IMAGE' | 'BANNER_MUTED';
	background: any;
	image?: any;
	title: string;
	description?: string;
}

const BannerSecondary = ({ type, background, image, title, description }: IProps) => {
	if (type === 'BANNER_IMAGE') {
		return (
			<>
				<section
					className="banner-secondary banner-secondary--cover"
					style={
						background && {
							backgroundImage: `url(${background})`,
						}
					}
				>
					<div className="container py-3 py-md-5">
						<div className="row justify-content-between align-items-center">
							{image && (
								<div className="col-12 col-md-6 p-5 ">
									<img src={`${image}`} alt="E-fut Manager Screenshot" />
								</div>
							)}
							<div className="col-12 col-md-6">
								<div className="banner-secondary__description py-3 py-md-0">
									{title && <h2>{title.toUpperCase()}</h2>}
									{description && <p>{description}</p>}
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
			className="banner-secondary"
			style={
				background && {
					backgroundImage: `url(${background})`,
				}
			}
		>
			<div className="container py-3 py-md-0">
				<div className="row justify-content-between align-items-center">
					<div className="col-12 col-lg-5 py-0 py-md-0">
						<div className="banner-secondary__description py-3 py-md-5">
							{title && <h2>{title.toUpperCase()}</h2>}
							{description && <p>{description}</p>}
							<ButtonPrimary />
						</div>
					</div>
					<div className="col-6 col-md-auto col-image p-0 d-none d-lg-flex">
						{image && <img src={`${image}`} alt={title} />}
					</div>
				</div>
			</div>
		</section>
	);
};
export default BannerSecondary;
