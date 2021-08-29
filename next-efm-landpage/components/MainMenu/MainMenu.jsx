import Image from 'next/image';
import Link from 'next/link';
import ButtonPrimary from '../../components/ButtonPrimary';

import imgLogo from '../../images/logo-efut-manager.png';

const MainMenu = () => {
	return (
		<>
			<section className='main-menu'>
				<div className='container py-1'>
					<div className='row justify-content-between align-items-center'>
						<div className='col-auto'>
							<Image
								src={imgLogo}
								alt='logo e-fut manager'
								width={130}
								height={41}
							/>
						</div>
						<div className='col-auto'>
							<ButtonPrimary />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default MainMenu;
