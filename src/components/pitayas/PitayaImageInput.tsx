import React, {
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DropEvent, useDropzone, DropzoneOptions } from 'react-dropzone';

import PitayaButton from '@src/components/pitayas/PitayaButton';
import { getDataUrl } from '@src/helpers';
import CrossIcon from '@src/components/pitayas/pitayaImageInput/CrossIcon';
import ImageIcon from '@src/components/pitayas/pitayaImageInput/ImageIcon';
import { useTranslation } from 'react-i18next';
import PitayaFlex, { FlexAlignItems } from '@src/components/pitayas/PitayaFlex';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';

type LayoutType = 'card' | 'horizontal';
type ThemeMap = { type: LayoutType };

const themeMap: { [key in LayoutType]: ThemeMap } = {
  card: { type: 'card' },
  horizontal: { type: 'horizontal' },
};

const isCard = (theme: ThemeMap) => theme.type === 'card';

export interface PitayaImageInputProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  previewImage?: string | File | null;
  onAccept?: (imageFile: File | null, event?: DropEvent) => void;
  onReject?: (file: File, event: DropEvent) => void;
  layout?: LayoutType;
  disabled?: boolean;
  dropzoneOptions?: DropzoneOptions;
  layoutClassName?: string;
}

type LayoutProps = PropsWithChildren<{
  previewSrc: string | null;
  label?: string;
  open: () => void;
  clear: () => void;
  disabled: boolean;
  layoutClassName?: string;
}>;

const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  min-width: ${({ theme }) => (isCard(theme) ? '275px' : 'auto')};
  text-align: ${({ theme }) => (isCard(theme) ? 'center' : 'left')};
  box-sizing: border-box;
  position: relative;
  :after {
    content: '';
    display: ${({ theme }) => (isCard(theme) ? 'block' : 'none')};
    padding-bottom: 100%;
  }
  .pitayaGroup {
    margin-bottom: 0;
    margin-right: 13px;
    &:last-child {
      margin-right: 0;
    }
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const Content = styled.div`
  align-items: center;
  border-radius: 5px;
  border: solid 1px #d6dff2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${({ theme }) => (isCard(theme) ? '100%' : '130px;')};
  position: ${({ theme }) => (isCard(theme) ? 'absolute' : 'relative')};
  width: ${({ theme }) => (isCard(theme) ? '100%' : '130px;')};
  svg {
    width: ${({ theme }) => (isCard(theme) ? '33.3%' : '100px')};
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 576px) {
    margin-bottom: 10px;
  }
`;

const Label = styled.h6`
  font-size: 16px;
  line-height: 1;
  color: #5b7ce3;
  font-weight: 500;
  margin-bottom: 24px;
`;

const DragHint = styled.p`
  && {
    margin-top: 16px;
    margin-bottom: 6px;
    font-weight: 500;
    line-height: 1.71;
    color: #8e99ad;
    font-size: 14px;
  }
`;

const UploadButton = styled(PitayaButton)`
  && {
    margin-top: ${({ theme }) => (isCard(theme) ? '8px' : '6px')};
    margin-left: auto;
    padding: 0;
    margin-right: auto;
    width: ${({ theme }) => (isCard(theme) ? '116px' : '100px')};
    height: 32px;
  }
`;

const InputContainer = styled.div<{ isDragging: boolean }>`
  z-index: 1000;
  pointer-events: ${({ isDragging }) => (isDragging ? 'auto' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: ${({ theme }) => (isCard(theme) ? 'auto' : '-10px')};
`;

const StyledCrossIcon = styled(CrossIcon)`
  ${Content}:hover & {
    &:before,
    &:after {
      background-color: #f2f6fc;
    }
  }
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.3s;

  ${Content}:hover & {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const CardLayout = (layoutProps: LayoutProps) => {
  const { t } = useTranslation('Pitaya');
  const {
    previewSrc,
    label,
    open,
    clear,
    disabled,
    children,
    layoutClassName,
  } = layoutProps;

  return (
    <>
      {!previewSrc && (
        <Content className={layoutClassName}>
          {label && <Label>{label}</Label>}
          <ImageIcon className="mb-16px" />
          {!disabled && <DragHint>{t('PitayaImageInput_drag_hint')}</DragHint>}
          {children}
          {!disabled && (
            <UploadButton
              buttonState="secondary"
              value={t('PitayaImageInput_upload')}
              onClick={open}
            />
          )}
        </Content>
      )}
      {previewSrc && (
        <Content>
          {!disabled && (
            <>
              <Backdrop />
              <StyledCrossIcon onClick={clear} />
            </>
          )}
          <PreviewImage src={previewSrc} />
        </Content>
      )}
    </>
  );
};

const HorizontalLayout = (themeProps: LayoutProps) => {
  const { previewSrc, open, clear, disabled, children, layoutClassName } =
    themeProps;
  const { t } = useTranslation('Pitaya');

  return (
    <PitayaFlex flexAlignItems={FlexAlignItems.START}>
      <PitayaGroup>
        {!previewSrc && (
          <Content className={layoutClassName}>
            <ImageIcon />
            {!disabled && (
              <UploadButton
                buttonState="secondary"
                value={t('PitayaImageInput_upload')}
                onClick={open}
              />
            )}
          </Content>
        )}
        {previewSrc && (
          <Content>
            {!disabled && (
              <>
                <Backdrop />
                <StyledCrossIcon onClick={clear} />
              </>
            )}
            <PreviewImage src={previewSrc} />
          </Content>
        )}
      </PitayaGroup>
      <PitayaGroup>{children}</PitayaGroup>
    </PitayaFlex>
  );
};

const PitayaImageInput = (props: PropsWithChildren<PitayaImageInputProps>) => {
  const {
    children,
    label,
    previewImage,
    onAccept = () => {},
    onReject = () => {},
    layout = 'card',
    disabled = false,
    dropzoneOptions,
    layoutClassName,
    ...divProps
  } = props;
  const theme = themeMap[layout];
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancel = false;

    // prevent race condition
    const setPreviewSrcIfNotCancelled = (src: string | null) => {
      if (!cancel) {
        setPreviewSrc(src);
      }
    };

    if (typeof previewImage === 'string') {
      // for URL
      setPreviewSrcIfNotCancelled(previewImage);
    } else if (previewImage !== null && typeof previewImage === 'object') {
      // for File
      getDataUrl(previewImage).then(setPreviewSrcIfNotCancelled);
    } else {
      // for undefined type
      setPreviewSrcIfNotCancelled(null);
    }
    return () => {
      cancel = true;
    };
  }, [previewImage]);

  const [dragCount, setDragCount] = useState(0);
  const onDrop = async (
    acceptedFiles: File[],
    rejectedFiles: File[],
    event: DropEvent,
  ) => {
    if (acceptedFiles.length > 0) {
      const imageFile = acceptedFiles[0];

      try {
        const dataUrl = await getDataUrl(imageFile);
        setPreviewSrc(dataUrl);
        onAccept(imageFile, event);
      } catch (e) {
        setPreviewSrc(null);
        onReject(imageFile, event);
      }
    } else if (rejectedFiles.length > 0) {
      onReject(rejectedFiles[0], event);
    }
  };
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: ['image/jpeg', 'image/png', 'image/gif'],
    multiple: false,
    noClick: true,
    noKeyboard: true,
    onDrop,
    ...dropzoneOptions,
  });
  const clear = () => {
    setPreviewSrc(null);
    onAccept(null);
  };
  const themeProps = {
    theme,
    previewSrc,
    label,
    layoutClassName,
    open,
    clear,
    disabled,
    children,
  };

  // Drag 圖片進入時才啟用 dropzone 的 drop 區域，否則 input 上的 UI 將被遮住無法點擊
  const onDragEnter = () => {
    setDragCount(count => count + 1);
  };
  const onDragLeave = () => {
    setDragCount(count => count - 1);
  };
  const isDragging = dragCount > 0;

  return (
    <ThemeProvider theme={theme}>
      <Container
        {...divProps}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDragLeave}
      >
        <InputContainer
          {...getRootProps()}
          tabIndex={undefined}
          isDragging={isDragging}
        >
          <input {...getInputProps()} disabled={disabled} />
        </InputContainer>
        {layout === 'card' && <CardLayout {...themeProps} />}
        {layout === 'horizontal' && <HorizontalLayout {...themeProps} />}
      </Container>
    </ThemeProvider>
  );
};
PitayaImageInput.Description = styled.p`
  && {
    font-size: 13px;
    letter-spacing: 0.24px;
    color: #8e99ad;
  }
`;

export default PitayaImageInput;
