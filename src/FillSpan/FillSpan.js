import React from "react";
import styled from "styled-components";

const Span = styled.span`
  background: ${props => props.theme.background};
`;

const FillSpan = ({ theme, children }) => <Span theme={theme}>{children}</Span>;

Span.defaultProps = {
  theme: {
    background: "white"
  }
};

export default FillSpan;
