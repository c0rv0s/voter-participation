import React from 'react';
import { useQuery, gql } from '@apollo/client';
import '../Styles/Timeline.css'
import Proposal from './Proposal'

export const DAO_QUERY = gql`
  query GetProposals($daoAddress: Bytes!) {
    proposals (
      where: {
        dao: $daoAddress
      },
      orderBy: createdAt
      orderDirection: desc
    ) {
      createdAt
      title
      winningOutcome
      votes {
        voter
      }
      description
      proposer
      votesFor
      votesAgainst
    }
  }
`

const Timeline: React.FC<{daoAddress: string}> = ({daoAddress}) => {
  const { loading, error, data } = useQuery(DAO_QUERY, {variables: { daoAddress }})

  if (error) console.log("error:", error)

  return (
    <div>
      {
        loading && <div><br/><br/><br/><br/><br/><h3>Loading...</h3></div>
      }
      {
        !loading && <div className="timeline">
          { 
            data.proposals.map((proposal: any, i: number) => 
              <Proposal proposal={proposal} key={i} />
            )
          }
        </div>
      }
    </div>
  );
}

export default Timeline;