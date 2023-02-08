import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDropzone, DropzoneOptions } from 'react-dropzone';
import {
  Photo,
  CreatedPhoto,
} from '@src/components/pitayas/PitayaUploadPhotos/Photo';
import PitayaButton from '@src/components/pitayas/PitayaButton';
import { convertBytesTo, getDataUrl, Unit } from '@src/helpers';
import { Upload } from '@src/components/pitayas/PitayaUploadPhotos/Upload';

type DropZoneProps = {
  photos: Photo[];
  perPhotoMaxSize?: number;
  totalPhotoMaxSize?: number;
  hint?: string;
  dropzoneOptions?: DropzoneOptions;
  onUpload: (photos: CreatedPhoto[]) => void;
  onTotalImagesTooLarge?: () => void;
};

const DropZone = (props: DropZoneProps) => {
  const { t } = useTranslation('Pitaya');
  const {
    photos,
    perPhotoMaxSize = Math.pow(2, 20), // MB
    totalPhotoMaxSize,
    hint,
    dropzoneOptions,
    onUpload,
    onTotalImagesTooLarge,
  } = props;
  const [createdPhotos, setCreatedPhotos] = useState<CreatedPhoto[]>([]);

  useEffect(() => {
    if (createdPhotos.length) {
      onUpload(createdPhotos);
      setCreatedPhotos([]);
    }
  }, [createdPhotos.length]);

  const onDrop = async (files: File[]) => {
    let fileSizeSum = 0;
    let isTotalImagesTooLarge = false;
    const tempPhotos: CreatedPhoto[] = [];
    await Promise.all(
      files.map(async (file, i) => {
        fileSizeSum += file.size;
        if (totalPhotoMaxSize && fileSizeSum > totalPhotoMaxSize) {
          isTotalImagesTooLarge = true;
        } else {
          const photo = await getDataUrl(file);
          tempPhotos[i] = {
            photoUrl: photo,
            size: file.size,
          };
        }
      }),
    );

    if (isTotalImagesTooLarge) {
      onTotalImagesTooLarge?.();
    }
    setCreatedPhotos(tempPhotos);
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
      <div className="title">{t('PitayaUploadPhotos_title')}</div>
      <div className="hint">
        {hint ||
          t('PitayaUploadPhotos_hint', {
            mb: convertBytesTo(perPhotoMaxSize, Unit.MB),
          })}
      </div>
      <PitayaButton buttonState="secondary" buttonSize="medium" onClick={open}>
        {t('PitayaUploadPhotos_upload_image')}
      </PitayaButton>
    </div>
  );
};

export default DropZone;
