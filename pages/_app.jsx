import '../styles/globals.scss'
import NavigationBar from '../components/NavigationBar'
import 'bootstrap-icons/font/bootstrap-icons.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationBar/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
