/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { socialMedia } from '../config';
import { Icon } from './icons';

import { Side } from '.';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

function Social({ isHome }) {
  return <Side isHome={isHome} orientation="left">
    <StyledSocialList>
      {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name}>
              <Icon name={name} />
            </a>
          </li>
        ))}
    </StyledSocialList>
  </Side>
}

Social.propTypes = {
  isHome: PropTypes.bool,
};

// eslint-disable-next-line import/no-default-export
export default Social;
