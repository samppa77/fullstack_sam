import React from 'react'
import ReactDOM from 'react-dom'

/* Tehtavä 1.1 ja 1.2 */
const Otsikko = (props) => {
  return (
    <div>
      <h1> {props.kurssi.nimi} </h1>
    </div>
  )
}


const Yhteensa = (props) => {
  const teksti1 = 'Yhteensä '
  const teksti2 = 'tehtävää'
  return (
    <div>
      <p> {teksti1} {props.kurssi.osat[0].tehtavia +
                     props.kurssi.osat[1].tehtavia +
                     props.kurssi.osat[2].tehtavia} {teksti2}</p>
    </div>
  )
}


const Osa = (props) => {
  return (
    <div>
      <p> {props.osat.nimi}  {props.osat.tehtavia} </p>
    </div>
  )
}


const Sisalto = (props) => {
  return (
    <div>
      <Osa osat={props.kurssi.osat[0]} />
      <Osa osat={props.kurssi.osat[1]} />
      <Osa osat={props.kurssi.osat[2]} />
    </div>
  )
}



const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto kurssi={kurssi} />
      <Yhteensa kurssi={kurssi} />
    </div>
  )
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)
