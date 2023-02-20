import React, { ComponentClass } from 'react';
// tslint:disable-next-line:no-submodule-imports
import 'react-sortable-tree/style.css';
import SortableTree, {
  TreeItem,
  NodeData,
  FullTree,
  OnMovePreviousAndNextLocation,
  OnVisibilityToggleData,
  NodeRendererProps,
} from 'react-sortable-tree';
import defaultMinimal from 'react-sortable-tree-theme-minimal';
import NodeContent from '@src/components/pitayas/pitayaNestable/node-content-renderer';
import styles from '@src/assets/stylesheets/pitayas/PitayaNestable.module.scss';
// This only needs to be imported once in your app

export interface OnMoveData
  extends NodeData,
    FullTree,
    OnMovePreviousAndNextLocation {}
export type HandleAdd = (nestData: TreeItem) => void;
export type HandleEdit = (id: number) => void;
export type HandleDelete = (nestData: TreeItem) => void;
export interface PitayaNestableProps {
  nestData: TreeItem[];
  rowHeight?: number;
  createDOM: (data: TreeItem) => TreeItem;
  onChange: (treeData: TreeItem[]) => void;
  onMove?: (data: OnMoveData) => void;
  onToggle?: (data: OnVisibilityToggleData) => void;
  nestableEmpty?: string;
}

const getHeight = (nestData: TreeItem[], height: number): number => {
  for (const nestItem of nestData) {
    height++;
    if (
      nestItem.expanded &&
      nestItem.children !== undefined &&
      nestItem.children.length > 0
    ) {
      height = getHeight(nestItem.children as TreeItem[], height);
    }
  }
  return height;
};

const PitayaNestable = (props: PitayaNestableProps) => {
  const {
    nestData: rawNestDate,
    rowHeight = 50,
    createDOM,
    onChange,
    onMove,
    onToggle,
    nestableEmpty,
  } = props;

  const totalHeight = getHeight(rawNestDate, 0) * rowHeight;
  const emptyHeight = nestableEmpty ? rowHeight : 0;

  const nestData = createDOM
    ? rawNestDate.map(data => createDOM(data))
    : rawNestDate;

  return (
    <div
      className={styles.pitayaNestable}
      style={{ height: `${totalHeight || emptyHeight}px` }}
    >
      <SortableTree
        treeData={nestData}
        onChange={onChange}
        onMoveNode={onMove}
        onVisibilityToggle={onToggle}
        theme={defaultMinimal}
        rowHeight={rowHeight}
        scaffoldBlockPxWidth={40}
        nodeContentRenderer={
          NodeContent as unknown as ComponentClass<NodeRendererProps, any>
        }
        placeholderRenderer={() =>
          nestableEmpty ? (
            <div
              style={{ height: `${rowHeight}px` }}
              className="pitayaNestable_empty"
            >
              <div>{nestableEmpty}</div>
            </div>
          ) : null
        }
      />
    </div>
  );
};

export default PitayaNestable;
