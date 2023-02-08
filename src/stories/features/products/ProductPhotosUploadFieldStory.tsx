import React, { useState } from 'react';
import ProductPhotosUploadField from '@src/features/products/components/ProductPhotosUploadField';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import { FileData } from '@src/components/pitayas/PitayaFileInput';

const ProductPhotosUploadFieldStory = () => {
  const [photosData, setPhotosData] = useState<FileData[]>([]);
  const onDrop = (photos: File[]) => {
    const temp: FileData[] = photosData;
    photos.forEach(photo => {
      temp.push({
        file: photo,
        src: 'https://media2.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif?cid=790b7611e1635ffca6996fe4e2ccbdca1352380a860c8690&rid=giphy.gif',
      });
    });
    setPhotosData([...temp]);
  };

  const onDelete = (index: number) => {
    const newPhotos = photosData.filter((f, i) => {
      return i !== index;
    });
    setPhotosData([...newPhotos]);
  };

  const onPhotoPositionChange = (oldIndex: number, newIndex: number) => {
    console.log(oldIndex, newIndex);
  };
  return (
    <PitayaLayout>
      <ProductPhotosUploadField
        onDrop={onDrop}
        photos={photosData}
        onDelPhoto={onDelete}
        onPhotoPositionChange={onPhotoPositionChange}
      />
    </PitayaLayout>
  );
};

export default ProductPhotosUploadFieldStory;
