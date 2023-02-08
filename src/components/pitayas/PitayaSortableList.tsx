import React, {
  ReactNode,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  SortEndHandler,
  SortableContainerProps,
  SortableElementProps,
} from 'react-sortable-hoc';
import _ from 'lodash';
import classNames from 'classnames';

import styles from '@src/assets/stylesheets/pitayas/PitayaSortableList.scss';
import MoveIcon from '@src/components/pitayas/pitayaSortableList/MoveIcon';
import { positiveIntegerPattern, LocalStorage } from '@src/helpers';
import { PitayaShowColsCollapse } from '@src/components/pitayas/PitayaShowColsCollapse';
import PitayaTooltip from '@src/components/pitayas/PitayaTooltip';
import PitayaIconBtn from '@src/components/pitayas/PitayaIconBtn';
import styled from 'styled-components';
import PitayaFlex from '@src/components/pitayas/PitayaFlex';
import PitayaInput from '@src/components/pitayas/PitayaInput';
import PitayaCollapse from '@src/components/pitayas/PitayaCollapse';
import { v4 as uuid } from 'uuid';

export interface Column extends React.HTMLAttributes<HTMLDivElement> {
  dataField: string;
  text: ReactNode;
  render?: (
    value: string | boolean | number,
    rowData: any,
  ) => ReactNode | string;
}

export interface DataFieldAttr extends React.HTMLAttributes<HTMLDivElement> {
  fieldValue: React.ReactNode;
}

export interface DataField {
  [key: string]: React.ReactNode;
  position: number;
  id: string | number;
}

interface PitayaSortableListRowProps {
  columns: Column[];
  hideHandle?: boolean;
  hidePosition?: boolean;
  wrapCell?: boolean;
  hasCollapsibleContent: boolean;
}

const PositionTooltip = styled(PitayaTooltip)`
  width: 326px;
`;

interface PitayaSortableListHeaderProps extends PitayaSortableListRowProps {
  positionColumnText?: string;
  positionTooltipText?: string;
}

const PitayaSortableListHeader = ({
  columns,
  hideHandle,
  hidePosition,
  positionColumnText,
  positionTooltipText,
  wrapCell,
  hasCollapsibleContent,
}: PitayaSortableListHeaderProps) => {
  const { t } = useTranslation('Pitaya');
  const rowClassName = [
    styles.pitayaSortableRow,
    'header-row',
    wrapCell && 'wrap-cell',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rowClassName}>
      {!hideHandle && <div className="drag-handle" />}
      {!hidePosition && (
        <PitayaFlex className="position-input">
          {positionColumnText || t('PitayaSortableList_sort')}
          {positionTooltipText && (
            <>
              <PitayaIconBtn
                type="questionMark"
                disableTooltipText={true}
                data-for="position-tooltip"
                data-tip={true}
              />
              <PositionTooltip
                id="position-tooltip"
                place="bottom"
                effect="solid"
                delayHide={500}
                delayUpdate={500}
                offset={{ right: 155 }}
                withPortal={false}
              >
                {positionTooltipText}
              </PositionTooltip>
            </>
          )}
        </PitayaFlex>
      )}
      {hasCollapsibleContent && <div className="collapse" />}
      {columns.map(
        ({ text, dataField, className, render: _render, ...rest }) => {
          const columnClassName = ['sortable-column', dataField, className]
            .filter(Boolean)
            .join(' ');
          return (
            <div
              className={columnClassName}
              key={dataField || uuid()}
              {...rest}
            >
              {text}
            </div>
          );
        },
      )}
    </div>
  );
};

interface PitayaSortableListItemProps
  extends PitayaSortableListRowProps,
    SortableElementProps {
  data: DataField;
  onPositionChange?: (oldPosition: number, newPosition: number) => void;
  positionValidator?: (newP: string) => boolean;
}

const DragHandle = SortableHandle(() => <MoveIcon className="drag-icon" />);

export const PitayaSortableListItem = SortableElement(
  (props: PitayaSortableListItemProps) => {
    const {
      columns,
      data,
      onPositionChange,
      positionValidator = (newP: string) => {
        return positiveIntegerPattern.test(newP);
      },
      hidePosition,
      hideHandle,
      wrapCell,
      hasCollapsibleContent,
    } = props;
    const { position, disabled, collapsibleContent } = data;
    const currentRowHasCollapsibleContents = Boolean(collapsibleContent);

    const [isOpen, setIsOpen] = useState<boolean>(
      currentRowHasCollapsibleContents,
    );

    const rowClassName = classNames(styles.pitayaSortableRow, 'item-row', {
      'wrap-cell': wrapCell,
      disabled,
      'with-collapse-content': currentRowHasCollapsibleContents,
      'collapsed': currentRowHasCollapsibleContents && !isOpen,
    });

    const [editingPosition, setEditingPosition] = useState<string>('');
    useEffect(() => {
      setEditingPosition(String(position));
    }, [position]);
    const onPositionInputConfirm = () => {
      if (!positionValidator(editingPosition)) {
        setEditingPosition(String(position));
        return;
      }
      if (Number(editingPosition) === position) {
        return;
      }
      onPositionChange?.(position, Number(editingPosition));
    };

    const rowItem = (
      <div className={rowClassName}>
        {!hideHandle && (
          <div className="drag-handle">
            <DragHandle />
          </div>
        )}
        {!hidePosition && (
          <div className="position-input">
            <PitayaInput
              inputSize="small"
              value={editingPosition}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEditingPosition(e.target.value);
              }}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  (e.target as HTMLInputElement).blur();
                }
              }}
              onBlur={onPositionInputConfirm}
            />
          </div>
        )}
        {hasCollapsibleContent &&
          (currentRowHasCollapsibleContents ? (
            <div
              className={classNames('collapse', { collapsed: !isOpen })}
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                height="20"
                width="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
                className="arrow"
              >
                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
              </svg>
            </div>
          ) : (
            <div className="collapse" />
          ))}
        {columns.map(({ dataField, render }) => {
          const field = data[dataField] as any;
          if (
            field &&
            typeof field === 'object' &&
            field.hasOwnProperty('fieldValue')
          ) {
            const { fieldValue, className, ...rest } = field as DataFieldAttr;
            const columnClassName = ['sortable-column', dataField, className]
              .filter(Boolean)
              .join(' ');

            return (
              <div className={columnClassName} {...rest}>
                {fieldValue}
              </div>
            );
          }
          return (
            <div
              className={`sortable-column ${dataField}`}
              key={`${dataField}_${data.name}`}
            >
              {render ? render(field, data) : field}
            </div>
          );
        })}
      </div>
    );
    return currentRowHasCollapsibleContents ? (
      <PitayaFlex
        className={classNames({
          'with-collapse-content': currentRowHasCollapsibleContents,
        })}
      >
        {rowItem}
        <PitayaCollapse isOpen={isOpen} className="collapse-content">
          {collapsibleContent}
        </PitayaCollapse>
      </PitayaFlex>
    ) : (
      rowItem
    );
  },
);

interface PitayaSortableContainerProps extends SortableContainerProps {
  columns: Column[];
  datas: DataField[];
  hideHeader?: boolean;
  hideHandle?: boolean;
  hidePosition?: boolean;
  wrapCell?: boolean;
  listEmpty?: string;
  positionColumnText?: string;
  positionTooltipText?: string;
  style?: React.CSSProperties;
  className?: string;
  onPositionChange?: (oldPosition: number, newPosition: number) => void;
  setHelperRef?: (helperContainer: HTMLDivElement | string | null) => void;
  positionValidator?: (newP: string) => boolean;
  hidableColumns?: string[];
  listName?: string;
  id?: string;
}

const PitayaSortableListEmpty = ({ listEmpty }: { listEmpty?: string }) => {
  const listEmptyClassName = [styles.pitayaSortableRow, 'item-row', 'empty']
    .filter(Boolean)
    .join(' ');

  if (!listEmpty) {
    return null;
  }

  return <div className={listEmptyClassName}>{listEmpty}</div>;
};

const PitayaSortableContainer = SortableContainer(
  (props: PitayaSortableContainerProps) => {
    const { t } = useTranslation('Pitaya');
    const {
      columns: baseColumns,
      datas,
      hideHeader,
      hideHandle,
      hidePosition,
      wrapCell = false,
      listEmpty = t('PitayaSortableList_empty'),
      positionColumnText,
      positionTooltipText,
      style,
      className,
      onPositionChange,
      setHelperRef,
      positionValidator,
      hidableColumns,
      listName,
      id: idFromProps,
    } = props;
    const listEmptyShow = datas.length === 0;
    const [hiddenColumns, setHiddenColumns] = useState<string[]>([]);

    const conatinerClassName = ['pitayaSortableContainer', className]
      .filter(Boolean)
      .join(' ');

    const containerRef = useCallback(node => {
      if (node) {
        setHelperRef?.(node);
      }
    }, []);

    const dataFieldToText = new Map(
      baseColumns
        .filter(column => !!column.text)
        .map(column => [column.dataField, String(column.text)]),
    );

    // 使用 hidableColumns 過濾防止 LocalStorage Caching
    const columns = useMemo(() => {
      if (!hidableColumns) {
        return baseColumns;
      }

      return baseColumns.filter(
        column =>
          !hidableColumns.includes(column.dataField) ||
          !hiddenColumns.includes(column.dataField),
      );
    }, [baseColumns, hidableColumns, hiddenColumns]);

    const hasCollapsibleContent = datas.some(data => data.collapsibleContent);
    // LocalStorage
    useEffect(() => {
      if (listName) {
        const storage = LocalStorage.getObject(listName);
        setHiddenColumns(_.isEmpty(storage) ? [] : storage);
      }
    }, []);

    useEffect(() => {
      if (listName) {
        LocalStorage.setObject(listName, hiddenColumns);
      }
    }, [hiddenColumns]);

    return (
      <div
        id={idFromProps}
        className={conatinerClassName}
        style={style}
        ref={containerRef}
      >
        {hidableColumns && (
          <PitayaShowColsCollapse
            className="pitayaSortable-colsCollapse"
            text={t('PitayaShowColsCollapse_options')}
            columns={hidableColumns}
            hiddenCols={hiddenColumns}
            setHiddenCols={setHiddenColumns}
            colToLabel={dataFieldToText}
          />
        )}
        {!hideHeader && (
          <PitayaSortableListHeader
            columns={columns}
            hideHandle={hideHandle}
            hidePosition={hidePosition}
            wrapCell={wrapCell}
            positionColumnText={positionColumnText}
            positionTooltipText={positionTooltipText}
            hasCollapsibleContent={hasCollapsibleContent}
          />
        )}
        {datas.map((data, index) => (
          <PitayaSortableListItem
            columns={columns}
            data={data}
            disabled={!!data.disabled}
            index={index}
            wrapCell={wrapCell}
            hideHandle={hideHandle}
            hidePosition={hidePosition}
            onPositionChange={onPositionChange}
            positionValidator={positionValidator}
            key={data.id || uuid()}
            hasCollapsibleContent={hasCollapsibleContent}
          />
        ))}
        {listEmptyShow && <PitayaSortableListEmpty listEmpty={listEmpty} />}
      </div>
    );
  },
);

const PitayaSortableList = (props: PitayaSortableContainerProps) => {
  const { datas, onPositionChange, helperClass, ...restProps } = props;
  const helperClassName = ['grabbing', helperClass].filter(Boolean).join(' ');
  const [helperContainer, setHelperContainer] = useState<HTMLElement>(
    document.body,
  );

  const onSortEnd: SortEndHandler = ({ oldIndex, newIndex }) => {
    const { position: oldPosition } = datas[oldIndex];
    const { position: newPosition } = datas[newIndex];

    onPositionChange?.(oldPosition, newPosition);
  };

  const setHelperRef = (node: HTMLDivElement | string | null) => {
    if (node && typeof node !== 'string') {
      setHelperContainer(node);
    }
  };

  return (
    <PitayaSortableContainer
      useDragHandle={true}
      datas={datas}
      onSortEnd={onSortEnd}
      onPositionChange={onPositionChange}
      setHelperRef={setHelperRef}
      helperContainer={helperContainer}
      helperClass={helperClassName}
      lockAxis="y"
      {...restProps}
    />
  );
};

export default PitayaSortableList;
