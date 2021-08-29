import Image from 'next/image';
import Link from 'next/link';

import ButtonPrimary from '../../components/ButtonPrimary';

import imgScreenshot from '../../images/computador.png';

const MainBanner = () => {
	return (
		<>
			<section className='main-banner'>
				<div className='container py-0 py-md-4'>
					<div className='row justify-content-between align-items-center'>
						<div className='row col-12 col-md-6 py-3 py-md-5 m-0'>
							<h1>e-FUT MANAGER</h1>
							<div className='col-12 col-md-7 p-0'>
								<p>
									O jogo de futebol Manager grátis para jogar com os amigos e
									desafiar jogadores do mundo inteiro!
								</p>
								<ButtonPrimary />
							</div>
							<p className='legend my-1 my-md-4 px-0'>
								Jogo feito por BHX Sites sem anúncios, gratuito e não fins
								lucrativos. Divirta-se!
							</p>
						</div>
						<div className='col-12 col-md-6 p-3'>
							<Image
								src={imgScreenshot}
								alt='Screenshot jogo e-fut manager'
								width={538}
								height={315}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default MainBanner;
