/**
 * Add back to top functionality
 */

const backToTop = () => {
  const button = document.querySelector('.js-back-top')

  if(button) {
    button.addEventListener('click', () => {
      document.body.scrollIntoView({ behavior: 'smooth' })
    })
  }
}

export default backToTop
