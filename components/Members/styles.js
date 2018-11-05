import styled from 'styled-components';

import { RED, TWITTER_COLOR, breakpoint } from '../../constants';

const MembersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: ${breakpoint.large}px) {
    flex-direction: column;
  }
`;

const Member = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  @media (max-width: ${breakpoint.large}px) {
    margin: 0 0 20px 0;
  }
`;

const MemberImage = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  border: 3px solid ${RED};
  margin-bottom: 10px;
`;

const MemberName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

const MemberTwitter = styled.a`
  color: ${TWITTER_COLOR};
`;

export {
  MembersContainer, Member, MemberImage, MemberName, MemberTwitter,
};
