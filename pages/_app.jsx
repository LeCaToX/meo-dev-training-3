import '../styles/globals.scss'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationBar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp
