const axios = window.axios

const form = document.querySelector('#stock-form')

form.addEventListener('submit', (e)=>{
  e.preventDefault()
  const ticker = e.target.querySelector('.ticker-input').value
  if (!ticker) return


  axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/quote`).then(res=>{
    const price = res.data.latestPrice
    const el = document.querySelector('.current-price')

    const message = price ? `$${price}` : "No Data"

    el.innerHTML = message
  }).catch(e=>{
    console.error(e)
  })
})