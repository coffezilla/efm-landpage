import type { NextPage } from 'next';

import Head from 'next/head';
import Link from 'next/link';

import MainMenu from '../../components/MainMenu';
import ContentText from '../../components/ContentText';

const Terms: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Termo de uso | E-Fut Manager</title>
				<meta
					name="description"
					content="Termos de uso do jogo onine E-fut Manager. É importante ler os nossos termos de uso pois nosso jogo é gratuito e sem fins lucrativos"
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
					<h1>Termos de uso</h1>
					<p>
						O E-Fut Manager é um jogo grátis de técnico de futebol aos moldes dos jogos antigos e
						clássicos dos anos 90.
					</p>
					<p>
						Este projeto foi feito por BHX Sites e não possui fins lucrativos. O projeto foi
						desenvolvido apenas no intuito de desenvolver um projeto aberto e divertido para que as
						pessoas possam usufruir e se divertir no tempo livre.
					</p>
					<p>
						As imagens, logos e trademarks são de propriedade dos respectivos responsáveis. A BHX
						Sites não possui permissão para comercializar tais conteúdos .
					</p>
					<p>
						A BHX Sites pode adicionar atualizações e melhorias caso seja necessário e haja tempo
						disponível para a dedicação a este projeto.
					</p>
					<p>
						As contas de e-mail registradas podem ser utilizadas para envio de e-mails para
						recuperação de senha ou aviso do jogo.
					</p>
					<p>Estes termos podem ser alterado sem prévio aviso.</p>
					<p>Ao utilizar o E-Fut Manager você concorda com este termo de uso.</p>
					<p>Tem alguma dúvida ou sugestão? Envie um e-mail para: atendimento@bhxsites.com.br</p>
				</ContentText>
			</main>
		</div>
	);
};

export default Terms;
