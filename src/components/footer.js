/* eslint-disable react/no-array-index-key */
/* eslint-disable @next/next/no-html-link-for-pages */
import { Icon } from '@components/icons';
import React from 'react';
import styled from 'styled-components';

import { socialMedia } from '../config';
import { mixins } from '../styles'

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;
`;

// eslint-disable-next-line import/no-default-export
export default function Footer() {
  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>

      <StyledCredit tabindex="-1">
        <a href="/#">
          <div>Back to Top</div>
        </a>
      </StyledCredit>
    </StyledFooter>
  );
}
