import React from 'react';
import CarouselIndexFieldStory from '@stories/features/carousels/CarouselIndexFieldStory';
import CarouselEditFieldStory from '@stories/features/carousels/CarouseEditFieldStory';
import CarouselEditSlidesFieldStory from '@stories/features/carousels/CarouselEditSlidesFieldStory';
import CarouselScheduleFieldStory from '@stories/features/carousels/CarouselScheduleFieldStory';

export default {
  title: 'Carousel',
};

export const CarouselIndexField = () => <CarouselIndexFieldStory />;
export const CarouselEditField = () => <CarouselEditFieldStory />;
export const CarouselEditSlidesField = () => <CarouselEditSlidesFieldStory />;
export const CarouselScheduleField = () => <CarouselScheduleFieldStory />;
