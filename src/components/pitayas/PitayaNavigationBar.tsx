import React, { useState } from 'react';
import PitayaFlex, {
  FlexDirection,
  FlexJustify,
} from '@src/components/pitayas/PitayaFlex';
import styles from '@src/assets/stylesheets/pitayas/PitayaNavigationBar.module.scss';
import { OptionType } from '@src/types/BaseTypes';

interface NavOptionProps {
  option: OptionType;
  isActive: boolean;
  onClick?: (val: OptionType) => void;
}

const NavOption = (props: NavOptionProps) => {
  const { option, onClick, isActive } = props;

  const className = ['nav-option', isActive && 'active']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={className} onClick={() => onClick?.(option)}>
      {option.label}
    </div>
  );
};

export interface PitayaNavigationBarProps {
  options: OptionType[];
  selectedOption?: OptionType;
  className?: string;
  onClick?: (val: OptionType) => void;
}

const PitayaNavigationBar = (props: PitayaNavigationBarProps) => {
  const {
    options,
    selectedOption: oSelectedOption,
    className,
    onClick,
  } = props;

  const [selectedOption, setSelectedOption] = useState(oSelectedOption);
  const handleClickEvent = (val: OptionType) => {
    setSelectedOption(val);
    onClick?.(val);
  };

  const combinedClassName = [styles.pitayaNavigationBar, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={combinedClassName}>
      <PitayaFlex
        flexDirection={FlexDirection.ROW}
        flexJustify={FlexJustify.SPACE_BETWEEN}
      >
        {options.map(option => (
          <NavOption
            key={option.value}
            option={option}
            isActive={selectedOption?.value === option.value}
            onClick={handleClickEvent}
          />
        ))}
      </PitayaFlex>
    </div>
  );
};

export default PitayaNavigationBar;
