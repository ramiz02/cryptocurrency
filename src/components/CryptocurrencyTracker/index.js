// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptoCurrencyList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    isLoading: true,
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
    this.setState({
      currencyList: data,
      isLoading: false,
    })
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <Loader
            type="Rings"
            color="#ffffff"
            height={80}
            width={80}
            data-testid="loader"
          />
        ) : (
          <CryptoCurrencyList />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
