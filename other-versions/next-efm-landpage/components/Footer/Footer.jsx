import ListClean from '../ListClean/ListClean';

const Footer = () => {
	const footerListCompany = [
		{ title: 'Registrar', url: 'https://efm.bhxsites.com.br/register' },
		{ title: 'Login', url: 'https://efm.bhxsites.com.br/login' },
		{ title: 'Termos de uso', url: '/terms' },
		{ title: 'Política de privacidade', url: '/policy' },
	];

	const footerListDefault = [
		{ title: 'BHX Sites', url: 'https://www.bhxsites.com.br' },
		{
			title: 'Projetos BHX Sites',
			url: 'https://www.bhxsites.com.br/portfolio-sites-bhxsites',
		},
		{ title: 'Github', url: 'https://github.com/coffezilla/efm-landpage' },
	];

	return (
		<>
			<footer>
				<div className='container py-3 py-md-5'>
					<h3 className='py-3'>AMAMOS FUTEBOL</h3>
					<div className='row'>
						<div className='col-12 col-sm-6 col-md-3'>
							<ListClean list={footerListCompany} />
						</div>
						<div className='col-12 col-sm-6 col-md-3'>
							<ListClean list={footerListDefault} />
						</div>
						<div className='col-12 col-md-6'></div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
