import dados from './dados.js'

var containerPortfolioItemJs = document.getElementById('portfolioItemJs');

for (let item of dados){
  var template = `
  <!-- Começo Portfolio Item -->
  <div class="portfolio-item padd-15">
      <div class="portfolio-item-inner shadow-dark">
          <div class="portfolio-img">
              <a href="${item.url}" target="_blank"><img src="${item.img}" alt="${item.alt}"></a>
          </div>
      </div>
  </div>
  <!-- Fim Portfolio Item -->
  `
  containerPortfolioItemJs.innerHTML += template
}