/**
* Includes all UI functionality of header
*/

const header = () => {
  const header = document.querySelector('.js-header')
  const menu = document.querySelector('.js-menu')

  if(header) {
    window.addEventListener('scroll', () => {
      if(window.scrollY === 0) {
        header.classList.remove('scroll')
      } else {
        header.classList.add('scroll')
      }
    })

    if(menu) {
      menu.addEventListener('click', () => {
        header.classList.toggle('active')
      })
    }
  }
}

export default header