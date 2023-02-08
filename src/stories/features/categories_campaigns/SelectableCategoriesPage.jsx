import React from 'react';
import Comp from '@src/features/categories_campaigns/edit/components/SelectableCategoriesPage.tsx';

export default class SelectableCategoriesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingBlock: false,
      categoryList: data,
      categoriesSelectedList: [],
      categoryListMaxPage: 10,
      campaignCategories: dataInCampaign,
      onCategoriesAdd: this.addToCampaignOnClick,
      onCategoryRemove: this.onRemove,

      // move to state
      selectAllCategory: false,
      onCategorySelect: this.onSelect,
      toggleSelectAll: this.toggleSelectAll,
      itemContent: this.childrenElement,
    };
  }

  onSelect = id => {
    const { categoriesSelectedList } = this.state;
    const newList = categoriesSelectedList.includes(id)
      ? categoriesSelectedList.filter(selectedId => selectedId !== id)
      : categoriesSelectedList.concat(id);
    this.setState({
      categoriesSelectedList: newList,
    });
  };

  onRemove = id => {
    const { categoryList, campaignCategories } = this.state;
    const removeItem = campaignCategories.find(item => item.id === id);
    const newList = campaignCategories.filter(item => item.id !== id);
    this.setState({
      categoryList: categoryList.concat(removeItem),
      campaignCategories: newList,
    });
  };

  addToCampaignOnClick = () => {
    const { categoryList, campaignCategories, categoriesSelectedList } =
      this.state;
    this.setState({
      categoryList: categoryList.filter(
        item => !categoriesSelectedList.includes(item.id),
      ),
      campaignCategories: campaignCategories.concat(
        categoryList.filter(item => categoriesSelectedList.includes(item.id)),
      ),
      selectAllCategory: false,
      categoriesSelectedList: [],
    });
  };

  toggleSelectAll = () => {
    const { categoryList, selectAllCategory } = this.state;
    this.setState({
      selectAllCategory: !selectAllCategory,
      categoriesSelectedList: selectAllCategory
        ? []
        : categoryList.map(item => item.id),
    });
  };

  render() {
    return (
      <div>
        <Comp {...this.state} />
      </div>
    );
  }
}

const data = [
  {
    id: 1,
    title: 'Campaign1',
    type: 'CATEGORY_BIG',
    code: null,
  },
  {
    id: 2,
    title: '商品類型名稱',
    type: 'CATEGORY_MEDIUM',
    code: 'Campaign',
  },
  {
    id: 3,
    title: '我是小類別',
    type: 'CATEGORY_SMALL_PRODUCT_TYPE',
    code: 'Campaign',
  },
];

const dataInCampaign = [
  {
    id: 4,
    title: '我是dd小類別',
    type: 'CATEGORY_MEDIUM',
    code: 'Campaign',
  },
];
