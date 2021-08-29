import ButtonPrimary from '../ButtonPrimary';

const MainMenu = () => {
	return (
		<>
			<section className="main-menu">
				<div className="container py-1">
					<div className="row justify-content-between align-items-center">
						<div className="col-auto">
							<img
								src="/efut-manager-landpage/images/logo-efut-manager.png"
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
