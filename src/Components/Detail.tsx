import React from 'react';
import { Link } from 'react-router-dom';

const Detail: React.FC<{proposal: any}> = ({proposal}) => {

  return (
    <div>
      <hr/>
      Proposer:
      <br/>
      <Link to={`/user/${proposal.proposer}`}>{proposal.proposer}</Link>
      <br/><br/>
      Number of Voters: {proposal.votes.length}
      {
        proposal.votes.map((voter: any, i: number) => 
          <div key={i}>
            <Link to={`/user/${voter.voter}`}>{voter.voter}</Link>
          </div>
        )
      }
    </div>
  );
}

export default Detail;