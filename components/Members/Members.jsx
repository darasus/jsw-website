import React from 'react';
import styled from 'styled-components';

import { RED, TWITTER } from '../../constants/colors';
import { SectionStyled, SectionTitleStyled } from '../../styles/styles';

const MembersContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
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
  background-image: url(${({ image }) => image});
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
  color: ${TWITTER};
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
        <SectionTitleStyled>
          {'Members'}
        </SectionTitleStyled>
        {(() => {
          if (loading) {
            return (
              <span>
                {'Loading...'}
              </span>
            );
          }
          return (
            <MembersContainerStyled>
              {members.map(({ firstName, lastName, twitterHandle }) => (
                <MemberStyled key={lastName}>
                  <MemberImageStyled image={`/static/img/${firstName.toLowerCase()}.jpg`} />
                  <MemberNameStyled>
                    {firstName}
                    {' '}
                    {lastName}
                  </MemberNameStyled>
                  <MemberTwitterStyled
                    href={`https://twitter.com/${twitterHandle}`}
                    target="_blank"
                  >
                    {`@${twitterHandle}`}
                  </MemberTwitterStyled>
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
