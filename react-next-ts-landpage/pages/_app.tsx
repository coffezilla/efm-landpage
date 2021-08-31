import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.scss';
import ReactGA from 'react-ga';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	if (typeof window !== 'undefined') {
		ReactGA.initialize('UA-160274238-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	return <Component {...pageProps} />;
}
export default MyApp;
