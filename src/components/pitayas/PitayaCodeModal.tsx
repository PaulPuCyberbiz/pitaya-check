import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import PitayaModal, {
  PitayaModalProps,
} from '@src/components/pitayas/PitayaModal';
import PitayaButton from '@src/components/pitayas/PitayaButton';

export interface IframeModalProps
  extends Omit<PitayaModalProps, 'children' | 'onCopy'> {
  code: string;
  title?: string;
  onCopy?: (text: string) => void;
}

const ContentContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.5);
  min-width: 640px;
  position: relative;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 14px;
  top: 14px;
  opacity: 0.8;
  height: 17px;
  width: 17px;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    content: ' ';
    height: 17px;
    width: 2px;
    background-color: #5b7ce3;
    left: calc(50% - 1px);
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

const CopyButton = styled(PitayaButton)`
  && {
    box-sizing: border-box;
    width: 60px;
    height: 32px;
    border-radius: 5px;
    border: solid 1px #5b7ce3;
    background-color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    color: #5b7ce3;
  }
`;

const Title = styled.h5`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0.28px;
  color: #3c5587;
`;

const CodeBlock = styled.pre`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.71;
  color: #8e99ad;
  border-radius: 5px;
  border: solid 1px #dedee0;
  background-color: #ededee;
  padding: 16px;
  margin-bottom: 16px;
  overflow: auto;
  max-height: 80vh;
  min-width: 640px;
  max-width: 80vw;
`;

const PitayaCodeModal = (props: IframeModalProps) => {
  const { onClose, title, code, onCopy = () => {}, ...otherProps } = props;
  const { t } = useTranslation('Pitaya');
  const copyCode = () => onCopy(code);

  return (
    <PitayaModal {...otherProps}>
      <ContentContainer>
        <CloseButton onClick={onClose} />
        <Title>{title}</Title>
        <CodeBlock>{code}</CodeBlock>
        <CopyButton
          buttonSize="small"
          onClick={copyCode}
          buttonState="secondary"
          value={t('PitayaCodeModal_copy')}
        />
      </ContentContainer>
    </PitayaModal>
  );
};

export default PitayaCodeModal;
