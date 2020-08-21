import React, {useState} from 'react';

const Detail: React.FC<{proposal: any}> = ({proposal}) => {

  return (
    <div>
      <hr/>
      Proposer:
      <br/>
      <p>{proposal.proposer}</p>
      <br/><br/>
      Number of Voters: {proposal.votes.length}
      {
        proposal.votes.map((voter: any, i: number) => 
          <div key={i}>
            <p >{voter.voter}</p>
          </div>
        )
      }
    </div>
  );
}

export default Detail;