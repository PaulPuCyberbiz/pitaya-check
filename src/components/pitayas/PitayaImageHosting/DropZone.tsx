import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDropzone, DropzoneOptions } from 'react-dropzone';
import PitayaButton from '@src/components/pitayas/PitayaButton';
import { convertBytesTo, getDataUrl, Unit } from '@src/helpers';
import { Upload } from '@src/components/pitayas/PitayaUploadPhotos/Upload';
import {
  CreatedPhoto,
  ShopThemePhoto,
} from '@src/components/pitayas/PitayaImageHosting/ShopThemePhoto';

export type DropZoneProps = {
  photos: ShopThemePhoto[];
  perPhotoMaxSize?: number;
  allPhotoMaxSize?: number;
  dropzoneOptions?: DropzoneOptions;
  showHint?: boolean;
  onAddPhoto: (photos: CreatedPhoto[]) => void;
  onTotalImageTooLarge: () => void;
};

const DropZone = (props: DropZoneProps) => {
  const { t } = useTranslation('Pitaya');
  const {
    photos,
    perPhotoMaxSize = Math.pow(2, 20), // MB
    allPhotoMaxSize,
    dropzoneOptions,
    showHint = true,
    onAddPhoto,
    onTotalImageTooLarge,
  } = props;

  const onDrop = async (files: File[]) => {
    let totalSize = 0;
    if (files.length === 0) {
      return;
    }
    const tempPhotos: CreatedPhoto[] = await Promise.all(
      files.map(async file => {
        totalSize += file.size;
        const photo = await getDataUrl(file);
        return {
          name: file.name,
          photoBase64: photo,
          size: file.size,
        };
      }),
    );
    if (allPhotoMaxSize && totalSize >= allPhotoMaxSize) {
      onTotalImageTooLarge();
    } else {
      onAddPhoto(tempPhotos);
    }
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    accept: ['image/*'],
    onDrop,
    ...dropzoneOptions,
  });

  return (
    <div {...getRootProps()} className="photo-upload-area">
      <input {...getInputProps()} />
      {photos.length === 0 && <Upload />}
      <PitayaButton buttonState="secondary" buttonSize="medium" onClick={open}>
        {t('PitayaUploadPhotos_upload_image')}
      </PitayaButton>
      <div className="title">{t('PitayaUploadPhotos_title')}</div>
      {showHint && (
        <div className="hint">
          {t('PitayaUploadPhotos_hint', {
            mb: convertBytesTo(perPhotoMaxSize, Unit.MB),
          })}
        </div>
      )}
    </div>
  );
};

export default DropZone;
