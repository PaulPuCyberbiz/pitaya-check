import React, { HTMLProps, Ref } from 'react';
import styles from '@src/assets/stylesheets/pitayas/PitayaFlex.module.scss';

export enum FlexDirection {
  ROW = 'flex-row',
  COLUMN = 'flex-col',
  ROW_REVERSE = 'flex-row-reverse',
  COLUMN_REVERSE = 'flex-col-reverse',
}

export enum FlexJustify {
  START = 'justify-start',
  END = 'justify-end',
  CENTER = 'justify-center',
  SPACE_BETWEEN = 'justify-space-between',
}

export enum FlexAlignItems {
  START = 'align-items-start',
  END = 'align-items-end',
  CENTER = 'align-items-center',
  BASELINE = 'align-items-baseline',
  STRETCH = 'align-items-stretch',
}

export enum FlexAlignSelf {
  AUTO = 'auto',
  NORMAL = 'normal',
}

export type FlexProps =
  | number
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | undefined;

interface PitayaFlexItemProps extends React.HTMLAttributes<HTMLElement> {
  grow?: FlexProps;
  shrink?: FlexProps;
  basis?: number | string;
  order?: number | 'inherit';
  alignSelf?: FlexAlignSelf;
}

export const PitayaFlexItem = (props: PitayaFlexItemProps) => {
  const {
    grow = 0,
    shrink = 1,
    basis = 'auto',
    order = 0,
    alignSelf = FlexAlignSelf.AUTO,
    style,
    ...rest
  } = props;

  return (
    <div
      style={{
        ...style,
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        order: order,
        alignSelf: alignSelf,
      }}
      {...rest}
    >
      {props.children}
    </div>
  );
};

interface PitayaFlexProps extends HTMLProps<HTMLDivElement> {
  id?: string;
  className?: string;
  flexDirection?: FlexDirection;
  flexJustify?: FlexJustify;
  flexAlignItems?: FlexAlignItems;
}
interface PitayaFlexForward
  extends React.ForwardRefExoticComponent<
    PitayaFlexProps & React.RefAttributes<HTMLDivElement>
  > {
  Item?: typeof PitayaFlexItem;
}

const PitayaFlex: PitayaFlexForward = React.forwardRef(
  (props: PitayaFlexProps, ref: Ref<HTMLDivElement>) => {
    const {
      flexDirection = FlexDirection.ROW,
      flexJustify = FlexJustify.START,
      flexAlignItems = FlexAlignItems.CENTER,
      className: classNameFromProps,
      ...divProps
    } = props;

    const className = [
      classNameFromProps,
      flexDirection,
      flexJustify,
      flexAlignItems,
      styles['pitaya-flex'],
    ]
      .filter(Boolean)
      .join(' ');

    return <div id={props.id} className={className} {...divProps} ref={ref} />;
  },
);

PitayaFlex.Item = PitayaFlexItem;
PitayaFlex.displayName = 'PitayaFlex';

export default PitayaFlex;
