import React, { useState, useCallback } from 'react';

import ImageViewer from 'react-simple-image-viewer';
import { project } from '../../helpers/Constrains';

import imgPhotoGallery1 from '../../images/g1.jpg';
import imgPhotoGallery2 from '../../images/g2.jpg';
import imgPhotoGallery3 from '../../images/g3.jpg';
import imgPhotoGallery4 from '../../images/g4.jpg';
import imgPhotoGallery5 from '../../images/g5.jpg';
import imgPhotoGallery6 from '../../images/g6.jpg';
import imgPhotoGallery7 from '../../images/g7.jpg';
import imgPhotoGallery8 from '../../images/g8.jpg';

const MediaGallery = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [isViewerOpen, setIsViewerOpen] = useState(false);
	const images = [
		project.basePath + imgPhotoGallery1.src,
		project.basePath + imgPhotoGallery2.src,
		project.basePath + imgPhotoGallery3.src,
		project.basePath + imgPhotoGallery4.src,
		project.basePath + imgPhotoGallery5.src,
		project.basePath + imgPhotoGallery6.src,
		project.basePath + imgPhotoGallery7.src,
		project.basePath + imgPhotoGallery8.src,
	];

	const openImageViewer = useCallback((index) => {
		setCurrentImage(index);
		setIsViewerOpen(true);
		console.log('liberatdores', imgPhotoGallery1);
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
