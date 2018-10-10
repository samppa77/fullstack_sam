/* Tämä file sisältää tehtävän 1.10 koodin jota ei saatu toimimaan */

import React from 'react'
import ReactDOM from 'react-dom'

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
  const { text } = props
console.log(props)
  return (

     <button onClick={() => props.klik(text)}>{text}</button>
  )
}

const Statistics = (props) => {
  const hyva = props.state.hyva

  if (hyva > 0 || props.state.neutraali  > 0 || props.state.huono > 0) {
  return (
    <div>
      <p> Statistiikka </p>
      <table>
        <tbody>
          < Statistic text="Hyvä" number={props.state.hyva} />
          < Statistic text="Neutraali" number={props.state.neutraali} />
          < Statistic text="Huono" number={props.state.huono} />
          < Statistic text="Keskiarvo" number={(props.state.hyva - props.state.huono) /
               (props.state.hyva + props.state.neutraali + props.state.huono)} />
               < Statistic text="Positiivisia" number={(100 * props.state.hyva /
              (props.state.hyva + props.state.neutraali + props.state.huono))} merkki="%" />
        </tbody>
      </table>
    </div>
  )
  }
  if (props.state.hyva  === 0 && props.state.neutraali  === 0 && props.state.huono === 0) {
    return (
     <div>
       <p> Statistiikka </p>
       <p>ei yhtään palautetta annettu </p>
    </div>
    )
  }
}

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

  klikNappi = (text) => {
    console.log('kutsuttu')

    if (text === 'Hyva') {
      this.setState({
        hyva: this.state.hyva + 1,
        keskiarvo:  (this.state.hyva - this.state.huono)/
                  (this.state.hyva + this.state.neutraali + this.state.huono),
      })
    }
    if (text === 'Neutraali') {
        this.setState({
          neutraali: this.state.neutraali + 1,
          keskiarvo:  (this.state.hyva - this.state.huono)/
                      (this.state.hyva + this.state.neutraali + this.state.huono),
        })
    }

    if (text === 'Huono') {
        this.setState({
          huono: this.state.huono + 1,
          keskiarvo:  (this.state.hyva - this.state.huono)/
                      (this.state.hyva + this.state.neutraali + this.state.huono),
        })
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

  klik2 = (param) => () => {
    console.log(param)
  }

  render() {

    return (
      <div>
        <p> Anna palautetta </p>
        <div>
          < Button klik={this.klikNappi} text="Hyva"  />
          < Button klik={this.klikNappi} text="Neutraali"  />
          < Button klik={this.klikNappi} text="Huono"  />
        </div>
        < Statistics  state={this.state}/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))
