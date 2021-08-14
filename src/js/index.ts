import backToTop from './components/backToTop';
import forEachPolyfill from './components/forEachPolyfill';
import header from './components/header';
import waveAnimation from './components/waveAnimation';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    forEachPolyfill()
    waveAnimation()
    header()
    backToTop()
  },
  false
)
