import React, {
  CSSProperties,
  HTMLProps,
  PropsWithChildren,
  ReactElement,
  ReactFragment,
  useEffect,
  useState,
  Fragment,
} from 'react';

import styles from '@src/assets/stylesheets/pitayas/PitayaPreviewModal.module.scss';

import PitayaButton from '@src/components/pitayas/PitayaButton';
import { Icon } from '@src/components/pitayas/pitayaIcons/Icon';
import { NonEmptyArray } from '@src/types/BaseTypes';
import { useTranslation } from 'react-i18next';
import PitayaTooltip from '@src/components/pitayas/PitayaTooltip';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

export enum PreviewType {
  mobile = 'mobile',
  tablet = 'tablet',
  desktop = 'desktop',
}

const typeToContainerStyle: { [key in PreviewType]: CSSProperties } = {
  [PreviewType.mobile]: { width: '576px' },
  [PreviewType.tablet]: { width: '768px' },
  [PreviewType.desktop]: { width: '992px' },
};

export interface PitayaPreviewModalProps extends HTMLProps<HTMLDivElement> {
  show: boolean;
  setShow: (show: boolean) => void;
  acceptTypes?: NonEmptyArray<PreviewType>;
  overrideHeaderItems?: (
    typeButtons: ReactElement[],
    closeButton: ReactElement,
  ) => ReactFragment;
}

const nullOverrideHeaderItems = (
  typeButtons: ReactElement[],
  closeButton: ReactElement,
) => {
  return (
    <>
      {typeButtons}
      {closeButton}
    </>
  );
};

const getScaleRatio = (type: PreviewType) => {
  const viewWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0,
  );
  const { width } = typeToContainerStyle[type];
  const margin = 50;
  let containerWidth: number;

  if (typeof width === 'string') {
    containerWidth = width.endsWith('px') ? Number(width.split('px')[0]) : 0;
  } else if (typeof width === 'number') {
    containerWidth = width as number;
  } else {
    containerWidth = 0;
  }

  return containerWidth > viewWidth - margin
    ? (viewWidth - margin) / containerWidth
    : 1;
};

const HigherPitayaToolTip = styled(PitayaTooltip)`
  z-index: 1050 !important;
`;

const PitayaPreviewModal = (
  props: PropsWithChildren<PitayaPreviewModalProps>,
) => {
  const {
    className: classNameFromProps,
    show,
    setShow,
    acceptTypes = Object.values(PreviewType),
    overrideHeaderItems = nullOverrideHeaderItems,
    children,
    ...otherProps
  } = props;
  const className = [
    styles.pitayaPreviewModal,
    classNameFromProps,
    show && 'show',
  ]
    .filter(Boolean)
    .join(' ');
  const { t } = useTranslation('Pitaya');
  const [previewType, setPreviewType] = useState<PreviewType>(acceptTypes[0]);
  const [scaleRatio, setScaleRatio] = useState(1);
  const typeButtons = acceptTypes.map(type => {
    const updatePreviewType = () => {
      const ratio = getScaleRatio(type);

      setPreviewType(type);
      setScaleRatio(ratio);
    };

    const iconClass = ['preview-type-btn', previewType === type && 'previewing']
      .filter(Boolean)
      .join(' ');
    return (
      <Fragment key={type}>
        <span
          className={iconClass}
          onClick={updatePreviewType}
          data-tip={true}
          data-for={`type-button-${type}`}
        >
          <Icon type={type} />
        </span>
        <HigherPitayaToolTip
          id={`type-button-${type}`}
          effect="solid"
          place="bottom"
        >
          {t(`PitayaPreviewModal_${type}`)}
        </HigherPitayaToolTip>
      </Fragment>
    );
  });
  const closeButton = (
    <PitayaButton
      onClick={() => setShow(false)}
      value={t('PitayaPreviewModal_close_preview')}
    />
  );
  const previewContainerStyle = typeToContainerStyle[previewType];

  // update scale ratio when window resize
  useEffect(() => {
    const handleWindowResize = () => {
      const ratio = getScaleRatio(previewType);
      setScaleRatio(ratio);
    };

    handleWindowResize(); // init
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [previewType]);

  const previewModal = (
    <div className={className} {...otherProps}>
      <div className="preview-modal-header">
        {overrideHeaderItems(typeButtons, closeButton)}
      </div>
      <div
        className="preview-container"
        style={{
          transform: `translateX(-50%) scale(${scaleRatio})`,
          ...previewContainerStyle,
        }}
      >
        <div className="preview-content">{children}</div>
      </div>
    </div>
  );

  return (
    <CSSTransition
      in={show}
      timeout={300}
      classNames={{
        enter: styles['modal-enter'],
        enterActive: styles['modal-enter-active'],
        exit: styles['modal-exit'],
        exitActive: styles['modal-exit-active'],
      }}
      unmountOnExit={true}
    >
      {previewModal}
    </CSSTransition>
  );
};
export default PitayaPreviewModal;
