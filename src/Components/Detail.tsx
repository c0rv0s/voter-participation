import React from 'react';

const Detail: React.FC<{proposal: any}> = ({proposal}) => {
  console.log(proposal.votes)
  return (
    <div>
      <hr/>
      Number of Voters: {proposal.votes.length}
      {
        proposal.votes.map((voter: any, i: number) => 
          <div key={i}>
            {voter.voter}
          </div>
        )
      }
    </div>
  );
}

export default Detail;