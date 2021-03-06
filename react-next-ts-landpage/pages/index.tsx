import type { NextPage } from 'next';
import Head from 'next/head';

import BannerSecondary from '../components/BannerSecondary';
import MainMenu from '../components/MainMenu';

import MainBanner from '../components/MainBanner';
import CardMid from '../components/CardMid';
import HeaderSection from '../components/HeaderSection';
import MediaGallery from '../components/MediaGallery';
import Footer from '../components/Footer';
import Ribbon from '../components/Ribbon';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>E-Fut Manager - Jogo Online GRÁTIS técnico futebol </title>
				<meta
					name="description"
					content="E-Fut Manager Online Game de técnico de futebol com times brasileiros e europeus. Conquiste a Libertadores, a Champions League e o mundial de clubes como técnico de futebol online."
				/>
				<link rel="icon" href="/landpage/favicon.ico" />
			</Head>
			<main>
				<MainMenu />

				<MainBanner />

				<section className="container py-3 py-md-4">
					<HeaderSection title="Treine o time do coração" />

					<div className="row justify-content-center justify-content-md-between pb-0 pb-md-5">
						<div className="col-10 col-md-3 pb-3 pb-md-0">
							<CardMid
								cover="/landpage/images/f1.jpg"
								title="VÁRIAS LIGAS"
								description="Treine um time e participe de ligas como Libertadores, Copa do Brasil e Mundial."
							/>
						</div>
						<div className="col-10 col-md-3 pb-3 pb-md-0">
							<CardMid
								cover="/landpage/images/f4.jpg"
								title="JOGO GRÁTIS"
								description="Jogue de qualquer dispositivo pelo navegador e de graça. Partidas todos os dias."
							/>
						</div>
						<div className="col-10 col-md-3 pb-3 pb-md-0">
							<CardMid
								cover="/landpage/images/f3.jpg"
								title="PARTIDAS ONLINE"
								description="Escale sua equipe, escolha sa formação e tática para os jogos em tempo real todos os dias."
							/>
						</div>
						<div className="col-10 col-md-3 pb-0 pb-md-0">
							<CardMid
								cover="/landpage/images/f2.jpg"
								title="+100 EQUIPES"
								description="Treine equipes de todos os mundos e seja um campeão em várias ligas."
							/>
						</div>
					</div>
				</section>

				<BannerSecondary
					title="ESCALE E COMPRE JOGADORES COM DIFERENTES NÍVEIS E CARACTERÍSTICAS"
					description="No e-fut manager você tem opções variadas de jogadores para compor sua equipe. Jogadores de várias classes, especiais e lendários para que sua equipe se destaque."
					image="/landpage/images/cards.png"
					background="/landpage/images/field.jpg"
					type="BANNER_IMAGE"
				/>

				<section className="container py-3 py-md-4">
					<HeaderSection
						icon="/landpage/images/icon-efut-xl.png"
						title="Jogos e-fut manager"
						description="Jogo de futebol de técnico com várias ligas, jogadores e times sulamericanas e europeus."
					/>
				</section>
				<MediaGallery />

				<BannerSecondary
					title="JOGO MULTIPLAYER ONLINE GRÁTIS DE TÉCNICO DE FUTEBOL"
					background="/landpage/images/banner-secondary.jpg"
					image="/landpage/images/banner-screenshots.png"
					type="BANNER_MUTED"
				/>

				<Footer />

				<Ribbon />
			</main>
		</div>
	);
};

export default Home;
