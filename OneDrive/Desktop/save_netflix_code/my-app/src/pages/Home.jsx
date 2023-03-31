import React from 'react'
import Main from '../MyComponents/Main'
import Row from '../MyComponents/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
    <Main />
<Row title="Up-coming" fetchUrl={requests.requestUpcoming} />
<Row title="Top-Rated" fetchUrl={requests.requestTopRated} />
<Row title="Treanding" fetchUrl={requests.requestTrending} />
<Row title="Popular" fetchUrl={requests.requestPopular} />
{/* <Row title="Horror" fetchUrl={requests.requestHorror} /> */}


    </>
  )
}

export default Home