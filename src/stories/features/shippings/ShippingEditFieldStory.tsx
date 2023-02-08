import ShippingEditField from '@src/features/shippings/component/edit/ShippingEditField';
import React, { useState } from 'react';
import {
  Shipping,
  ShippingCondition,
  EditShippingConditionEvent,
} from '@src/features/shippings/domain/models/Shipping';
import { TemperatureTypeCode } from '@src/features/products/domain/models/TemperatureType';
import { decorate } from '@storybook/addon-actions';

const ShippingEditFieldStory = () => {
  const [currentShipping, setCurrentShipping] = useState<Shipping>({
    id: 1,
    title: '',
    shippingRegions: [],
    customCod: false,
    temperatureTypeName: TemperatureTypeCode.NORMAL,
    priceConditions: [
      {
        id: 1,
        lowerLimit: 0,
        upperLimit: 1000,
        price: 100,
      },
      {
        id: 2,
        lowerLimit: 1000,
        upperLimit: 2000,
        price: 50,
      },
      {
        id: 3,
        lowerLimit: 2000,
        price: 0,
      },
    ],
    weightConditions: [
      {
        id: 1,
        lowerLimit: 0,
        upperLimit: 8,
        price: 160,
      },
      {
        id: 2,
        lowerLimit: 8,
        price: 200,
      },
    ],
    payments: [],
  });

  const onShippingChange = (shipping: Partial<Shipping>) => {
    const newShipping = {
      ...currentShipping,
      ...shipping,
    };
    setCurrentShipping(newShipping);
  };

  const onPriceConditionChange = (
    condition: Partial<ShippingCondition>,
    event: EditShippingConditionEvent,
  ) => {
    decorate([args => [args[0]]]).action('PriceChange')(
      `condition=${condition}, event=${event}`,
    );
  };

  const onWeightConditionChange = (
    condition: Partial<ShippingCondition>,
    event: EditShippingConditionEvent,
  ) => {
    decorate([args => [args[0]]]).action('WeightChange')(
      `condition=${condition}, event=${event}`,
    );
  };

  return (
    <ShippingEditField
      isEdit={true}
      breadcrumbItems={[]}
      currentShipping={currentShipping}
      onShippingChange={onShippingChange}
      onPriceConditionChange={onPriceConditionChange}
      onWeightConditionChange={onWeightConditionChange}
    />
  );
};

export default ShippingEditFieldStory;
