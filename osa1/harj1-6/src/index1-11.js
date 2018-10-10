/* Tämä on avain sama koodi mitä tehtävässä 1-10. */

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

const Statistics = (props) => {
  const hyva = props.state.hyva
  const neutraali = props.state.neutraali
  const huono = props.state.huono

  if (hyva > 0 || neutraali  > 0 || huono > 0) {
  return (
    <div>
      <p> Statistiikka </p>
      <table>
        <tbody>
          < Statistic text="Hyvä" number={hyva} />
          < Statistic text="Neutraali" number={neutraali} />
          < Statistic text="Huono" number={huono} />
          < Statistic text="Keskiarvo" number={(hyva - huono) /
               (hyva + neutraali + huono)} />
          < Statistic text="Positiivisia" number={(100 * hyva /
              (hyva + neutraali + huono))} merkki="%" />
        </tbody>
      </table>
    </div>
  )
  }
  if (hyva  === 0 && neutraali  === 0 && huono === 0) {
    return (
     <div>
       <p> Statistiikka </p>
       <p>ei yhtään palautetta annettu </p>
    </div>
    )
  }
}

const  Button = (props) => {
  const { text } = props
  console.log(props)
  return (
     <button onClick={() => props.klik(text)}>{text}</button>
  )
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
    /* console.log('kutsuttu') */
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
