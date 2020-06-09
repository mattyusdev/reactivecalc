import React from "react";
import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";

const ButtonWithProps = ({ span, bold, backgroundColor, ...props }) => (
  <Button color="inherit" {...props} />
);

export const CalcButton = styled(ButtonWithProps)`
  && {
    border-radius: 0;
    text-transform: none;
    font-size: 1.3rem;
    font-weight: 200;

    ${(props) =>
      props.span &&
      css`
        grid-column: ${props.span};
      `};
    ${(props) =>
      props.bold &&
      css`
        font-weight: bold;
      `};
    ${(props) =>
      props.backgroundColor &&
      css`
        background: ${props.backgroundColor};
        color: #fff;

        &:hover {
          background: ${props.backgroundColor};
          opacity: 0.95;
        }
      `};
  }
`;
