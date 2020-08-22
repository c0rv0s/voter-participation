import React, {useState} from 'react';
import '../Styles/App.css';
import Timeline from './Timeline'
import { daos } from '../daos'

const Home = () => {
  const [daoAddress, setDaoAddress] = useState("0xbe1a98d3452f6da6e0984589e545d4fc25af7526")
  return (
    <div>
      <div className="dao-header">
        {"Dao: "}
        <select className="dao-select" value={daoAddress} onChange={(e) => setDaoAddress(e.target.value)}>
          {
            daos.map((dao: any, i: number) => <option key={i} value={dao.id}>{dao.name}</option>)
          }
        </select>
      </div>
      <hr />
      <h2 className="title-left">Proposal</h2>
      <h2 className="title-right">Vote Distribution</h2>
      <Timeline daoAddress={daoAddress} />
    </div>
  )
}

export default Home