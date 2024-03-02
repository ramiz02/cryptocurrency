// Write your JS code here
import {Component} from 'react'
import CryptoCurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptoCurrencyList extends Component {
  state = {
    currencyList: [],
  }

  componentDidMount() {
    this.getCurrencyList()
  }

  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updateData = {
      id: data.id,
      currencyName: data.currency_name,
      usdValue: data.usd_value,
      euroValue: data.euro_value,
      currencyLogo: data.currency_logo,
    }
    this.setState({currencyList: updateData})
  }

  render() {
    const {currencyList} = this.state

    return (
      <div>
        <h1>Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <div>
          <div>
            <h1>Coin Type</h1>
            <div>
              <h1>USD</h1>
              <h1>EURO</h1>
            </div>
          </div>

          {currencyList.map(eachList => (
            <CryptoCurrencyItem key={eachList.id} currencyData={eachList} />
          ))}
        </div>
      </div>
    )
  }
}

export default CryptoCurrencyList
