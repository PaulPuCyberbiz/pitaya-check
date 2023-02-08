import React, { useState, useEffect, useMemo } from 'react';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import PitayaCheckbox from '@src/components/pitayas/PitayaCheckbox';
import PitayaTable2, {
  DataField,
  Columns,
  PitayaTable2Props as TableProps,
} from '@src/components/pitayas/PitayaTable2';
import { LocalStorage } from '@src/helpers';
import { PitayaShowColsCollapse } from '@src/components/pitayas/PitayaShowColsCollapse';

const TableLayout = styled.div`
  position: relative;

  .pitaya-table-2 table {
    th {
      padding: 8px;
    }

    .pitaya_table_checkbox {
      padding-right: 0;
      width: 32px;

      .pitayaCheckbox__label {
        padding-left: 22px;
      }

      & + td,
      & + th {
        padding-left: 8px;
      }
    }
  }
`;

export type SelectedId = string | number;

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  tableName?: string;
  columns: Columns[];
  datas: DataField[];
  hidableColumns?: string[];
  selectedIds?: SelectedId[];
  onCheck?: (id: SelectedId) => void;
  tableProps?: Omit<TableProps, 'columns' | 'datas'>;
};

export const PitayaAwesomeTable2 = (props: Props) => {
  const {
    tableName,
    columns: baseColumns,
    datas: baseDatas,
    hidableColumns,
    selectedIds,
    onCheck,
    tableProps,
    ...others
  } = props;

  const [hiddenColumns, setHiddenColumns] = useState<string[]>([]);
  const { t } = useTranslation('Pitaya');

  // Local storage
  useEffect(() => {
    if (tableName) {
      const storage = LocalStorage.getObject(tableName);
      setHiddenColumns(_.isEmpty(storage) ? [] : storage);
    }
  }, []);
  useEffect(() => {
    if (tableName) {
      LocalStorage.setObject(tableName, hiddenColumns);
    }
  }, [hiddenColumns]);

  // 使用 hidableColumns 過濾防止 LocalStorage Caching
  const visibleColumns = useMemo(() => {
    if (!hidableColumns) {
      return baseColumns;
    }

    return baseColumns.filter(
      column =>
        !hidableColumns.includes(column.dataField) ||
        !hiddenColumns.includes(column.dataField),
    );
  }, [baseColumns, hidableColumns, hiddenColumns]);

  const checkboxColumnName = 'pitaya_table_checkbox';

  const columns = [
    {
      dataField: checkboxColumnName,
      text: '',
    },
    ...visibleColumns,
  ];

  const datas = baseDatas.map(data => {
    if (selectedIds && onCheck) {
      return {
        [checkboxColumnName]: {
          fieldValue: (
            <PitayaCheckbox
              onChange={() => onCheck(data.id)}
              checked={selectedIds.includes(data.id)}
            />
          ),
        },
        ...data,
      };
    }
    return data;
  });

  const dataFieldToText = new Map(
    baseColumns
      .filter(col => !!col.text)
      .map(col => [col.dataField, String(col.text)]),
  );

  return (
    <TableLayout {...others}>
      {hidableColumns && (
        <PitayaShowColsCollapse
          text={t('PitayaShowColsCollapse_options')}
          columns={hidableColumns}
          hiddenCols={hiddenColumns}
          setHiddenCols={setHiddenColumns}
          colToLabel={dataFieldToText}
        />
      )}
      <PitayaTable2 columns={columns} datas={datas} {...tableProps} />
    </TableLayout>
  );
};
