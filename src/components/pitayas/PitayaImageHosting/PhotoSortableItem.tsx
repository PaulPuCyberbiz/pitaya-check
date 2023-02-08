import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import PitayaDragIcon from '@src/components/pitayas/PitayaDragIcon';
import classNames from 'classnames';
import CrossIcon from '@src/components/pitayas/pitayaImageInput/CrossIcon';
import { ShopThemePhoto } from '@src/components/pitayas/PitayaImageHosting/ShopThemePhoto';

type ProductPhotoSortableItemProps = {
  photo: ShopThemePhoto;
  draggable: boolean;
  photoItemRef?: React.RefObject<HTMLDivElement>;
  selectedOrder?: number;
  isSelected?: boolean;
  onDelete: (id: number) => void;
  onSelect: (id: number) => void;
};

const DragHandle = SortableHandle(() => <PitayaDragIcon />);

const ProductPhotoSortableItem = (props: ProductPhotoSortableItemProps) => {
  const {
    photo,
    draggable,
    photoItemRef,
    isSelected,
    selectedOrder,
    onSelect,
    onDelete,
  } = props;

  const isSingleSelected = isSelected && selectedOrder === undefined;
  const isMultipleSelected = isSelected && selectedOrder !== undefined;

  return (
    <div
      className={classNames('photo-display', { selected: isSelected })}
      ref={photoItemRef}
      onClick={() => onSelect(photo.id)}
    >
      <img src={photo.imagePath} />
      <div className="icons">
        <span
          className={classNames('circle', {
            'selected': isSelected,
            'selected-single': isSingleSelected,
            'selected-multiple': isMultipleSelected,
          })}
        >
          {isMultipleSelected && (
            <span className="selected-order">{selectedOrder}</span>
          )}
        </span>
        <CrossIcon
          className="delete"
          onClick={(e: React.MouseEvent) => {
            onDelete(photo.id as number);
            e.stopPropagation();
          }}
        />
        {draggable && <DragHandle />}
      </div>
    </div>
  );
};

export default SortableElement(ProductPhotoSortableItem);
