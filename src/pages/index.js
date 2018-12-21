// @flow

import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import GlobalStyles from '../components/styled/global/index';
import { Display, TextBlock } from '../components/styled/type.styled';
import { StyledLink } from '../components/styled/link.styled';

type Props = {
  data: Object,
};

type State = {};

export default class IndexPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <GlobalStyles />
        <section>
          <div>
            <div>
              <Display>Latest Stories</Display>
            </div>
            {posts.map(({ node: post }) => (
              <div key={post.id}>
                <TextBlock>
                  <StyledLink to={post.fields.slug}>
                    {post.frontmatter.title}
                  </StyledLink>
                  <small>{post.frontmatter.date}</small>
                </TextBlock>
                <TextBlock>
                  {post.excerpt}
                  <StyledLink to={post.fields.slug}>Keep Reading</StyledLink>
                </TextBlock>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
