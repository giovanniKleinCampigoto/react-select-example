import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ArrowDown from "../Icons/ArrowDown";
import colors from "../../colors";

const IconArrow = styled(ArrowDown)`
  margin-right: 8px;
  width: 24px;
  height: auto;
  transition: transform 200ms;
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 350px;
`;

const Label = styled.label`
  position: absolute;
  font-size: 16px;
  color: #000;
  z-index: 9;
  top: 10px;
  left: 16px;
`;

const Wrapper = styled.div`
  height: 100vh;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const factory = (SelectComponent) => {
  class Select extends PureComponent {
    render() {
      const {
        className,
        title,
        isClearable,
        components,
        isLoading,
        style,
        label,
        arrowColor,
        variant,
        placeholder,
        hint,
        ...rest
      } = this.props;

      return (
        <Wrapper>
          <SelectWrapper>
            <Label>Select</Label>
            <SelectComponent
              variant={variant}
              placeholder={placeholder}
              className='react-select-container'
              classNamePrefix='react-select'
              components={{
                IndicatorSeparator: null,
                DropdownIndicator: (props) =>
                  props.selectProps.menuIsOpen ? (
                    <IconArrow
                      stroke={variant === "error" ? colors.salmon : colors.periwinkle}
                      style={{ transform: "rotate(180deg)" }}
                    />
                  ) : (
                    <IconArrow stroke={variant === "error" ? colors.salmon : colors.periwinkle} />
                  ),
                LoadingIndicator: null,
                ...components,
              }}
              isClearable={isClearable}
              isLoading={isLoading}
              noOptionsMessage={() => "Sem registros"}
              {...rest}
            />
          </SelectWrapper>
        </Wrapper>
      );
    }
  }

  /* overrides some of the default props */
  Select.propTypes = {
    isClearable: PropTypes.bool,
    isLoading: PropTypes.bool,
    components: PropTypes.shape({}),
  };

  Select.defaultProps = {
    isClearable: false,
    isLoading: false,
    components: {},
  };

  return Select;
};

export default factory;
