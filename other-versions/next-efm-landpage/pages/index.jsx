import Head from 'next/head';

import imgIconEfutXl from '../images/icon-efut-xl.png';
import imgFeat1 from '../images/f1.jpg';
import imgFeat2 from '../images/f2.jpg';
import imgFeat3 from '../images/f3.jpg';
import imgFeat4 from '../images/f4.jpg';
import imgBannerScreenshots from '../images/banner-screenshots.png';
import imgCardsPlayers from '../images/cards.png';

import backgroundSecondaryCard from '../images/field.jpg';
import backgroundSecondaryPattern from '../images/banner-secondary.jpg';

import BannerSecondary from '../components/BannerSecondary';
import MainMenu from '../components/MainMenu';

import MainBanner from '../components/MainBanner';
import CardMid from '../components/CardMid';
import HeaderSection from '../components/HeaderSection';
import MediaGallery from '../components/MediaGallery';
import Footer from '../components/Footer';
import Ribbon from '../components/Ribbon';

export default function Home() {
	return (
		<div>
			<Head>
				<title>E-Fut Manage 2021</title>
				<meta name='description' content='E-Fut Manage 2021 Online Game' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<MainMenu />

				<MainBanner />

				<section className='container py-3 py-md-4'>
					<HeaderSection title='Treine o time do coração' />

					<div className='row justify-content-center justify-content-md-between pb-0 pb-md-5'>
						<div className='col-10 col-md-3 pb-3 pb-md-0'>
							<CardMid
								cover={imgFeat1}
								title='VÁRIAS LIGAS'
								description='Treine um time e participe de ligas como Libertadores, Copa do Brasil e Mundial.'
							/>
						</div>
						<div className='col-10 col-md-3 pb-3 pb-md-0'>
							<CardMid
								cover={imgFeat4}
								title='JOGO GRÁTIS'
								description='Jogue de qualquer dispositivo pelo navegador e de graça. Partidas todos os dias.'
							/>
						</div>
						<div className='col-10 col-md-3 pb-3 pb-md-0'>
							<CardMid
								cover={imgFeat3}
								title='PARTIDAS ONLINE'
								description='Escale sua equipe, escolha sa formação e tática para os jogos em tempo real todos os dias.'
							/>
						</div>
						<div className='col-10 col-md-3 pb-0 pb-md-0'>
							<CardMid
								cover={imgFeat2}
								title='+100 EQUIPES'
								description='Treine equipes de todos os mundos e seja um campeão em várias ligas.'
							/>
						</div>
					</div>
				</section>

				<BannerSecondary
					title='ESCALE E COMPRE JOGADORES COM DIFERENTES NÍVEIS E CARACTERÍSTICAS'
					description='No e-fut manager você tem opções variadas de jogadores para compor sua equipe. Jogadores de várias classes, especiais e lendários para que sua equipe se destaque.'
					image={imgCardsPlayers}
					background={backgroundSecondaryCard}
					type='BANNER_IMAGE'
				/>

				<section className='container py-3 py-md-4'>
					<HeaderSection
						icon={imgIconEfutXl}
						title='Jogos e-fut manager'
						description='Jogo de futebol de técnico com várias ligas, jogadores e times sulamericanas e europeus.'
					/>
				</section>
				<MediaGallery />

				<BannerSecondary
					title='JOGO MULTIPLAYER ONLINE GRÁTIS
          DE TÉCNICO DE FUTEBOL'
					background={backgroundSecondaryPattern}
					image={imgBannerScreenshots}
					type='BANNER_MUTED'
				/>

				<Footer />

				<Ribbon />
			</main>
		</div>
	);
}
