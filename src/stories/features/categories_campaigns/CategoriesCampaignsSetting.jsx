import React from 'react';
import moment from 'moment';
import EditCmapaignPage from '@src/features/categories_campaigns/edit/components/EditCampaignPage';
import { CategoriesCampaignDiscountType } from '@src/features/categories_campaigns/index/domain/models/CategoriesCampaign';

export default class CategoriesCampaignsSettingStorybook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      title: '測試標題',
      discountType: CategoriesCampaignDiscountType.PRICE,
      discountValue: 123,
      discountThreshold: 0,
      weight: 10,
      titleOnChange: this.titleOnChange,
      discountTypeOnChange: this.discountTypeOnChange,
      discountOnChange: this.discountOnChange,
      discountThresholdOnChange: this.discountThresholdOnChange,
      weightOnChange: this.weightOnChange,
      disabledStartDateTime: true,
      disabledEndDateTime: true,
      startDateTime: moment('2018-10-08 08:00:00'),
      endDateTime: moment('2019-10-08 08:00:00'),
      disabledStartOnChange: this.disabledStartOnChange,
      disabledEndOnChange: this.disabledEndOnChange,
      startOnChange: this.startOnChange,
      endOnChange: this.endOnChange,
    };
  }

  titleOnChange = title => {
    this.setState({ title });
  };

  discountTypeOnChange = discountType => {
    this.setState({ discountType });
  };

  discountOnChange = discountValue => {
    this.setState({ discountValue });
  };

  discountThresholdOnChange = discountThreshold => {
    this.setState({ discountThreshold });
  };

  weightOnChange = weight => {
    this.setState({ weight });
  };

  disabledStartOnChange = disabledStartDateTime => {
    this.setState({ disabledStartDateTime });
  };

  disabledEndOnChange = disabledEndDateTime => {
    this.setState({ disabledEndDateTime });
  };

  startOnChange = startDateTime => {
    this.setState({ startDateTime });
  };

  endOnChange = endDateTime => {
    this.setState({ endDateTime });
  };

  render() {
    return (
      <div className="p-5" style={{ background: '#F1F4F9' }}>
        <EditCmapaignPage {...this.state} />
      </div>
    );
  }
}
