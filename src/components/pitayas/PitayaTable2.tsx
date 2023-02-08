import React, { useEffect, useRef, useState } from 'react';
import styles from '@src/assets/stylesheets/pitayas/PitayaTable2.scss';
import { OptionType } from '@src/types/BaseTypes';
import PitayaSelect from '@src/components/pitayas/PitayaSelect';
import { deprecationWarning } from '@src/helpers';
import { sortInOrder } from '@src/helpers';
import { useWindowResize } from '@src/hooks';
import _ from 'lodash';

export interface Columns
  extends React.HTMLAttributes<HTMLTableHeaderCellElement> {
  dataField: string; // specify what field should be apply on this column
  text?: React.ReactNode;
  options?: OptionType[];
  noWrap?: boolean;
  placeholder?: string;
  menuPortalTarget?: HTMLElement | null;
  onOptionChange?: (o: OptionType) => void;
  render?: (value: string | boolean | number) => React.ReactNode | string;
}

export type DataFieldValue = DataFieldAttr | React.ReactNode;
export interface DataFieldAttr
  extends React.HTMLAttributes<HTMLTableDataCellElement> {
  fieldValue: React.ReactNode;
  noWrap?: boolean;
}

export interface DataField {
  [key: string]: DataFieldAttr | React.ReactNode;
  id: string | number;
  className?: string;
  fixed?: boolean;
}

interface EnableAccumFixed {
  row?: boolean;
  column?: boolean;
}

interface PitayaTable2Header {
  column: Columns;
  fixedLeft?: boolean;
  fixedTop?: boolean;
}

const PitayaTable2Header = (props: PitayaTable2Header) => {
  const {
    column: {
      className: givenName,
      dataField,
      text,
      options,
      noWrap = true,
      placeholder,
      menuPortalTarget,
      onOptionChange,
      ...rest
    },
    fixedLeft,
    fixedTop,
  } = props;

  const className = [
    dataField,
    givenName && givenName,
    noWrap && 'no-wrap',
    fixedLeft && 'fixed-to-left',
    fixedTop && 'fixed-to-top',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <th key={dataField} className={className} {...rest}>
      {options ? (
        <PitayaSelect
          options={options}
          defaultValue={placeholder ? undefined : options[0]}
          placeholder={placeholder}
          onChange={onOptionChange}
          menuPortalTarget={menuPortalTarget}
        />
      ) : (
        text
      )}
    </th>
  );
};

interface PitayaTable2Row {
  dataField: string;
  field: DataFieldValue;
  fixedLeft?: boolean;
  fixedTop?: boolean;
}

const PitayaTable2Row = ({
  dataField,
  field,
  fixedLeft,
  fixedTop,
}: PitayaTable2Row) => {
  if (
    field &&
    typeof field === 'object' &&
    field.hasOwnProperty('fieldValue')
  ) {
    const {
      fieldValue,
      className: givenName,
      noWrap,
      ...rest
    } = field as DataFieldAttr;

    const className = [
      dataField,
      givenName && givenName,
      noWrap && 'no-wrap',
      fixedLeft && 'fixed-to-left',
      fixedTop && 'fixed-to-top-data',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <td className={className} {...rest}>
        {fieldValue}
      </td>
    );
  } else {
    const className = [
      dataField,
      fixedLeft && 'fixed-to-left',
      fixedTop && 'fixed-to-top-data',
    ]
      .filter(Boolean)
      .join(' ');
    return <td className={className}>{field}</td>;
  }
};

export interface PitayaTable2Props {
  columns: Columns[];
  datas: DataField[];
  wrapCell?: boolean;
  tableEmpty?: string;
  className?: string;
  id?: string;
  hideHeader?: boolean;
  style?: React.CSSProperties;
  fixedHeader?: boolean; // if true, specify max-height in style if you don't like default max-height
  fixedColumns?: string[]; // specify dataFields to be fixed, with any order
  accumFixed?: EnableAccumFixed; // will next fixed row/col stack onto last fixed one,
  // row means data row, header will not be blocked by fixed row
  highlightColumn?: boolean;
}

const PitayaTable2 = (props: PitayaTable2Props) => {
  const {
    columns,
    datas,
    tableEmpty,
    hideHeader,
    style,
    fixedHeader = false,
    fixedColumns,
    accumFixed = {},
    highlightColumn,
  } = props;
  const { row: accumFixedRow, column: accumFixedCol } = accumFixed;

  if ('wrapCell' in props) {
    deprecationWarning(
      'The prop wrapCell is deprecate!!! td will not set white-space as no-wrap on default. Please use noWrap to set each item instead',
    );
  }

  const className = [
    styles['pitaya-table-2'],
    props.className && props.className,
  ]
    .filter(Boolean)
    .join(' ');

  const trKey = (data: DataField, index: number): string | number =>
    data.id || index;
  const tableEmptyShow = typeof tableEmpty === 'string' && datas.length === 0;

  const [hoveredNthColumn, setHoveredNthColumn] = useState<number>(0);

  // Set sticky offsets
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    setStickyOffsets();
  }, [columns, fixedColumns, datas, accumFixed]);

  useWindowResize(_.throttle(setStickyOffsets, 250), []);

  function setStickyOffsets() {
    const { current } = tableRef;
    if (!current) {
      return;
    }
    if (fixedHeader && !hideHeader) {
      let accumHeight = current.querySelector('thead')?.clientHeight || 0;
      current
        .querySelectorAll<HTMLElement>('.fixed-to-top-row')
        .forEach(row => {
          const nodes = row.querySelectorAll<HTMLElement>('.fixed-to-top-data');
          nodes.forEach(node => {
            node.style.top = `${accumHeight}px`;
          });
          if (accumFixedRow) {
            accumHeight += row.offsetHeight;
          }
        });
    }
    if (fixedColumns && fixedColumns.length) {
      const fixedColsInOrder =
        fixedColumns?.sort(sortInOrder(columns.map(c => c.dataField))) || [];
      let accumWidth = 0;
      fixedColsInOrder.forEach(key => {
        const nodes = current.querySelectorAll<HTMLElement>(`.${key}`);
        if (nodes && nodes.length) {
          nodes.forEach(node => (node.style.left = `${accumWidth}px`));
          if (accumFixedCol) {
            accumWidth += nodes[0].offsetWidth;
          }
        }
      });
    }
  }

  const onTableHover = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const table = event.currentTarget as HTMLTableElement;
    const target = event.target as HTMLElement;
    const children = Array.from((target.parentElement as HTMLElement).children);
    const nthColumn = children.indexOf(target) + 1;
    if (target !== table && nthColumn !== hoveredNthColumn) {
      table.querySelectorAll('.hover').forEach(element => {
        element.classList.remove('hover');
      });
      table
        .querySelectorAll(
          `td:nth-child(${nthColumn}), th:nth-child(${nthColumn})`,
        )
        .forEach(element => {
          element.classList.add('hover');
        });
      setHoveredNthColumn(nthColumn);
    }
  };

  return (
    <div id={props.id} className={className} style={style}>
      <table
        ref={tableRef}
        onMouseOver={highlightColumn ? onTableHover : undefined}
      >
        {!hideHeader && (
          <thead>
            <tr>
              {columns.map(column => (
                <PitayaTable2Header
                  key={column.dataField}
                  column={column}
                  fixedLeft={fixedColumns?.includes(column.dataField)}
                  fixedTop={fixedHeader}
                />
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {datas.map((data, index) => {
            const trClass = [data.className, data.fixed && 'fixed-to-top-row']
              .filter(Boolean)
              .join(' ');
            return (
              <tr key={trKey(data, index)} className={trClass}>
                {columns.map(({ dataField }) => (
                  <PitayaTable2Row
                    key={dataField}
                    dataField={dataField}
                    field={data[dataField]}
                    fixedLeft={fixedColumns?.includes(dataField)}
                    fixedTop={data.fixed}
                  />
                ))}
              </tr>
            );
          })}
          {tableEmptyShow && (
            <tr className="empty-row">
              <td colSpan={columns.length}>{tableEmpty}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PitayaTable2;
