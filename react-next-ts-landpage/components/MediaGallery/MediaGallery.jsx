import React, { useState, useCallback } from 'react';

import ImageViewer from 'react-simple-image-viewer';

const MediaGallery = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [isViewerOpen, setIsViewerOpen] = useState(false);
	const images = [
		'/landpage/images/g1.jpg',
		'/landpage/images/g2.jpg',
		'/landpage/images/g3.jpg',
		'/landpage/images/g4.jpg',
		'/landpage/images/g5.jpg',
		'/landpage/images/g6.jpg',
		'/landpage/images/g7.jpg',
		'/landpage/images/g8.jpg',
	];

	const openImageViewer = useCallback((index) => {
		setCurrentImage(index);
		setIsViewerOpen(true);
	}, []);

	const closeImageViewer = () => {
		setCurrentImage(0);
		setIsViewerOpen(false);
	};
	return (
		<>
			<div className="media-gallery">
				<div className="container py-3 py-md-5">
					<div className="row align-items-center">
						<div className="col-12">
							<div className="row mt-3">
								{images.map((src, index) => (
									<div className="col-6 col-md-3 mb-3 media-gallery__item" key={src}>
										<img
											src={`${src}`}
											alt="Screenshot jogo e-fut manager"
											onClick={() => openImageViewer(index)}
											style={{ margin: '2px' }}
											width={270}
											height={173}
										/>
									</div>
								))}

								{isViewerOpen && (
									<>
										{console.log('walk', images)}
										<ImageViewer
											src={images}
											currentIndex={currentImage}
											onClose={closeImageViewer}
											disableScroll={false}
											backgroundStyle={{
												backgroundColor: 'rgba(0,0,0,0.9)',
											}}
										/>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default MediaGallery;
