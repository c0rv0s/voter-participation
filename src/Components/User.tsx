import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import '../Styles/User.css'

export const PROP_QUERY = gql`
  query GetUserProposals($userAddress: Bytes!) {
    proposals (
      orderBy: createdAt
      orderDirection: desc
      where: {
        proposer: $userAddress
      }
    ) {
      title
      winningOutcome
    	dao {
        id
        name
      }
    }
    tokenHolders(
      where: {
        address: $userAddress
      }
    ) {
      id
      address
    	contract
    	balance
    }
  }
`

const User: React.FC<{match: any}> = ({match}) => {
  const userAddress: string = match.params.address
  const { loading, error, data } = useQuery(PROP_QUERY, {variables: { userAddress }})

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (error) console.log(error)

  return (
    <div>
      <div className="dao-header">
        User: <a href={`https://etherscan.io/address/${match.params.address}`} target="_blank" rel="noopener noreferrer">{match.params.address}</a>
      </div>
      <hr />
      <div className="user-container">
        <h3>Tokens:</h3>
        {
          !loading && data.tokenHolders.map((token: any, i: number) => 
            <div key={i}>
              <p>Contract: <a href={`https://etherscan.io/address/${token.contract}`} target="_blank" rel="noopener noreferrer">{token.contract}</a></p>
              <p>Balance: {token.balance}</p>
              <hr />
            </div>
          )
        }
        <h3>Proposals:</h3>
        {
          !loading && data.proposals.map((proposal: any, i: number) => 
            <div key={i}>
              <p>DAO: {proposal.dao.name}</p>
              <p>Proposal: {proposal.title}</p>
              Outcome: <span style={{
              color: proposal.winningOutcome==='Pass'?"green": "red"
              }}>{proposal.winningOutcome.toUpperCase()}</span>
              <hr />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default withRouter(User);