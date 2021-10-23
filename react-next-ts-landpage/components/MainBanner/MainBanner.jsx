import ButtonPrimary from '../ButtonPrimary';

const MainBanner = () => {
	return (
		<>
			<section className="main-banner">
				<div className="container py-0 py-md-4">
					<div className="row justify-content-between align-items-center">
						<div className="row col-12 col-md-6 py-3 py-md-5 m-0">
							<h1>e-FUT MANAGER 21</h1>
							<div className="col-12 col-md-7 p-0">
								<p>
									O jogo de futebol Manager grátis para jogar com os amigos e desafiar jogadores do
									mundo inteiro!
								</p>
								<ButtonPrimary />
							</div>
							<p className="legend my-1 my-md-4 px-0">
								Jogo feito por BHX Sites sem anúncios, gratuito e não fins lucrativos. Divirta-se!
							</p>
						</div>
						<div className="col-12 col-md-6 p-3">
							<img src="/landpage/images/computador.png" alt="Screenshot jogo e-fut manager" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default MainBanner;
