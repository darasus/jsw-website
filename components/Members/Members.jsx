import React from 'react';
import PropTypes from 'prop-types';

import { CLOUDINARY_URL } from '../../constants';
import { filteredAndSortedMembers } from '../../utils';
import * as A from '../../styles';
import * as S from './styles';

const Members = ({ speakers }) => (
  <A.Section>
    <A.Wrap>
      <A.SectionTitle>
        {'Members'}
      </A.SectionTitle>
      <S.MembersContainer>
        {filteredAndSortedMembers(speakers).map(({ id, data }) => {
          const {
            first_name: firstName,
            last_name: lastName,
            twitter_handle: twitterHandle,
            profile_picture: profilePicture,
          } = data;
          return (
            <S.Member key={id}>
              <S.MemberImage image={`${CLOUDINARY_URL}w_200,f_auto/${profilePicture.url}`} />
              <S.MemberName>
                {firstName[0].text}
                {' '}
                {lastName[0].text}
              </S.MemberName>
              <S.MemberTwitter
                href={`https://twitter.com/${twitterHandle[0].text}`}
                target="_blank"
              >
                {`@${twitterHandle[0].text}`}
              </S.MemberTwitter>
            </S.Member>
          );
        })}
      </S.MembersContainer>
    </A.Wrap>
  </A.Section>
);

Members.propTypes = {
  speakers: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default Members;
