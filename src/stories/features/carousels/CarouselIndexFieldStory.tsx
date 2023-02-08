import React, { useState } from 'react';
import CarouselIndexField from '@src/features/carousels/components/index/CarouselIndexField';
import { decorate } from '@storybook/addon-actions';
import { Carousel } from '@src/features/carousels/domain/models/Carousel';
import {
  LiquidModal,
  DeleteModal,
} from '@src/features/carousels/reducers/indexReducer';

const CarouselIndexFieldStory = () => {
  const liquidCode = `<frameset cols="100,*">
  <frame name="left" src="a.htm">
  <frame name="right" src="b.htm">
</frameset>`;

  const carousels: Carousel[] = [
    {
      id: 1,
      title: '首頁跑馬燈',
      liquidCode,
    },
    {
      id: 2,
      title: '春妝新品商品群組跑馬燈',
      liquidCode,
    },
    {
      id: 3,
      title: '新品上市區塊',
      liquidCode,
    },
  ];

  const defaultLiquidModal: LiquidModal = {
    show: false,
  };

  const defaultDeleteModal: DeleteModal = {
    show: false,
  };

  const [allCarousels, setAllCarousels] = useState(carousels);
  const [liquidModal, setLiquidModal] = useState(defaultLiquidModal);
  const [deleteModal, setDeleteModal] = useState(defaultDeleteModal);

  const goToEditPage = (id: number) => {
    decorate([args => [args[0]]]).action('goToEditPage')(`id: ${id}`);
  };

  const onDelete = (id: number) => {
    decorate([args => [args[0]]]).action('onDelete')(`id: ${id}`);
  };

  const createNewCarousel = () => {
    const newId = Math.max(...allCarousels.map(item => item.id), 0) + 1;
    decorate([args => [args[0]]]).action('createNewCarousel')(`id: ${newId}`);
  };

  const toggleDeleteModal = (show: boolean, id?: number) => {
    setDeleteModal({
      show,
      id,
    });
    decorate([args => [args[0]]]).action('toggleDeleteModal')(`id: ${id}`);
  };

  const toggleLiquidModal = (show: boolean, id?: number) => {
    const selectedCarousel = allCarousels.find(carousel => carousel.id === id);
    setLiquidModal({
      show,
      code: selectedCarousel?.liquidCode,
    });
    decorate([args => [args[0]]]).action('toggleLiquidModal')(`id: ${id}`);
  };

  return (
    <CarouselIndexField
      carousels={allCarousels}
      liquidModal={liquidModal}
      deleteModal={deleteModal}
      goToEditPage={goToEditPage}
      onDelete={onDelete}
      goToCreatePage={createNewCarousel}
      toggleDeleteModal={toggleDeleteModal}
      toggleLiquidModal={toggleLiquidModal}
      onCopy={() => {}}
    />
  );
};

export default CarouselIndexFieldStory;
