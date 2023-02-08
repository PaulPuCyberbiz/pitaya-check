import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import { Photo } from '@src/components/pitayas/PitayaUploadPhotos/Photo';
import PitayaDragIcon from '@src/components/pitayas/PitayaDragIcon';

type PhotoSortableItemProps = {
  photo: Photo;
  onDelete: (id: number) => void;
};

const DragHandle = SortableHandle(() => <PitayaDragIcon />);

const PhotoSortableItem = (props: PhotoSortableItemProps) => {
  const { photo, onDelete } = props;

  return (
    <div className="photo-display">
      <img src={photo.medium ? photo.medium : photo.base64Data} />
      <div className="icons">
        <DragHandle />
        <span className="delete" onClick={() => onDelete(photo.id)}>
          ╳
        </span>
      </div>
    </div>
  );
};

export default SortableElement(PhotoSortableItem);
