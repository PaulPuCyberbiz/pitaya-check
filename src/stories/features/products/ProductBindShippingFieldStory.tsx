import React, { useState } from 'react';
import PitayaLayout from '@src/components/pitayas/PitayaLayout';
import { ProductBindShippingField } from '@src/features/products/components/ProductBindShippingField';
import { TemperatureTypeCode } from '@src/features/products/domain/models/TemperatureType';

const ProductBindShippingFieldStory = () => {
  const shownTemperature = true;
  const [temperatureType, setTemperatureType] = useState();
  const [selectedShippingRates, setSelectedShippingRates] = useState([
    '黑貓物流',
  ]);

  const onTemperatureTypeChange = (code: TemperatureTypeCode) => {
    setTemperatureType(code);
  };

  const temperatureTypes = [
    {
      label: '常溫',
      value: TemperatureTypeCode.NORMAL,
    },
    {
      label: '冷藏',
      value: TemperatureTypeCode.REFRIGERATED,
    },
    {
      label: '冷凍',
      value: TemperatureTypeCode.FROZEN,
    },
  ];

  const shippingRates = ['黑貓物流', '宅配通', '新竹貨運'];

  const onShippingRatesChange = (data: string[]) => {
    setSelectedShippingRates([...data]);
  };
  return (
    <PitayaLayout>
      <ProductBindShippingField
        selectedShippingRates={selectedShippingRates}
        shippingRates={shippingRates}
        shownTemperature={shownTemperature}
        temperatureType={temperatureType}
        temperatureTypes={temperatureTypes}
        onTemperatureTypeChange={onTemperatureTypeChange}
        onShippingRatesChange={onShippingRatesChange}
      />
    </PitayaLayout>
  );
};

export default ProductBindShippingFieldStory;
