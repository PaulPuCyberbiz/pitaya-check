import React, { useState } from 'react';
import CarouselScheduleBasicSetting from '@src/features/carousels/components/schedule/CarouselScheduleBasicSetting';
import { Schedule } from '@src/features/carousels/domain/models/Schedule';
import moment from 'moment';
import { decorate } from '@storybook/addon-actions';
import CarouselSchedulePictureSetting from '@src/features/carousels/components/schedule/CarouselSchedulePictureSetting';

const CarouselScheduleFieldStory = () => {
  const schedule: Schedule = {
    id: 7,
    slideId: 1,
    title: 'schedule_5',
    link: 'http://zack.lvh.me:4000/en/products/fp',
    startAt: moment('2020-09-19 15:37:19'),
    endAt: moment('2020-10-19 15:37:19'),
    isDefault: false,
    imagePcUrl: '',
    imageTabletUrl: '',
    imageMobileUrl: '',
  };

  const [currentSchedule, setCurrentSchedule] = useState(schedule);

  const onScheduleChange = (o: Partial<Schedule>) => {
    decorate([args => [args[0]]]).action('onScheduleChange')(JSON.stringify(o));
    setCurrentSchedule({
      ...currentSchedule,
      ...o,
    });
  };

  const onPreview = () => {
    decorate([args => [args[0]]]).action('onPreview')('');
  };

  const onDelete = (id: number) => {
    decorate([args => [args[0]]]).action('onDelete')(`id: ${id}`);
  };

  const onSave = (id: number) => {
    decorate([args => [args[0]]]).action('onSave')(`id: ${id}`);
  };

  const goToIndexPage = () => {
    decorate([args => [args[0]]]).action('goToIndexPage')('');
  };

  return (
    <>
      <CarouselScheduleBasicSetting
        breadcrumbItems={[]}
        currentSchedule={currentSchedule}
        onScheduleChange={onScheduleChange}
        isEdit={true}
        onPreview={() => onPreview()}
        onDelete={id => onDelete(id)}
      />
      <CarouselSchedulePictureSetting
        currentSchedule={currentSchedule}
        onScheduleChange={onScheduleChange}
        onSave={onSave}
        goToIndexPage={goToIndexPage}
      />
    </>
  );
};

export default CarouselScheduleFieldStory;
