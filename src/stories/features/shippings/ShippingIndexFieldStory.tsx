import React, { useState } from 'react';
import ShippingIndexField from '@src/features/shippings/component/index/ShippingIndexField';
import { TemperatureTypeCode } from '@src/features/products/domain/models/TemperatureType';
import { Shipping } from '@src/features/shippings/domain/models/Shipping';
import { decorate } from '@storybook/addon-actions';
import {
  RegionSetting,
  RegionSettingCode,
} from '@src/features/shippings/domain/models/RegionSetting';

const ShippingIndexFieldStory = () => {
  const shippings: Shipping[] = [
    {
      id: 1,
      title: '黑貓物流',
      shippingRegions: [
        {
          state: 'Northern Europe',
        },
        {
          state: '北非',
          country: '阿爾及利亞',
          city: 'Ain Temouchent',
        },
        {
          state: '南亞',
          country: '孟加拉國',
          city: 'Dinajpur',
        },
        {
          state: '南亞',
          country: '孟加拉國',
          city: 'Gaibandha',
        },
        {
          state: '歐洲',
        },
        {
          state: '美洲',
        },
        {
          state: '亞洲',
          country: '不丹',
        },
        {
          state: '亞洲',
          country: '香港',
        },
        {
          state: '亞洲',
          country: '以色列',
        },
        {
          state: '亞洲',
          country: '印度',
        },
        {
          state: '亞洲',
          country: '伊拉克',
        },
        {
          state: '亞洲',
          country: '日本',
          city: 'Aichi',
        },
        {
          state: '亞洲',
          country: '日本',
          city: 'Akita',
        },
        {
          state: '亞洲',
          country: '日本',
          city: 'Aomori',
        },
      ],
      temperatureTypeName: TemperatureTypeCode.NORMAL,
      priceConditions: [
        {
          id: 1,
          lowerLimit: 0,
          upperLimit: 800,
          price: 100,
        },
        {
          id: 2,
          lowerLimit: 800,
          upperLimit: 1800,
          price: 50,
        },
      ],
      weightConditions: [
        {
          id: 3,
          lowerLimit: 0,
          upperLimit: 800,
          price: 100,
        },
        {
          id: 4,
          lowerLimit: 800,
          upperLimit: 1800,
          price: 400,
        },
      ],
      customCod: true,
      payments: [
        {
          id: 1,
          paymentName: '信用卡',
        },
        {
          id: 2,
          paymentName: '(智付通)虛擬ATM繳費',
        },
      ],
    },
  ];

  const countrySettings: RegionSetting[] = [
    {
      name: RegionSettingCode.Taiwan,
      allowed: true,
      disabled: true,
    },
    {
      name: RegionSettingCode.OutLyingIsland,
      allowed: false,
      disabled: false,
    },
    {
      name: RegionSettingCode.Oversea,
      allowed: false,
      disabled: false,
    },
  ];

  const [allShippings, setAllShippings] = useState(shippings);
  const [allCountrySettings, setAllCountrySettings] = useState(countrySettings);

  const changePage = (p: number) => {
    decorate([args => [args[0]]]).action('changePage')(`p: ${p}`);
  };

  const goToEditPage = (id: number) => {
    decorate([args => [args[0]]]).action('goToEditPage')(`id: ${id}`);
  };

  const toggleDeleteModal = (shipping: Shipping) => {
    decorate([args => [args[0]]]).action('deleteShipping')(
      `id: ${shipping.id}`,
    );
  };

  const changeCountrySetting = (countrySetting: RegionSetting) => {
    decorate([args => [args[0]]]).action('changeCountrySetting')(
      `countrySetting: ${JSON.stringify(countrySetting)}`,
    );
  };

  return (
    <ShippingIndexField
      shippings={allShippings}
      regionSettings={allCountrySettings}
      page={1}
      totalCount={20}
      totalPages={10}
      changePage={changePage}
      goToEditPage={goToEditPage}
      toggleDeleteModal={toggleDeleteModal}
      changeRegionSetting={changeCountrySetting}
    />
  );
};

export default ShippingIndexFieldStory;
