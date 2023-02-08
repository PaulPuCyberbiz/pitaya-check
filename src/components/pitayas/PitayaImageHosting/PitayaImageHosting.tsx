import React, { useState, useRef } from 'react';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import PhotoSortableItem from '@src/components/pitayas/PitayaImageHosting/PhotoSortableItem';
import styles from '@src/assets/stylesheets/pitayas/PitayaImageHosting.scss';
import DropZone, {
  DropZoneProps,
} from '@src/components/pitayas/PitayaImageHosting/DropZone';
import PitayaConfirm from '@src/components/pitayas/PitayaConfirm';
import { useTranslation } from 'react-i18next';
import DescriptionBlock from '@src/components/DescriptionBlock';
import { ShopThemePhoto } from '@src/components/pitayas/PitayaImageHosting/ShopThemePhoto';
import { SortableList } from '@src/components/pitayas/PitayaImageHosting/SortableList';
import { useIntersectionObserver } from '@src/hooks';

export type PitayaImageHostingProps = DropZoneProps & {
  photos?: ShopThemePhoto[];
  draggable?: boolean;
  selectedPhotoId?: number;
  selectedSortedPhotos?: ShopThemePhoto[];
  onSelectPhoto: (id: number) => void;
  onDelPhoto: (id: number) => void;
  onPositionChange?: (oldIndex: number, newIndex: number) => void;
  onImageTooLarge: (files: File[]) => void;
  onScrollToBottom?: () => void;
};

export const PitayaImageHosting = (props: PitayaImageHostingProps) => {
  const {
    photos = [],
    perPhotoMaxSize,
    allPhotoMaxSize,
    draggable = true,
    selectedPhotoId,
    showHint,
    selectedSortedPhotos,
    onSelectPhoto,
    onAddPhoto,
    onDelPhoto,
    onPositionChange,
    onImageTooLarge,
    onTotalImageTooLarge,
    onScrollToBottom,
  } = props;

  const [show, setShow] = useState(false);
  const [deletePhotoId, setDeletePhotoId] = useState(0);
  const { t } = useTranslation('Pitaya');
  const photoItemRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver(
    [photoItemRef],
    entries => {
      if (entries[0].isIntersecting && onScrollToBottom) {
        onScrollToBottom();
      }
    },
    { threshold: 1 },
    [photos.length],
  );

  const onDelete = (id: number) => {
    setShow(true);
    setDeletePhotoId(id);
  };

  return (
    <PitayaGroup className={styles['pitaya-image-hosting']}>
      <DropZone
        photos={photos}
        perPhotoMaxSize={perPhotoMaxSize}
        allPhotoMaxSize={allPhotoMaxSize}
        showHint={showHint}
        dropzoneOptions={{
          maxSize: perPhotoMaxSize,
          onDropRejected: files => onImageTooLarge(files),
        }}
        onAddPhoto={onAddPhoto}
        onTotalImageTooLarge={onTotalImageTooLarge}
      />
      <SortableList
        helperClass="product-upload-helper"
        onSortEnd={({ oldIndex, newIndex }) =>
          onPositionChange && onPositionChange(oldIndex, newIndex)
        }
        useDragHandle={true}
        axis={'xy'}
      >
        {photos.map((photo, index) => (
          <PhotoSortableItem
            photoItemRef={
              index === photos.length - 1 ? photoItemRef : undefined
            }
            key={photo.id}
            index={index}
            photo={photo}
            draggable={draggable}
            isSelected={
              photo.id === selectedPhotoId ||
              selectedSortedPhotos?.map(p => p.id).includes(photo.id)
            }
            selectedOrder={
              selectedSortedPhotos?.find(p => p.id === photo.id)?.position
            }
            onSelect={onSelectPhoto}
            onDelete={id => onDelete(id)}
          />
        ))}
      </SortableList>
      <PitayaConfirm
        className="confirm-modal"
        closeOnBackDrop={false}
        show={show}
        yes={() => onDelPhoto(deletePhotoId)}
        yesText={t('PitayaIconBtn_delete')}
        no={() => setShow(false)}
        close={() => setShow(false)}
      >
        <DescriptionBlock.Title />
        <DescriptionBlock.Description className="confirm-description">
          {t('PitayaUploadModal_delete_confirm')}
        </DescriptionBlock.Description>
      </PitayaConfirm>
    </PitayaGroup>
  );
};
