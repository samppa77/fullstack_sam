import React from 'react'
import ReactDOM from 'react-dom'

/* Tässä filessä on tehtävät 1.6 ja 1.7 */

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      keskiarvo: 0,
    }
  }

  klikHyva = () => {
    this.setState({
      hyva: this.state.hyva + 1,
      keskiarvo:  (this.state.hyva - this.state.huono)/
                  (this.state.hyva + this.state.neutraali + this.state.huono),
    })
  }

  klikNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1,
      keskiarvo:  (this.state.hyva - this.state.huono)/
                  (this.state.hyva + this.state.neutraali + this.state.huono),
    })
  }

  klikHuono = () => {
    this.setState({
      huono: this.state.huono + 1,
      keskiarvo:  (this.state.hyva - this.state.huono)/
                  (this.state.hyva + this.state.neutraali + this.state.huono),
    })
  }


  render() {
    return (



      <div>
        <p> Anna palautetta </p>
        <div>
          <button onClick={this.klikHyva}>hyva</button>
          <button onClick={this.klikNeutraali}>neutraali</button>
          <button onClick={this.klikHuono}>huono</button>
          <p> Statistiikka </p>
          <div>Hyvä {this.state.hyva}</div>
          <div>Neutraali {this.state.neutraali}</div>
          <div>Huono {this.state.huono}</div>
          <div>keskiarvo </div>
        </div>

        <table>
          <p> Statistiikka2 </p>

          <tbody>
            <tr>
              <td>Hyvä</td>
              <td>{this.state.hyva}</td>
            </tr>
            <tr>
              <td>Neutraali</td>
              <td>{this.state.neutraali}</td>
            </tr>
            <tr>
              <td>Huono</td>
              <td>{this.state.huono}</td>
            </tr>
            <tr>
              <td>keskiarvo</td>
              <td>{String((this.state.hyva - this.state.huono) /
                   (this.state.hyva + this.state.neutraali + this.state.huono))}</td>
            </tr>
            <tr>
              <td>Positiivisia2</td>
              <td>{String(100 * this.state.hyva /
                  (this.state.hyva + this.state.neutraali + this.state.huono)) } %</td>
            </tr>
          </tbody>
        </table>

        </div>


    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))
