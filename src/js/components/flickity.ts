/**
* Adds slider
*/

const flickity = () => {
  const productSlider = document.querySelector('.js-product-slider')
  const productThumbnail = document.querySelector('.js-thumbnail-slider')

  if(productSlider) {
    //@ts-ignore
    new Flickity(productSlider, {
      cellAlign: 'center',
      contain: true,
      wrapAround: true,
      adaptiveHeight: false,
      pageDots: false,
      prevNextButtons: false
    })

    if(productThumbnail) {
      //@ts-ignore
      new Flickity(productThumbnail, {
        asNavFor: productSlider,
        cellAlign: 'left',
        contain: true,
        adaptiveHeight: false,
        prevNextButtons: false
      })
    }
  }
}

export default flickity