// Write your JS code here
import './index.css'

const CryptoCurrencyItem = props => {
  const {currencyData} = props
  const {imageUrl, currencyName, usdValue, euroValue} = currencyData

  return (
    <div>
      <div>
        <img src={imageUrl} alt={currencyName} className="image" />
        <h1>{currencyName}</h1>
      </div>
      <div>
        <h1>{usdValue}</h1>
        <h1>{euroValue}</h1>
      </div>
    </div>
  )
}

export default CryptoCurrencyItem
