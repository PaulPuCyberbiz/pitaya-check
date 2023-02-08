import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';

import PitayaConfirm from '@src/components/pitayas/PitayaConfirm';
import FileIcon from '@src/components/pitayas/pitayaUploadModal/FileIcon';
import { useTranslation } from 'react-i18next';
import PitayaButton from '@src/components/pitayas/PitayaButton';
import { DropEvent, DropzoneOptions, useDropzone } from 'react-dropzone';
import { convertBytesTo, Unit } from '@src/helpers';

interface PitayaUploadModalProps {
  show: boolean;
  onClose: () => void;
  className?: string;
  modalTitle?: ReactNode;
  modalDescription?: ReactNode;
  onAccept?: (imageFile: File, event?: DropEvent) => void;
  onReject?: (file: File, event: DropEvent) => void;
  accept?: DropzoneOptions['accept'];
  maxSize?: DropzoneOptions['maxSize'];
  dropzoneOptions?: Omit<DropzoneOptions, 'maxSize' | 'accept'>;
}

const StyledConfirm = styled(PitayaConfirm)`
  .modal-container {
    width: 640px;
    @media (max-width: 640px) {
      width: calc(100vw - 20px);
    }

    > .formModal {
      max-width: unset;
      width: 100%;
    }
  }

  h4.pitaya-upload-modal-title {
    font-size: 15px;
    font-weight: bold;
    line-height: 1;
    color: #3c5587;
    margin-bottom: 14px;
  }

  p.pitaya-upload-modal-description {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    color: #8e99ad;
  }

  .pitaya-upload-modal-dropzone {
    margin: 0 auto;
    width: 100%;
    border-radius: 10px;
    border: dashed 1px #d6dff2;
    padding: 50px 0;
    text-align: center;

    .drag-to-upload-hint {
      margin-top: 27px;
      font-size: 14px;
      font-weight: 500;
      line-height: 1;
      color: #8e99ad;
    }

    .file-max-size-hint {
      margin-top: 8px;
      line-height: 1;
      text-align: center;
      color: #8e99ad;
    }

    .file-name {
      margin-top: 27px;
      font-size: 14px;
      font-weight: 500;
      line-height: 1;
      color: #8e99ad;
    }

    .open-file-selector-button {
      margin-top: 16px;
    }
  }
`;

const PitayaUploadModal = (props: PitayaUploadModalProps) => {
  const {
    modalTitle,
    modalDescription,
    show,
    onClose,
    accept,
    maxSize,
    onReject = () => {},
    onAccept = () => {},
    dropzoneOptions,
    className: classNameFromProps,
  } = props;
  const { t } = useTranslation('Pitaya');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const wrappedOnClose = () => {
    onClose();
    setSelectedFile(null);
  };
  const wrappedOnAccept = () => {
    if (!selectedFile) {
      return;
    }

    onAccept(selectedFile);
    onClose();
    setSelectedFile(null);
  };
  const onDrop = async (
    acceptedFiles: File[],
    rejectedFiles: File[],
    event: DropEvent,
  ) => {
    if (acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0]);
    } else if (rejectedFiles.length > 0) {
      onReject(rejectedFiles[0], event);
    }
  };
  const { getRootProps, getInputProps, open } = useDropzone({
    multiple: false,
    noClick: true,
    noKeyboard: true,
    onDrop,
    accept,
    maxSize,
    ...dropzoneOptions,
  });
  const className = ['pitaya-upload-modal', classNameFromProps]
    .filter(Boolean)
    .join(' ');
  const message = (
    <div className="pitaya-upload-modal-content" {...getRootProps()}>
      {modalTitle && (
        <h4 className="pitaya-upload-modal-title">{modalTitle}</h4>
      )}
      {modalDescription && (
        <p className="pitaya-upload-modal-description">{modalDescription}</p>
      )}
      <div className="pitaya-upload-modal-dropzone">
        <FileIcon />
        {selectedFile ? (
          <div className="file-name">{selectedFile.name}</div>
        ) : (
          <>
            <div className="drag-to-upload-hint">
              {t('PitayaUploadModal_dragToUpload')}
            </div>
            {maxSize && (
              <div className="file-max-size-hint">
                {t('PitayaUploadModal_fileMaxSizeHint', {
                  mb: convertBytesTo(maxSize, Unit.MB),
                })}
              </div>
            )}
          </>
        )}
        <PitayaButton
          className="open-file-selector-button"
          buttonState="secondary"
          buttonSize="medium"
          value={t('PitayaUploadModal_selectFile')}
          onClick={open}
        />
        <input {...getInputProps()} />
      </div>
    </div>
  );

  return (
    <StyledConfirm
      className={className}
      show={show}
      no={wrappedOnClose}
      yes={wrappedOnAccept}
      message={message}
    />
  );
};
export default PitayaUploadModal;
