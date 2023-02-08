import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import PitayaRoundBox from '@src/components/pitayas/PitayaRoundBox';
import { PitayaScrollbarShownWrapper } from '@src/components/pitayas/PitayaScrollbarShownWrapper';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';

export default {
  title: 'Pitaya / ScrollbarShownWrapper',
  decorators: [withKnobs],
};

export const Vertical = () => {
  const gradientStyle = {
    height: '1000px',
    background:
      'linear-gradient(to bottom, red, orange, yellow, green, cyan, blue, violet)',
  };
  return (
    <PitayaLayout>
      <PitayaRoundBox>
        <h3>Vertical</h3>
        <p>
          move cursor inside, scrollbar will not disappear even when not
          scrolling.
        </p>
        <h5>Set maxHeight smaller than content height</h5>
        <PitayaScrollbarShownWrapper maxHeight={300}>
          <div style={gradientStyle} />
        </PitayaScrollbarShownWrapper>
        <hr />
        <h5>Not given maxHeight, but content overflow it's container</h5>
        <PitayaScrollbarShownWrapper>
          <div style={{ height: '300px' }}>
            <div style={gradientStyle} />
          </div>
        </PitayaScrollbarShownWrapper>
      </PitayaRoundBox>
    </PitayaLayout>
  );
};

export const Horizontal = () => {
  const gradientStyle = {
    height: '200px',
    width: '3000px',
    background:
      'linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)',
  };
  return (
    <PitayaLayout>
      <PitayaRoundBox>
        <h3>Horizontal</h3>
        <p>
          move cursor inside, scrollbar will not disappear even when not
          scrolling.
        </p>
        <h5>Set maxWidth smaller than content width</h5>
        <PitayaScrollbarShownWrapper maxWidth={800}>
          <div style={gradientStyle} />
        </PitayaScrollbarShownWrapper>
        <hr />
        <h5>Not given maxWidth, but content overflow it's container</h5>
        <PitayaScrollbarShownWrapper>
          <div>
            <div style={gradientStyle} />
          </div>
        </PitayaScrollbarShownWrapper>
      </PitayaRoundBox>
    </PitayaLayout>
  );
};

export const CustomStyle = () => {
  const style = {
    padding: '20px',
    color: 'white',
    fontSize: '16px',
    height: '200px',
    width: '3000px',
    background: '#005DAC',
  };
  return (
    <PitayaLayout>
      <PitayaRoundBox>
        <h3>Custom Style</h3>
        <h5>
          thumbColor="#19B7EA"
          <br />
          trackColor="#005DAC"
          <br />
          scrollbarWidth={0.6} // in em
        </h5>
        <PitayaScrollbarShownWrapper
          maxWidth={800}
          thumbColor="#19B7EA"
          trackColor="#005DAC"
          scrollbarWidth={0.6}
        >
          <div style={style}>
            {'Set track color to the same color as background.'}
          </div>
        </PitayaScrollbarShownWrapper>
      </PitayaRoundBox>
    </PitayaLayout>
  );
};
