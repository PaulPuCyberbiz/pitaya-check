import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { withKnobs } from '@storybook/addon-knobs';

import CodeBlock from '@src/components/CodeBlock';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import PitayaImageInput from '@src/components/pitayas/PitayaImageInput';

export default {
  title: 'Pitaya / ImageInput',
  decorators: [withKnobs],
};

export const Card = () => {
  const code = `\`\`\`jsx
const [previewImage, setPreviewImage] = useState<string|null|File>('https://i.imgur.com/NiYMwNE.jpg');
const onAccept = (file: File|null) => setPreviewImage(file);
// tslint:disable-next-line:no-console
const onReject = (file: File) => { console.log('onReject', file); };

<PitayaImageInput label="手機版圖片" onAccept={onAccept} onReject={onReject} previewImage={previewImage}>
  <PitayaImageInput.Description>
    圖片尺寸建議：1MB，1000x1000px <br />
    可上傳JPG/PNG/JPEG/GIF格式
  </PitayaImageInput.Description>
</PitayaImageInput>
\`\`\``;

  const [previewImage, setPreviewImage] = useState<string | null | File>(
    'https://i.imgur.com/NiYMwNE.jpg',
  );
  const onAccept = (file: File | null) => setPreviewImage(file);
  // tslint:disable-next-line:no-console
  const onReject = (file: File) => {
    console.log('onReject', file);
  };

  return (
    <PitayaLayout style={{ minHeight: '100vh' }}>
      <h3>Card</h3>
      <div className="col-1">
        <PitayaImageInput
          label="手機版圖片"
          onAccept={onAccept}
          onReject={onReject}
          previewImage={previewImage}
        >
          <PitayaImageInput.Description>
            圖片尺寸建議：1MB，1000x1000px <br />
            可上傳JPG/PNG/JPEG/GIF格式
          </PitayaImageInput.Description>
        </PitayaImageInput>
      </div>
      <hr />
      <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
    </PitayaLayout>
  );
};

export const Horizontal = () => {
  const code = `\`\`\`jsx
const [previewImage, setPreviewImage] = useState<string|null|File>('https://i.imgur.com/NiYMwNE.jpg');
const onAccept = (file: File|null) => setPreviewImage(file);
// tslint:disable-next-line:no-console
const onReject = (file: File) => { console.log('onReject', file); };

<PitayaImageInput
  label="手機版圖片"
  layout="horizontal"
  onAccept={onAccept}
  onReject={onReject}
  previewImage={previewImage}
>
  <PitayaImageInput.Description>
    圖片尺寸建議：1MB，1000x1000px <br />
    可上傳JPG/PNG/JPEG/GIF格式
  </PitayaImageInput.Description>
</PitayaImageInput>
\`\`\``;

  const [previewImage, setPreviewImage] = useState<string | null | File>(
    'https://i.imgur.com/NiYMwNE.jpg',
  );
  const onAccept = (file: File | null) => setPreviewImage(file);
  // tslint:disable-next-line:no-console
  const onReject = (file: File) => {
    console.log('onReject', file);
  };

  return (
    <PitayaLayout style={{ minHeight: '100vh' }}>
      <h3>Horizontal</h3>
      <PitayaImageInput
        label="手機版圖片"
        layout="horizontal"
        onAccept={onAccept}
        onReject={onReject}
        previewImage={previewImage}
      >
        <PitayaImageInput.Description>
          圖片尺寸建議：1MB，1000x1000px <br />
          可上傳JPG/PNG/JPEG/GIF格式
        </PitayaImageInput.Description>
      </PitayaImageInput>
      <hr />
      <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
    </PitayaLayout>
  );
};
