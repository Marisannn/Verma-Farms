/**
* Adds wave animation
*/

import lottie from 'lottie-web'

const waveAnimation = () => {
  const wave = document.querySelector('.js-banner-wave') as HTMLElement

  if(wave) {
    lottie.loadAnimation({
      container: wave,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/json/data-color-2.json'
    })
  }
}

export default waveAnimation