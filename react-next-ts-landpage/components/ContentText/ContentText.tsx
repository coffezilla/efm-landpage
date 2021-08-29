import React from 'react';

interface IProps {
	children: React.ReactNode;
}

const ContentText = ({ children }: IProps) => {
	return (
		<>
			{children && (
				<section className="content-text">
					<div className="container">
						<div className="row">
							<div className="col-12 py-3 py-md-5">{children}</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
};
export default ContentText;
