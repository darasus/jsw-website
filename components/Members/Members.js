import React from 'react';
import styled from 'styled-components';

import { RED, TWITTER_COLOR } from '../../contants/colors';

const SectionStyled = styled.section`
  min-height: calc(100vh / 2);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const MembersContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const MembersTitleStyled = styled.h2``;
const MemberStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;
const MemberImageStyled = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border: 3px solid ${RED};
  margin-bottom: 10px;
`;
const MemberNameStyled = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
const MemberTwitterStyled = styled.a`
  color: ${TWITTER_COLOR};
  text-decoration: none;
`;

class Members extends React.Component {
  state = {
    loading: true,
    members: [],
  };
  componentDidMount = async () => {
    const fetchedMembers = await fetch('/static/data/members.json');
    const members = await fetchedMembers.json();
    this.setState({
      members: members.data,
      loading: false,
    });
  };
  render = () => {
    const { loading, members } = this.state;
    return (
      <SectionStyled>
        <MembersTitleStyled>Members</MembersTitleStyled>
        {(() => {
          if (loading) {
            return <span>Loading...</span>;
          }
          return (
            <MembersContainerStyled>
              {members.map(({ firstName, lastName, twitterHandle }, i) => (
                <MemberStyled key={i}>
                  <MemberImageStyled
                    image={`/static/img/${firstName.toLowerCase()}.jpg`}
                  />
                  <MemberNameStyled>
                    {firstName} {lastName}
                  </MemberNameStyled>
                  <MemberTwitterStyled
                    href={`https://twitter.com/${twitterHandle}`}
                    target="_blank">{`@${twitterHandle}`}</MemberTwitterStyled>
                </MemberStyled>
              ))}
            </MembersContainerStyled>
          );
        })()}
      </SectionStyled>
    );
  };
}

export default Members;
