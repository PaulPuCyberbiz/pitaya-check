import moment from 'moment';
import React, { useState } from 'react';
import CarouselSlidesField from '@src/features/carousels/components/edit/CarouselSlidesField';
import { Slide } from '@src/features/carousels/domain/models/Slide';
import { SchedulesStatus } from '@src/features/carousels/domain/models/Schedule';
import { decorate } from '@storybook/addon-actions';

const CarouselEditSlidesFieldStory = () => {
  const [slides, setSlides] = useState<Slide[]>([
    {
      id: 1,
      position: 1,
      schedules: [
        {
          id: 1,
          title: '暢銷熱賣組',
          thumb: '',
          status: SchedulesStatus.Default,
        },
        {
          id: 2,
          title: '暢銷熱賣組特價',
          startAt: moment('2020-01-01 00:00'),
          endAt: moment('2020-05-01 23:59'),
          thumb: '',
          status: SchedulesStatus.Active,
        },
        {
          id: 3,
          title: '暢銷熱賣福利品',
          startAt: moment('2019-08-01 00:00'),
          endAt: moment('2019-12-31 23:59'),
          thumb: '',
          status: SchedulesStatus.Expired,
        },
      ],
    },
    {
      id: 2,
      position: 2,
      schedules: [
        {
          id: 1,
          title: '暢銷熱賣組',
          thumb: '',
          status: SchedulesStatus.Default,
        },
        {
          id: 2,
          title: '暢銷熱賣組特價',
          startAt: moment('2020-01-01 00:00'),
          endAt: moment('2020-05-01 23:59'),
          thumb: '',
          status: SchedulesStatus.Inactive,
        },
        {
          id: 3,
          title: '暢銷熱賣福利品',
          startAt: moment('2019-08-01 00:00'),
          endAt: moment('2019-12-31 23:59'),
          thumb: '',
          status: SchedulesStatus.Expired,
        },
      ],
    },
    {
      id: 3,
      position: 3,
      schedules: [
        {
          id: 1,
          title: '暢銷熱賣組特價',
          startAt: moment('2020-01-01 00:00'),
          endAt: moment('2020-05-01 23:59'),
          thumb: '',
          status: SchedulesStatus.Active,
        },
        {
          id: 2,
          title: '暢銷熱賣福利品',
          startAt: moment('2020-01-01 00:00'),
          endAt: moment('2020-05-01 23:59'),
          thumb: '',
          status: SchedulesStatus.Inactive,
        },
      ],
    },
  ]);

  const onPositionChange = (oldIndex: number, newIndex: number) => {
    decorate([args => [args[0]]]).action('onPositionChange')(
      `oldIndex: ${oldIndex}, newIndex: ${newIndex}`,
    );
  };

  const onAddSchedule = (id: number) => {
    decorate([args => [args[0]]]).action('onAddSchedule')(`add id: ${id}`);
  };

  const onDeleteSlide = (id: number) => {
    decorate([args => [args[0]]]).action('onDeleteSlide')(`id: ${id}`);
  };

  const onEditSchedule = (id: number) => {
    decorate([args => [args[0]]]).action('onEditSchedule')(`id: ${id}`);
  };

  const onDeleteSchedule = (id: number) => {
    decorate([args => [args[0]]]).action('onDeleteSchedule')(`id: ${id}`);
  };

  return (
    <CarouselSlidesField
      slides={slides}
      onAddSchedule={onAddSchedule}
      onDeleteSlide={onDeleteSlide}
      onEditSchedule={onEditSchedule}
      onDeleteSchedule={onDeleteSchedule}
      onPositionChange={onPositionChange}
    />
  );
};

export default CarouselEditSlidesFieldStory;
