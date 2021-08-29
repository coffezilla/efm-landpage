import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Ribbon = () => {
	return (
		<>
			<footer className='ribbon'>
				<div className='container'>
					<div className='row'>
						<div className='col-auto py-3'>
							<p>
								Feito com
								<i className='bi bi-heart-fill px-1'></i>
								por BHX Sites
								<Link href='https://www.bhxsites.com.br/criar-loja-virtual-bh'>
									<a className='px-1'>lojas virtuais</a>
								</Link>
								e
								<Link href='https://www.bhxsites.com.br/criar-site-bh'>
									<a className='px-1'>websites</a>
								</Link>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
export default Ribbon;
