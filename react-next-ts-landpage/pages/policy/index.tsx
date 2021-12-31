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
				<link rel="icon" href="/landpage/favicon.ico" />
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
						Utilizamos o Google Analytics para administrar os acessos e gerar relatórios de acesso
						dinâmico. Este relatório nos ajuda a controlar a estabilidade do servidor para manter
						uma melhor estrutura para o gameplay de todos.
					</p>
					<p>Utilizamos Cookie para poder utilizar o Google Analytics.</p>
					<p>
						O E-Fut Manager é um projeto feito e mantido por BHX Sites sem fins lucrativos. Os dados
						coletados deste jogo é de propriedade da BHX Sites e não será compartilhado com
						terceiros.
					</p>
					<p>
						A BHX Sites não se responsabiliza por uso indevido de marca ou imagens enviadas via
						upload por usuários com trademark.
					</p>
				</ContentText>
			</main>
		</div>
	);
};

export default Policy;
