import Image from 'next/image';
import ButtonPrimary from '../ButtonPrimary';
import { project } from '../../helpers/Constrains';

import imgLogo from '../../images/logo-efut-manager.png';

const MainMenu = () => {
	return (
		<>
			<section className="main-menu">
				<div className="container py-1">
					<div className="row justify-content-between align-items-center">
						<div className="col-auto">
							<Image
								src={`${project.basePath}${imgLogo.src}`}
								alt="logo e-fut manager"
								width={130}
								height={41}
							/>
						</div>
						<div className="col-auto">
							<ButtonPrimary />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default MainMenu;
