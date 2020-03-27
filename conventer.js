const Convertion = props => {
  return (
    <div className="conversion">
      <p>
        {props.amount} {props.firstCurrency} is{" "}
        {(props.amount * props.ratio).toFixed(2)}
        {props.secondCurrency}
      </p>
    </div>
  );
};

class App extends React.Component {
  state = {
    amount: 0,
    firstCurrency: "PLN",
    secondCurrency: "GBP"
  };
  currencies = {
    USD: {
      PLN: 3.86709,
      GBP: 0.78161,
      CAD: 1.33567,
      EUR: 0.89712,
      USD: 1.0
    },
    PLN: {
      USD: 0.25834,
      GBP: 0.20192,
      CAD: 0.34505,
      EUR: 0.23177,
      PLN: 1.0
    },
    GBP: {
      USD: 1.27921,
      PLN: 4.94683,
      CAD: 1.70861,
      EUR: 1.14763,
      GBP: 1.0
    },
    CAD: {
      USD: 0.74858,
      PLN: 2.89482,
      GBP: 0.5851,
      EUR: 0.67157,
      CAD: 1.0
    },
    EUR: {
      USD: 1.11453,
      PLN: 4.31002,
      GBP: 0.87113,
      CAD: 1.48864,
      EUR: 1.0
    }
  };

  handleSelectFirst = e => {
    this.setState({
      firstCurrency: e.target.value
    });
  };
  handleSelectSecond = e => {
    this.setState({
      secondCurrency: e.target.value
    });
  };

  handleAmount = e => {
    this.setState({
      amount: e.target.value
    });
  };

  render() {
    const value1 = this.state.firstCurrency;
    const value2 = this.state.secondCurrency;
    const currencies = this.currencies;
    const ratio = currencies[value1][value2];
    console.log(value1);
    console.log(value2);
    console.log(ratio);

    return (
      <div className="wrapper">
        <h1>Amount:</h1>
        <input onChange={this.handleAmount} />
        <div className="sellectWrapper">
          <p className="title">From:</p>
          <select
            value={this.state.firstCurrency}
            onChange={this.handleSelectFirst}
          >
            <option value="PLN">PLN</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="sellectWrapper">
          <p className="title">To:</p>
          <select
            value={this.state.secondCurrency}
            onChange={this.handleSelectSecond}
          >
            <option value="PLN">PLN</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="CAD">CAD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <Convertion
          amount={this.state.amount}
          firstCurrency={this.state.firstCurrency}
          secondCurrency={this.state.secondCurrency}
          ratio={ratio}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
