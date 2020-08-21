import React, {useState} from 'react';
import '../Styles/Proposal.css'
import Detail from './Detail'

const Proposal: React.FC<{proposal: any}> = ({proposal}) => {
  const totalVotes = parseInt(proposal.votesFor) + parseInt(proposal.votesAgainst)
  const [viewDetail, setViewDetail] = useState(false)

  const date = (timeStamp: number) => {
    var a = new Date(timeStamp * 1000)
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    var year = a.getFullYear()
    var month = months[a.getMonth()]
    var date = a.getDate()
    var hour = a.getHours()
    var min = a.getMinutes()
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min
    return time;
  }

  return (
    <span className="proposal">
      <div className="container circle left" >
        <div className="content" >
          <h4>
            {proposal.title}:
            <span style={{
              paddingLeft: '6px',
              color: proposal.winningOutcome==='Pass'?"green": "red"
            }}>
            {proposal.winningOutcome.toUpperCase()}</span>
          </h4>
          <p>{date(proposal.createdAt)}</p>
          {
            viewDetail && <Detail proposal={proposal}/>
          }
          <p className="text-button" onClick={() => setViewDetail(!viewDetail)}>
            {viewDetail?"Close": "Expand"}
          </p>
        </div>
      </div>
      <div className="container right vote-container">
        {parseInt(proposal.votesFor)>0 && <div 
          className="bar"
          id="green" 
          style={{
            backgroundColor: 'green', 
            width: `${Math.round(100 * parseInt(proposal.votesFor) / totalVotes)}%`,
            borderRadius: parseInt(proposal.votesAgainst)===0?"5px":""
          }} 
        />}
        {parseInt(proposal.votesAgainst)>0 && <div 
          className="bar"
          id="red" 
          style={{
            backgroundColor: 'red', 
            width: `${Math.round(100 * parseInt(proposal.votesAgainst) / totalVotes)}%`,
            borderRadius: parseInt(proposal.votesFor)===0?"5px":""
          }} 
        />}
        {
          parseInt(proposal.votesAgainst)===0 && parseInt(proposal.votesFor)===0 &&<div 
          className="bar" 
          style={{
            backgroundColor: 'grey', 
            width: `100%`,
            borderRadius: "5px"
          }} 
        />
        }
        <br/><br/>
        <div className="legend">
          <span className="label" style={{color: "green"}}>For: {proposal.votesFor}</span>
        </div>
        <div className="legend">
          <span className="label" style={{color: "red"}}>Against: {proposal.votesAgainst}</span>
        </div>
        <div className="legend">
          <span className="label" style={{color: "grey"}}>Total: {totalVotes}</span>
        </div>
      </div>
    </span>
  );
}

export default Proposal;