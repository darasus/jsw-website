import React from 'react';
import PropTypes from 'prop-types';

import { filteredMembers } from '../../utils';
import * as A from '../../styles/styles';
import * as S from './styles';

const Members = ({ speakers }) => (
  <A.Section>
    <A.SectionTitle>
      {'Members'}
    </A.SectionTitle>
    <S.MembersContainer>
      {filteredMembers(speakers).map(({ id, data }) => {
        const {
          first_name: firstName,
          last_name: lastName,
          twitter_handle: twitterHandle,
          profile_picture: profilePicture,
        } = data;
        return (
          <S.Member key={id}>
            <S.MemberImage image={profilePicture.url} />
            <S.MemberName>
              {firstName[0].text}
              {' '}
              {lastName[0].text}
            </S.MemberName>
            <S.MemberTwitter href={`https://twitter.com/${twitterHandle[0].text}`} target="_blank">
              {`@${twitterHandle[0].text}`}
            </S.MemberTwitter>
          </S.Member>
        );
      })}
    </S.MembersContainer>
  </A.Section>
);

Members.propTypes = {
  speakers: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default Members;
