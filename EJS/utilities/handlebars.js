function moneyFormat(number){
  new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(number);
}

function hasItems(products) {
  products.length > 0
}

function picture(url) {
  url || 'data:image/png;base64,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'
}

module.exports = {
  moneyFormat,
  hasItems,
  picture
}