import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

const pageQuery = graphql`
  query MyQuery {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`;

const Root = () => {
  const data = useStaticQuery(pageQuery);
  const pages = data?.allSitePage?.edges?.map((e) => e.node.path);
  return (
    <>
      <Wrapper>
        <h1>Hoyoon's Test Project</h1>
        {pages && pages.length > 0 && (
          <ul style={{ marginTop: 12 }}>
            {pages.map((e) => (
              <li key={e}>
                <a href={e}>{e}</a>
              </li>
            ))}
          </ul>
        )}
      </Wrapper>
    </>
  );
};

export default Root;
