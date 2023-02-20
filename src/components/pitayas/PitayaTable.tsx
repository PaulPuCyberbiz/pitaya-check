import React, { HtmlHTMLAttributes } from 'react';
import styles from '@src/assets/stylesheets/pitayas/PitayaTable.module.scss';

export interface PitayaTableItem {
  className: string;
  body: JSX.Element | string;
}
export interface PitayaTableRow {
  body?: JSX.Element;
  rowItem?: PitayaTableItem[];
  onClick?: () => void;
}
interface PitayaTableProps extends HtmlHTMLAttributes<HTMLElement> {
  tableTitle: PitayaTableItem[];
  tableContent: PitayaTableRow[];
  tableEmpty?: string;
}

const PitayaTable = ({
  tableTitle,
  tableContent,
  tableEmpty,
  children,
}: PitayaTableProps) => (
  <div className={styles.pitayaTable}>
    <div>
      <div className="tableRow table-header">
        {tableTitle.map((title, index) => (
          <div key={index} className={`tableHead ${title.className}`}>
            {title.body}
          </div>
        ))}
      </div>
      {tableContent.map((contentRow, i) => {
        const { body, rowItem } = contentRow;
        const onClick = contentRow.onClick || (() => {});
        return body ? (
          <div key={i} className="tableRow custom-row" onClick={onClick}>
            {body}
          </div>
        ) : (
          <div key={i} className={styles.tableRow} onClick={onClick}>
            {rowItem &&
              rowItem.map((content, j) => (
                <div
                  key={`${i} ${j}`}
                  className={`standard ${content.className}`}
                >
                  {content.body}
                </div>
              ))}
          </div>
        );
      })}
      {tableContent.length === 0 && (
        <div className={`${styles.tableRow} empty`}>{tableEmpty}</div>
      )}
      {children}
    </div>
  </div>
);

export default PitayaTable;
