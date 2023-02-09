import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import { convertToBytes, Unit } from '@src/helpers/converters';
import { PitayaImageHosting } from '@src/components/pitayas/PitayaImageHosting/PitayaImageHosting';
import { ShopThemePhoto } from '@src/components/pitayas/PitayaImageHosting/ShopThemePhoto';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@src/components/CodeBlock';

export default {
  title: 'Pitaya / ImageHosting',
  decorators: [withKnobs],
};

export const General = () => {
  const code = `\`\`\`jsx
  const photos: Photo[] = [
    {
      id: 1,
      position: 0,
      imagePath: 'https://ppt.cc/fY2HLx@.png',
    },
    {
      id: 2,
      position: 1,
      imagePath: 'https://bit.ly/3juOWLh',
    },
  ];
  // tslint:disable-next-line:no-console
  const onAddPhoto = (...args: any[]) => console.log('onAddPhoto', args);
  // tslint:disable-next-line:no-console
  const onDelPhoto = (...args: any[]) => console.log('onDelPhoto', args);
  // tslint:disable-next-line:no-console
  const onSelectPhoto = (...args: any[]) => console.log('onSelectPhoto', args);
  // tslint:disable-next-line:no-console
  const onPositionChange = (...args: any[]) =>
    console.log('onPositionChange', args);
  // tslint:disable-next-line:no-console
  const onImageTooLarge = (...args: any[]) =>
    console.log('onImageTooLarge', args);
  const onTotalImageTooLarge = (...args: any[]) =>
    console.log('onTotalImageTooLarge', args);

  return (
    <PitayaLayout style={{ minHeight: '100vh' }}>
      <PitayaRoundBox>
        <p>單張限制1.5MB(預設1MB), 多張限制2MB(沒預設)</p>
        <PitayaImageHosting
          photos={photos}
          perPhotoMaxSize={convertToBytes(1.5, Unit.MB)}
          allPhotoMaxSize={convertToBytes(2, Unit.MB)}
          selectedPhotoId={1}
          onAddPhoto={onAddPhoto}
          onDelPhoto={onDelPhoto}
          onSelectPhoto={onSelectPhoto}
          onPositionChange={onPositionChange}
          onImageTooLarge={onImageTooLarge}
          onTotalImageTooLarge={onTotalImageTooLarge}
        />
      </PitayaRoundBox>
      <ReactMarkdown source={code} renderers={{code: CodeBlock}} />
    </PitayaLayout>
  );
  \`\`\``;
  const photos: ShopThemePhoto[] = [
    {
      id: 1,
      position: 0,
      imagePath: 'https://ppt.cc/fY2HLx@.png',
    },
    {
      id: 2,
      position: 1,
      imagePath: 'https://bit.ly/3juOWLh',
    },
  ];
  // tslint:disable-next-line:no-console
  const onAddPhoto = (...args: any[]) => console.log('onAddPhoto', args);
  // tslint:disable-next-line:no-console
  const onDelPhoto = (...args: any[]) => console.log('onDelPhoto', args);
  // tslint:disable-next-line:no-console
  const onSelectPhoto = (...args: any[]) => console.log('onSelectPhoto', args);
  // tslint:disable-next-line:no-console
  const onPositionChange = (...args: any[]) =>
    console.log('onPositionChange', args);
  // tslint:disable-next-line:no-console
  const onImageTooLarge = (...args: any[]) =>
    console.log('onImageTooLarge', args);
  const onTotalImageTooLarge = (...args: any[]) =>
    console.log('onTotalImageTooLarge', args);

  return (
    <PitayaLayout style={{ minHeight: '100vh' }}>
      <PitayaRoundBox>
        <p>單張限制1.5MB(預設1MB), 多張限制2MB(沒預設)</p>
        <PitayaImageHosting
          photos={photos}
          perPhotoMaxSize={convertToBytes(1.5, Unit.MB)}
          allPhotoMaxSize={convertToBytes(2, Unit.MB)}
          selectedPhotoId={1}
          onAddPhoto={onAddPhoto}
          onDelPhoto={onDelPhoto}
          onSelectPhoto={onSelectPhoto}
          onPositionChange={onPositionChange}
          onImageTooLarge={onImageTooLarge}
          onTotalImageTooLarge={onTotalImageTooLarge}
        />
      </PitayaRoundBox>
      <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
    </PitayaLayout>
  );
};
