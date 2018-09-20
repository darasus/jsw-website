import React from 'react';
import PropTypes from 'prop-types';

import { filteredMembers } from '../../utils';
import { SectionStyled, SectionTitleStyled } from '../../styles/styles';
import {
  MembersContainerStyled,
  MemberStyled,
  MemberImageStyled,
  MemberNameStyled,
  MemberTwitterStyled,
} from './styles';

const Members = ({ speakers }) => (
  <SectionStyled>
    <SectionTitleStyled>
      {'Members'}
    </SectionTitleStyled>
    <MembersContainerStyled>
      {filteredMembers(speakers).map(({ id, data }) => {
        const {
          first_name: firstName,
          last_name: lastName,
          twitter_handle: twitterHandle,
          profile_picture: profilePicture,
        } = data;
        return (
          <MemberStyled key={id}>
            <MemberImageStyled image={profilePicture.url} />
            <MemberNameStyled>
              {firstName[0].text}
              {' '}
              {lastName[0].text}
            </MemberNameStyled>
            <MemberTwitterStyled
              href={`https://twitter.com/${twitterHandle[0].text}`}
              target="_blank"
            >
              {`@${twitterHandle[0].text}`}
            </MemberTwitterStyled>
          </MemberStyled>
        );
      })}
    </MembersContainerStyled>
  </SectionStyled>
);

Members.propTypes = {
  speakers: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default Members;
