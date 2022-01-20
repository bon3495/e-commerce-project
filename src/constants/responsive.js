import { css } from 'styled-components';

export const mediumHandset = props =>
  css`
    @media only screen and (min-width: 400px) {
      ${props}
    }
  `;

export const largeHandset = props =>
  css`
    @media only screen and (min-width: 480px) {
      ${props}
    }
  `;

export const smallTablet = props =>
  css`
    @media only screen and (min-width: 600px) {
      ${props}
    }
  `;

export const mediumTablet740 = props =>
  css`
    @media only screen and (min-width: 740px) {
      ${props}
    }
  `;

export const mediumTablet = props =>
  css`
    @media only screen and (min-width: 840px) {
      ${props}
    }
  `;

export const largeTablet = props =>
  css`
    @media only screen and (min-width: 960px) {
      ${props}
    }
  `;

export const mediumScreen = props =>
  css`
    @media only screen and (min-width: 1024px) {
      ${props}
    }
  `;

export const largeScreen = props =>
  css`
    @media only screen and (min-width: 1280px) {
      ${props}
    }
  `;
