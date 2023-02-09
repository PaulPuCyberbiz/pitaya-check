import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import PitayaUploadPhotos from '@src/components/pitayas/PitayaUploadPhotos/PitayaUploadPhotos';
import { Photo } from '@src/components/pitayas/PitayaUploadPhotos/Photo';
import { convertToBytes, Unit } from '@src/helpers/converters';

export default {
  title: 'Pitaya / UploadPhotos',
  decorators: [withKnobs],
};

export const General = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  // tslint:disable-next-line:no-console
  const onAddPhoto = (...args: any[]) => console.log('onAddPhoto', args);
  // tslint:disable-next-line:no-console
  const onDelPhoto = (...args: any[]) => console.log('onDelPhoto', args);
  // tslint:disable-next-line:no-console
  const onPositionChange = (...args: any[]) =>
    console.log('onPositionChange', args);
  // tslint:disable-next-line:no-console
  const onImageTooLarge = (...args: any[]) =>
    console.log('onImageTooLarge', args);

  return (
    <PitayaLayout style={{ minHeight: '100vh' }}>
      <PitayaRoundBox>
        <PitayaUploadPhotos
          photos={photos}
          perPhotoMaxSize={convertToBytes(1.5, Unit.MB)}
          onAddPhoto={onAddPhoto}
          onDelPhoto={onDelPhoto}
          onPositionChange={onPositionChange}
          onImageTooLarge={onImageTooLarge}
        />
      </PitayaRoundBox>
    </PitayaLayout>
  );
};
