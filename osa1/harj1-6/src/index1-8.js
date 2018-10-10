import React from 'react'
import ReactDOM from 'react-dom'



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

    const Statistics = () => {
      return (
        <div>
          <p> Statistiikka </p>
          <table>
            <tbody>
              < Statistic text="Hyvä" number={this.state.hyva} />
              < Statistic text="Neutraali" number={this.state.neutraali} />
              < Statistic text="Huono" number={this.state.huono} />
              < Statistic text="Keskiarvo" number={(this.state.hyva - this.state.huono) /
                   (this.state.hyva + this.state.neutraali + this.state.huono)} />
                   < Statistic text="Positiivisia" number={(100 * this.state.hyva /
                  (this.state.hyva + this.state.neutraali + this.state.huono))} merkki="%" />
            </tbody>
          </table>
        </div>
      )
    }


    const  Statistic = (props) => {
      const { text, number, merkki  } = props
       return (
         <tr>
           <td>{text}</td>
           <td>{number} {merkki}</td>
         </tr>
       )
    }


    const  Button = (props) => {
      const { text  } = props

      if (text === 'Hyva')
       return (
         <button onClick={this.klikHyva}>hyva</button>
      )
      if (text === 'Neutraali')
       return (
         <button onClick={this.klikNeutraali}>neutraali</button>
      )
      if (text === 'Huono')
       return (
         <button onClick={this.klikHuono}>huono</button>
      )
    }


    return (

      <div>
        <p> Anna palautetta </p>
        <div>
          < Button text="Hyva"  />
          < Button text="Neutraali"  />
          < Button text="Huono"  />
        </div>
        < Statistics  />
      </div>

    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))
