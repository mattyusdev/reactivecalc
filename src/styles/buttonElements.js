import React from "react";
import styled, { css } from "styled-components";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import { device } from "./responsive";

const IconButtonWithProps = React.forwardRef((props, ref) => (
  <IconButton color="inherit" {...props} ref={ref} />
));

export const NavButton = styled(IconButtonWithProps)`
  && {
    font-size: 1.7rem;
    padding: 1rem;

    ${(props) =>
      props.theme &&
      css`
        color: ${props.theme.textTwo};
      `}

      ${(props) =>
        props.theme.name === "mattyus" &&
        css`
          svg {
            width: 1.7rem;
            height: 1.7rem;
          }
        `}

    @media ${device.mobileL} {
      font-size: 2.3rem;

      ${(props) =>
        props.theme.name === "mattyus" &&
        css`
          svg {
            width: 2.3rem;
            height: 2.3rem;
          }
        `}
    }
  }
`;

const ButtonWithProps = ({
  span,
  bold,
  backgroundColor,
  textColor,
  ...props
}) => <Button color="inherit" {...props} />;

export const CalcButton = styled(ButtonWithProps)`
  && {
    border-radius: 0;
    text-transform: none;
    font-size: 1.3rem;
    font-weight: 200;
    &:hover {
      opacity: 0.95;
    }

    ${(props) =>
      props.span &&
      css`
        grid-column: ${props.span};
      `};
    ${(props) =>
      props.bold &&
      css`
        font-weight: 400;
      `};

    ${(props) =>
      props.theme &&
      props.textColor &&
      css`
        color: ${props.theme[props.textColor]};
      `}

    ${(props) =>
      props.theme &&
      props.backgroundColor &&
      css`
        background: ${props.theme[props.backgroundColor]};

        &:hover {
          background: ${props.theme[props.backgroundColor]};
        }
      `}

      @media ${device.mobileL} {
    font-size: 1.8rem;

      }
  }
`;
