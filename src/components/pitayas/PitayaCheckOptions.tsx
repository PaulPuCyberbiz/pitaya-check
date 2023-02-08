import React from 'react';
import classNames from 'classnames';
import PitayaSelect from '@src/components/pitayas/PitayaSelect';
import PitayaCheckbox from '@src/components/pitayas/PitayaCheckbox';
import { OptionType } from '@src/features/collection/types';
import styles from '@src/assets/stylesheets/pitayas/PitayaCheckOptions.scss';

export interface PitayaCheckOptionsProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'> {
  checked: boolean;
  fontSize?: number;
  halfChecked: boolean;
  label: string;
  options: OptionType[];
  canSelectAllSearch?: boolean;
  onSelect: (s: OptionType) => void;
  onCheck: () => void;
}

export interface PitayaCheckOptionsStates {
  menuIsOpen: boolean;
  minWidth: number;
}

class PitayaCheckOptions extends React.Component<
  PitayaCheckOptionsProps,
  PitayaCheckOptionsStates
> {
  private wrapperRef: React.RefObject<any>;
  private labelRef: React.RefObject<any>;

  constructor(props: PitayaCheckOptionsProps) {
    super(props);
    this.wrapperRef = React.createRef();
    this.labelRef = React.createRef();
    this.state = {
      menuIsOpen: false,
      minWidth: 100,
    };
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    this.setMinWidth();
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  componentDidUpdate() {
    this.setMinWidth();
  }

  setMinWidth() {
    const label = this.labelRef?.current;
    if (label) {
      const minWidth = label.scrollWidth + 60;
      if (this.state.minWidth !== minWidth) {
        this.setState({ minWidth });
      }
    }
  }

  onToggleMenu = () => {
    const { menuIsOpen } = this.state;
    this.setState({
      menuIsOpen: !menuIsOpen,
    });
  };

  onCheck = (event: React.MouseEvent) => {
    const { onCheck } = this.props;
    event.stopPropagation();
    onCheck();
  };

  handleClickOutside(event: MouseEvent) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.setState({
        menuIsOpen: false,
      });
    }
  }

  render(): JSX.Element {
    const { menuIsOpen, minWidth } = this.state;
    const {
      checked,
      className: givenName,
      halfChecked,
      label,
      onSelect,
      options,
      canSelectAllSearch = true,
    } = this.props;

    const className = classNames(styles['pitaya-check-options'], givenName);

    return (
      <div
        ref={this.wrapperRef}
        className={className}
        onClick={this.onToggleMenu}
        style={{ minWidth }}
      >
        <PitayaSelect
          className="pitaya-check-options__select"
          options={options}
          menuIsOpen={canSelectAllSearch ? menuIsOpen : false}
          onChange={onSelect}
          isSearchable={false}
          isHideDropdownIndicator={!canSelectAllSearch}
          selectSize="medium"
          placeholder=""
        />
        <PitayaCheckbox
          className={halfChecked ? 'half-checked' : ''}
          checked={checked}
          onChange={this.onCheck}
        />
        <label ref={this.labelRef} className="pitaya-check-options__label">
          {label}
        </label>
      </div>
    );
  }
}

export default PitayaCheckOptions;
