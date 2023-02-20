import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './node-content-renderer.module.scss';

function isDescendant(older, younger) {
  return (
    !!older.children &&
    typeof older.children !== 'function' &&
    older.children.some(
      child => child === younger || isDescendant(child, younger),
    )
  );
}

// eslint-disable-next-line react/prefer-stateless-function
class NodeContent extends Component {
  render() {
    const {
      scaffoldBlockPxWidth,
      toggleChildrenVisibility,
      connectDragPreview,
      connectDragSource,
      isDragging,
      canDrop,
      canDrag,
      node,
      title,
      subtitle,
      draggedNode,
      path,
      treeIndex,
      isSearchMatch,
      isSearchFocus,
      icons,
      buttons,
      className,
      style,
      didDrop,
      swapFrom,
      swapLength,
      swapDepth,
      treeId, // Not needed, but preserved for other renderers
      isOver, // Not needed, but preserved for other renderers
      parentNode, // Needed for dndManager
      rowDirection,
      ...otherProps
    } = this.props;
    const nodeClass = title || node.className;
    const nodeBody = title || node.body;
    const isDraggedDescendant = draggedNode && isDescendant(draggedNode, node);
    const isLandingPadActive = !didDrop && isDragging;
    const nodeContent = connectDragPreview(
      <div
        className={
          styles.rowContents +
          (isSearchMatch ? ` ${styles.rowSearchMatch}` : '') +
          (isSearchFocus ? ` ${styles.rowSearchFocus}` : '') +
          (!canDrag ? ` ${styles.rowContentsDragDisabled}` : '') +
          (path ? ` node_level_${path.length}` : '') +
          (nodeClass ? ` ${nodeClass}` : '')
        }
      >
        <div className="dragIcon">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Basic-Icon-/-Move"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <path
                d="M7,5.50041609 C7,5.3223301 7.03661581,5.15339806 7.09320388,4.99528433 C7.09320388,4.99528433 7.19056865,4.66990291 7.64909847,4.26712899 C7.89126214,4.0998613 8.18335645,4 8.49958391,4 C9.32676838,4 10,4.67323162 10,5.50041609 C10,6.15533981 9.5739251,6.70873786 8.98723994,6.91178918 C8.61359223,7.10319001 8.07184466,6.93009709 8.07184466,6.93009709 C7.45436893,6.7445215 7,6.1778086 7,5.50041609 Z"
                id="Path"
                fill="#8E99AD"
              />
              <path
                d="M14,5.50041609 C14,5.3223301 14.0366158,5.15339806 14.0932039,4.99528433 C14.0932039,4.99528433 14.1905687,4.66990291 14.6490985,4.26712899 C14.8912621,4.0998613 15.1833564,4 15.4995839,4 C16.3267684,4 17,4.67323162 17,5.50041609 C17,6.15533981 16.5739251,6.70873786 15.9872399,6.91178918 C15.6135922,7.10319001 15.0718447,6.93009709 15.0718447,6.93009709 C14.4543689,6.7445215 14,6.1778086 14,5.50041609 Z"
                id="PathCopy-3"
                fill="#8E99AD"
              />
              <path
                d="M7,11.5004161 C7,11.3223301 7.03661581,11.1533981 7.09320388,10.9952843 C7.09320388,10.9952843 7.19056865,10.6699029 7.64909847,10.267129 C7.89126214,10.0998613 8.18335645,10 8.49958391,10 C9.32676838,10 10,10.6732316 10,11.5004161 C10,12.1553398 9.5739251,12.7087379 8.98723994,12.9117892 C8.61359223,13.10319 8.07184466,12.9300971 8.07184466,12.9300971 C7.45436893,12.7445215 7,12.1778086 7,11.5004161 Z"
                id="PathCopy"
                fill="#8E99AD"
              />
              <path
                d="M14,11.5004161 C14,11.3223301 14.0366158,11.1533981 14.0932039,10.9952843 C14.0932039,10.9952843 14.1905687,10.6699029 14.6490985,10.267129 C14.8912621,10.0998613 15.1833564,10 15.4995839,10 C16.3267684,10 17,10.6732316 17,11.5004161 C17,12.1553398 16.5739251,12.7087379 15.9872399,12.9117892 C15.6135922,13.10319 15.0718447,12.9300971 15.0718447,12.9300971 C14.4543689,12.7445215 14,12.1778086 14,11.5004161 Z"
                id="PathCopy-4"
                fill="#8E99AD"
              />
              <path
                d="M7,17.5004161 C7,17.3223301 7.03661581,17.1533981 7.09320388,16.9952843 C7.09320388,16.9952843 7.19056865,16.6699029 7.64909847,16.267129 C7.89126214,16.0998613 8.18335645,16 8.49958391,16 C9.32676838,16 10,16.6732316 10,17.5004161 C10,18.1553398 9.5739251,18.7087379 8.98723994,18.9117892 C8.61359223,19.10319 8.07184466,18.9300971 8.07184466,18.9300971 C7.45436893,18.7445215 7,18.1778086 7,17.5004161 Z"
                id="PathCopy-2"
                fill="#8E99AD"
              />
              <path
                d="M14,17.5004161 C14,17.3223301 14.0366158,17.1533981 14.0932039,16.9952843 C14.0932039,16.9952843 14.1905687,16.6699029 14.6490985,16.267129 C14.8912621,16.0998613 15.1833564,16 15.4995839,16 C16.3267684,16 17,16.6732316 17,17.5004161 C17,18.1553398 16.5739251,18.7087379 15.9872399,18.9117892 C15.6135922,19.10319 15.0718447,18.9300971 15.0718447,18.9300971 C14.4543689,18.7445215 14,18.1778086 14,17.5004161 Z"
                id="PathCopy-5"
                fill="#8E99AD"
              />
            </g>
          </svg>
        </div>
        <div className={styles.rowLabel}>{nodeBody}</div>

        <div className={styles.rowToolbar}>
          {buttons.map((btn, index) => (
            <div
              key={index} // eslint-disable-line react/no-array-index-key
              className={styles.toolbarButton}
            >
              {btn}
            </div>
          ))}
        </div>
      </div>,
    );

    return (
      <div className="nodeContent" style={{ height: '100%' }} {...otherProps}>
        {toggleChildrenVisibility &&
          node.children &&
          (node.children.length > 0 || typeof node.children === 'function') && (
            <div>
              <button
                type="button"
                aria-label={node.expanded ? 'Collapse' : 'Expand'}
                className={
                  (node.expanded
                    ? styles.collapseButton
                    : styles.expandButton) +
                  (path ? ` node_level_${path.length}` : '') +
                  (nodeClass ? ` ${nodeClass}` : '')
                }
                onClick={() =>
                  toggleChildrenVisibility({
                    node,
                    path,
                    treeIndex,
                  })
                }
              />

              {node.expanded && !isDragging && (
                <div
                  style={{ width: scaffoldBlockPxWidth }}
                  className={styles.lineChildren}
                />
              )}
            </div>
          )}

        <div
          className={
            styles.rowWrapper +
            (!canDrag ? ` ${styles.rowWrapperDragDisabled}` : '')
          }
        >
          <div
            className={
              styles.row +
              (isLandingPadActive ? ` ${styles.rowLandingPad}` : '') +
              (isLandingPadActive && !canDrop
                ? ` ${styles.rowCancelPad}`
                : '') +
              (className ? ` ${className}` : '')
            }
            style={{
              opacity: isDraggedDescendant ? 0.5 : 1,
              ...style,
            }}
          >
            {canDrag
              ? connectDragSource(nodeContent, { dropEffect: 'copy' })
              : nodeContent}
          </div>
        </div>
      </div>
    );
  }
}

NodeContent.defaultProps = {
  buttons: [],
  canDrag: false,
  canDrop: false,
  className: '',
  draggedNode: null,
  icons: [],
  isSearchFocus: false,
  isSearchMatch: false,
  parentNode: null,
  style: {},
  subtitle: null,
  swapDepth: null,
  swapFrom: null,
  swapLength: null,
  title: null,
  toggleChildrenVisibility: null,
  rowDirection: 'ltr',
};

NodeContent.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.node),
  canDrag: PropTypes.bool,
  className: PropTypes.string,
  icons: PropTypes.arrayOf(PropTypes.node),
  isSearchFocus: PropTypes.bool,
  isSearchMatch: PropTypes.bool,
  node: PropTypes.shape({}).isRequired,
  path: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ).isRequired,
  scaffoldBlockPxWidth: PropTypes.number.isRequired,
  style: PropTypes.shape({}),
  subtitle: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  swapDepth: PropTypes.number,
  swapFrom: PropTypes.number,
  swapLength: PropTypes.number,
  title: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  toggleChildrenVisibility: PropTypes.func,
  treeIndex: PropTypes.number.isRequired,
  treeId: PropTypes.string.isRequired,

  // Drag and drop API functions
  // Drag source
  connectDragPreview: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  didDrop: PropTypes.bool.isRequired,
  draggedNode: PropTypes.shape({}),
  isDragging: PropTypes.bool.isRequired,
  parentNode: PropTypes.shape({}), // Needed for dndManager
  // Drop target
  canDrop: PropTypes.bool,
  isOver: PropTypes.bool.isRequired,
  rowDirection: PropTypes.string,
};

export default NodeContent;
