import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import PitayaSlider, {
  PitayaSliderProps,
} from '@src/components/pitayas/PitayaSlider';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@src/components/CodeBlock';

export default {
  title: 'Pitaya / Slider',
  decorators: [withKnobs],
};

export const General = () => {
  const code = `\`\`\`jsx
const settings: PitayaSliderProps = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

<PitayaSlider {...settings}>
  <div>
    <h3>1</h3>
  </div>
  <div>
    <h3>2</h3>
  </div>
  <div>
    <h3>3</h3>
  </div>
  <div>
    <h3>4</h3>
  </div>
  <div>
    <h3>5</h3>
  </div>
  <div>
    <h3>6</h3>
  </div>
</PitayaSlider>
\`\`\``;

  const settings: PitayaSliderProps = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <PitayaLayout style={{ minHeight: '100vh' }}>
      <PitayaSlider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </PitayaSlider>
      <hr />
      <ReactMarkdown source={code} renderers={{ code: CodeBlock }} />
    </PitayaLayout>
  );
};
