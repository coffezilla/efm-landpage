import type { NextPage } from 'next';

import Head from 'next/head';
import Link from 'next/link';

import MainMenu from '../../components/MainMenu';
import ContentText from '../../components/ContentText';

const Policy: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Política de privacidade | E-Fut Manager</title>
				<meta
					name="description"
					content="Política de privacidade do jogo onine E-fut Manager. É importante ler os nossa política de privacidade pois nosso jogo é gratuito e sem fins lucrativos"
				/>
				<link rel="icon" href="/efut-manager-landpage/favicon.ico" />
			</Head>
			<main>
				<MainMenu />

				<section className="breadcrumb">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<Link href="./">
									<a>Voltar a tela inicial</a>
								</Link>
							</div>
						</div>
					</div>
				</section>
				<ContentText>
					<h1>Política de privacidade</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, aliquid aspernatur.
						Soluta!
					</p>
				</ContentText>
			</main>
		</div>
	);
};

export default Policy;
