import React, { useState } from 'react';
import CarouselEditField from '@src/features/carousels/components/edit/CarouselEditField';
import { decorate } from '@storybook/addon-actions';
import { LiquidModal } from '@src/features/carousels/reducers/indexReducer';

const CarouselEditFieldStory = () => {
  const [carouselName, setCarouselName] = useState('');
  const [carouselTime, setCarouselTime] = useState('');
  const [liquidModal, setLiquidModal] = useState<LiquidModal>({
    show: false,
    code: 'test',
  });

  const onChangeCarouselTitle = (name: string) => {
    setCarouselName(name);
    decorate([args => [args[0]]]).action('onChangeCarouselName')(
      `name: ${name}`,
    );
  };

  const onChangeCarouselTime = (time: number) => {
    setCarouselTime(String(time));
    decorate([args => [args[0]]]).action('onChangeCarouselTime')(
      `time: ${time}`,
    );
  };

  const toggleLiquidModal = (show: boolean) => {
    setLiquidModal({
      ...liquidModal,
      show,
    });
  };

  return (
    <CarouselEditField
      isEdit={true}
      liquidModal={liquidModal}
      carouselTitle={carouselName}
      carouselTime={Number(carouselTime)}
      onChangeCarouselTitle={onChangeCarouselTitle}
      onChangeCarouselTime={onChangeCarouselTime}
      onSaveCarouselTitle={() => {}}
      breadcrumbItems={[]}
      onCopy={() => {}}
      onDeleteCarousel={() => {}}
      onPreview={() => {}}
      toggleLiquidModal={toggleLiquidModal}
    />
  );
};

export default CarouselEditFieldStory;
