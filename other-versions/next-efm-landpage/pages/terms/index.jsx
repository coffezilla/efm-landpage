import Head from 'next/head';
import Link from 'next/link';

import MainMenu from '../../components/MainMenu';
import ContentText from '../../components/ContentText';

const Terms = () => {
	return (
		<div>
			<Head>
				<title>E-Fut Manage 2021</title>
				<meta name='description' content='E-Fut Manage 2021 Online Game' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<MainMenu />

				<section className='breadcrumb'>
					<div className='container'>
						<div className='row'>
							<div className='col-12'>
								<Link href='./'>
									<a>Voltar a tela inicial</a>
								</Link>
							</div>
						</div>
					</div>
				</section>
				<ContentText>
					<h1>Termos de uso</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
						aliquid aspernatur. Soluta!
					</p>
				</ContentText>
			</main>
		</div>
	);
};

export default Terms;
