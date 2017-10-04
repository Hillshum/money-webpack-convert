const axios = window.axios

const form = document.querySelector('#currency-form')

form.addEventListener('submit', (e)=>{
  e.preventDefault()
  const symbol = e.target.querySelector('.symbol-input').value
  if (!symbol) return


  axios.get(`https://api.fixer.io/latest?base=USD&symbols=${symbol}`).then(res=>{
    const price = res.data.rates[symbol]
    const el = document.querySelector('.current-price')

    const message = price ? `${price}` : "No Data"

    el.innerHTML = message
  }).catch(e=>{
    console.error(e)
  })
})