import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import {
  Photo,
  CreatedPhoto,
} from '@src/components/pitayas/PitayaUploadPhotos/Photo';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import PhotoSortableItem from '@src/components/pitayas/PitayaUploadPhotos/PhotoSortableItem';
import DropZone from '@src/components/pitayas/PitayaUploadPhotos/DropZone';
import styles from '@src/assets/stylesheets/pitayas/PitayaUploadPhotos.module.scss';

interface PitayaUploadPhotosProps {
  photos: Photo[];
  perPhotoMaxSize?: number;
  totalPhotosMaxSize?: number;
  hint?: string;
  onAddPhoto: (photos: CreatedPhoto[]) => void;
  onDelPhoto: (id: number) => void;
  onPositionChange: (oldIndex: number, newIndex: number) => void;
  onImageTooLarge: () => void;
  onTotalImagesTooLarge?: () => void;
}

const PitayaUploadPhotos = (props: PitayaUploadPhotosProps) => {
  const {
    photos = [],
    perPhotoMaxSize,
    totalPhotosMaxSize,
    hint,
    onAddPhoto,
    onDelPhoto,
    onPositionChange,
    onImageTooLarge,
    onTotalImagesTooLarge,
  } = props;

  const SortableList = SortableContainer(
    ({ children }: JSX.ElementChildrenAttribute) => {
      return <div className="sortable-container">{children}</div>;
    },
  );

  return (
    <PitayaGroup className={styles['pitaya-upload-photos']}>
      <SortableList
        helperClass="product-upload-helper"
        onSortEnd={({ oldIndex, newIndex }) =>
          onPositionChange(oldIndex, newIndex)
        }
        useDragHandle={true}
        axis={'xy'}
      >
        {photos &&
          photos.map((photo, index) => (
            <PhotoSortableItem
              key={photo.id}
              index={index}
              photo={photo}
              onDelete={onDelPhoto}
            />
          ))}
      </SortableList>
      <DropZone
        photos={photos}
        perPhotoMaxSize={perPhotoMaxSize}
        totalPhotoMaxSize={totalPhotosMaxSize}
        onTotalImagesTooLarge={onTotalImagesTooLarge}
        hint={hint}
        dropzoneOptions={{
          maxSize: perPhotoMaxSize,
          onDropRejected: () => onImageTooLarge(),
        }}
        onUpload={onAddPhoto}
      />
    </PitayaGroup>
  );
};

export default PitayaUploadPhotos;
