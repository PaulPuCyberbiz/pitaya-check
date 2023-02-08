import { StylesConfig } from 'react-select';

export const pitayaSelectStyles: StylesConfig<any, boolean> = {
  menu: base => ({
    ...base,
    boxShadow: 'none',
    marginTop: '2px',
  }),
  menuList: base => ({
    ...base,
    backgroundColor: '#fff',
    border: 'solid 1px #d6dff2',
    borderRadius: '5px',
    listStyleType: 'none',
    margin: 0,
    padding: '10px 6px',
  }),
  menuPortal: base => ({
    ...base,
    zIndex: 1000,
  }),
  option: (base, state: any) => {
    let backgroundColor: string;

    if (state.isSelected) {
      backgroundColor = '#d6dff2';
    } else {
      if (state.isFocused) {
        backgroundColor = '#f2f6fc';
      } else {
        backgroundColor = '#fff';
      }
    }

    return {
      ...base,
      backgroundColor,
      fontSize: '14px',
      padding: '4px 10px',
      color: 'inherit',
    };
  },
};
