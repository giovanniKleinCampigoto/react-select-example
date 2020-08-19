import styled, { css } from "styled-components";
import ReactSelect from "react-select";
import ReactSelectAsync from "react-select/lib/Async";
import ReactSelectCreatable from "react-select/lib/Creatable";
import ReactSelectAsyncCreatable from "react-select/lib/AsyncCreatable";
import colors from "../../colors";

const defaultStyles = css`
  &.react-select-container {
    width: 100%;
    height: 100%;
    border: none;
  }

  .react-select__control {
    width: 100%;
    border: none;
    box-shadow: none;
    display: flex;
    flex-direction: row;
    min-height: 64px;
    align-items: flex-end;

    :hover {
      border: none;
    }
  }

  .react-select__value-container {
    padding: 0;
    font-size: 20px;
    min-height: 64px;
    padding-left: 16px;
  }

  .react-select__placeholder {
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: transparent;
    font-size: 16px;
  }

  .react-select__input {
    color: ${colors.slate};
    padding: 0px;
    font-size: 16px;
    margin-top: 18px;
  }

  .react-select__single-value {
    color: ${colors.slate};
    font-size: 16px;
    transform: translateY(5%);
    margin-left: 0;
  }

  .react-select__menu {
    margin-top: 1px;
    border-radius: 4px;
    border-color: ${colors.periwinkle};
    left: -1px;
    width: calc(100% + 2px);
    box-sizing: border-box;
    z-index: 20;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.16);
    border: 0;
    background-color: transparent;
  }

  .react-select__menu-list {
    padding-top: 0px;
    padding-bottom: 0px;
   border: 1px solid ${colors.periwinkle};
    border-radius: 4px;
    top: -1px;
    background-color: #fff;
  }

  .react-select__option {
    padding: 8px 24px;
    line-height: 22px;
    background-color: "transparent";
    cursor: pointer;
    transition: background-color 150ms ease, color 150ms ease;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: ${colors.periwinkle}

    &:hover {
      background-color: ${colors.paleGrey};
      color: ${colors.darkBlue};
    }

    &:active {
      background-color: ${colors.paleGrey};
    }

    &.react-select__option--is-selected {
      background-color: ${colors.primary}
      color: ${colors.primary}
    }

  }

  .react-select__menu-notice {
  }
`;

export const Select = styled(ReactSelect)`
  ${defaultStyles}
`;

export const SelectAsync = styled(ReactSelectAsync)`
  ${defaultStyles}
`;

export const SelectCreatable = styled(ReactSelectCreatable)`
  ${defaultStyles}
`;

export const SelectAsyncCreatable = styled(ReactSelectAsyncCreatable)`
  ${defaultStyles}
`;
