// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Navbar from './Navbar';
import './all.sass';

type Props = {
  children: React.Node,
};

const colorPink = '#f06595';
const colorGrey = '#868e96';
const colorOverlay = 'rgba(74, 74, 74, 30)';

const theme = {
  breakpoints: [576, 768, 992, 1200],
  radii: [4],
  colors: {
    primary: colorPink,
    scondary: colorGrey,
    overlay: colorOverlay,
  },
  fonts: {
    sans: `-apple-system, BlinkMacSystemFont,
      "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif`,
  },
  fontWeights: {
    light: 200,
    book: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  lineHeight: {
    small: 20,
    base: 24,
  },
  space: [
    0,
    8,
    16,
    24,
    32,
    40,
    48,
    56,
    64,
    72,
    80,
    88,
    96,
    104,
    112,
    120,
    128,
    136,
    144,
    152,
    160,
  ],
};

const TemplateWrapper = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Helmet>
            <html lang="en" />
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/img/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-32x32.png"
              sizes="32x32"
            />
            <link
              rel="icon"
              type="image/png"
              href="/img/favicon-16x16.png"
              sizes="16x16"
            />

            <link
              rel="mask-icon"
              href="/img/safari-pinned-tab.svg"
              color="#ff4400"
            />
            <meta name="theme-color" content="#fff" />

            <meta property="og:type" content="business.business" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content="/img/og-image.jpg" />
          </Helmet>
          <Navbar />
          <React.Fragment>{children}</React.Fragment>
        </React.Fragment>
      </ThemeProvider>
    )}
  />
);

export default TemplateWrapper;
