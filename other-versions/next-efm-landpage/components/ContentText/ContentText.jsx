import Link from 'next/link';

const ContentText = (props) => {
	return (
		<>
			{props.children && (
				<section className='content-text'>
					<div className='container'>
						<div className='row'>
							<div className='col-12 py-3 py-md-5'>{props.children}</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
};
export default ContentText;
