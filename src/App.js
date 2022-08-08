import React, { useEffect, useState } from 'react'



const App = () => {
  const [data,setData] = useState([]);
  useEffect(() => {
    fetch('https://data.covid19india.org/data.json').then(
      res => res.json()
    ).then(jsondata => setData(jsondata.statewise))
  },[])
  return (
    <div>
      <center>
        <h1 style={{margintop: '20px'}}>INDIA COVID-19 DASHBOARD</h1>
        <table className='table'>
          <thead style={{ background: '#101010', color: 'white'}}>
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
              <th>Active</th>
              <th>LastUpdate</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => {
              return (
                <tr>
                  <th>{item.state}</th>
                  <td>{item.confirmed}</td>
                  <td>{item.recovered}</td>
                  <td>{item.deaths}</td>
                  <td>{item.active}</td>
                  <td>{item.lastupdatedtime}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </center>
    </div>
  )
}


export default App;
