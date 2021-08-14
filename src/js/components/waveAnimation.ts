/**
* Adds wave animation
*/

import lottie from 'lottie-web'

const setWaveAnimation = (itemElement : HTMLElement, path : string) => {
  lottie.loadAnimation({
    container: itemElement,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: path
  })
}

const waveAnimation = () => {
  const wave = document.querySelectorAll('.js-banner-wave')
  const wave2 = document.querySelectorAll('.js-banner-wave-2')

  if(wave.length > 0) {
    wave.forEach(item => {
      let itemElement = item as HTMLElement
      setWaveAnimation(itemElement, '/json/data-color-2.json')
    })
  }

  if(wave2.length > 0) {
    wave2.forEach(item => {
      let itemElement = item as HTMLElement
      setWaveAnimation(itemElement, '/json/data-color-1.json')
    })
  }
}

export default waveAnimation