import React, { useState, CSSProperties } from 'react';
import styled from 'styled-components';
import PitayaCollapse from '@src/components/pitayas/PitayaCollapse';
import PitayaCheckbox from '@src/components/pitayas/PitayaCheckbox';
import { useOutsideClick } from '@src/hooks';
import { PitayaScrollbarShownWrapper } from '@src/components/pitayas/PitayaScrollbarShownWrapper';

const OptionalColumns = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 100;
`;

const Dropdown = styled.span<{ arrowLength: number }>`
  background: white;
  color: #8f96b0;
  font-size: 14px;
  font-weight: normal;
  padding: 8px 20px 8px 10px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  &:before {
    border: solid #8e99ad;
    border-width: 1px 1px 0 0;
    content: '';
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-70%) rotateZ(135deg);
    transition: transform 0.5s;
    height: ${props => props.arrowLength}px;
    width: ${props => props.arrowLength}px;
  }
  &.collapsed:before {
    transform: translateY(-20%) rotateZ(-45deg);
  }
`;

const Border = styled.div`
  background: white;
  border: solid 1px #d6dff2;
  border-radius: 5px;
`;

const Options = styled.div`
  &:first-child,
  &:last-child {
    margin: 16px 0 16px 0;
  }
  > * {
    margin: 8px 16px 8px 16px;
  }
`;

export type PitayaShowColsCollapseProps = {
  className?: string;
  text: string;

  customStyle?: CSSProperties;
  customTextStyle?: CSSProperties;
  arrowLength?: number;
  maxHeight?: number;

  columns: string[];
  hiddenCols: string[];
  setHiddenCols: (cols: string[]) => void;
  colToLabel: Map<string, string>; // Map state name of its parent to showing name
};

export const PitayaShowColsCollapse = (props: PitayaShowColsCollapseProps) => {
  const {
    className,
    text,
    customStyle,
    customTextStyle,
    arrowLength = 8,
    maxHeight,
    columns,
    hiddenCols,
    setHiddenCols,
    colToLabel,
  } = props;

  const [toggled, setToggled] = useState(false);
  const ref = useOutsideClick(() => setToggled(false));

  const checkboxes = columns.map(col => {
    const checked = !hiddenCols.includes(col);
    const handleChange = () => {
      const hiddenColsNew = checked
        ? hiddenCols.concat(col)
        : hiddenCols.filter(c => c !== col);
      setHiddenCols(hiddenColsNew);
    };
    return (
      <PitayaCheckbox
        key={col}
        label={colToLabel.get(col)}
        checked={checked}
        onChange={handleChange}
      />
    );
  });

  return (
    <OptionalColumns style={customStyle} className={className} ref={ref}>
      <Dropdown
        className={toggled ? 'collapsed' : 'hide'}
        style={customTextStyle}
        arrowLength={arrowLength}
        onClick={() => setToggled(!toggled)}
      >
        {text}
      </Dropdown>
      <PitayaCollapse className="content" isOpen={toggled}>
        <Border>
          <PitayaScrollbarShownWrapper maxHeight={maxHeight}>
            <Options>{checkboxes}</Options>
          </PitayaScrollbarShownWrapper>
        </Border>
      </PitayaCollapse>
    </OptionalColumns>
  );
};
