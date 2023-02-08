import React from 'react';
import styles from '@src/assets/stylesheets/pitayas/PitayaTree.scss';
import PitayaTreeNode from '@src/components/pitayas/PitayaTreeNode';
import { CheckStatus } from '@src/components/pitayas/types/CheckStatus';

export type Node = {
  key: string;
  label: string;
  children?: Node[];
  checked: CheckStatus;
};

export type PitayaTreeProps = Omit<React.HTMLProps<HTMLDivElement>, 'title'> & {
  nodes: Node[];
  onCheck: (nodes: Node[]) => void;
};

const PitayaTree = (props: PitayaTreeProps) => {
  const { className: name, nodes, onCheck, ...rest } = props;

  const className = [styles['pitaya-tree'], name].filter(Boolean).join(' ');

  const changeSelectNode = (ancestors: string[], copyNodes: Node[]): Node[] => {
    const lastAncestor = ancestors.pop();

    return copyNodes.map(node => {
      if (node.key === lastAncestor) {
        if (node.children && ancestors.length) {
          let totalChecked = 0;

          node.children = changeSelectNode(ancestors, node.children);
          node.children.forEach(cn => {
            switch (cn.checked) {
              case CheckStatus.CHECKED:
                totalChecked += 1;
                break;
              case CheckStatus.HALF_CHECKED:
                totalChecked += 0.5;
                break;
            }
          });
          if (totalChecked === node.children.length) {
            node.checked = CheckStatus.CHECKED;
          } else if (totalChecked > 0) {
            node.checked = CheckStatus.HALF_CHECKED;
          } else {
            node.checked = CheckStatus.NONE;
          }
        } else {
          node.checked =
            node.checked === CheckStatus.CHECKED
              ? CheckStatus.NONE
              : CheckStatus.CHECKED;
          changeLowerNodes(node, node.checked);
        }
      }
      return node;
    });
  };

  const changeLowerNodes = (selectNode: Node, checkStatus: CheckStatus) => {
    if (selectNode.children) {
      selectNode.children = selectNode.children.map(node => {
        node.checked = checkStatus;
        changeLowerNodes(node, checkStatus);
        return node;
      });
    }
  };

  const changeNodes = (ancestors: string[], copyNodes: Node[]) => {
    onCheck(changeSelectNode(ancestors, copyNodes));
  };

  return (
    <div className={className} {...rest}>
      {nodes &&
        nodes.map(node => {
          return (
            <PitayaTree.Node
              key={node.key}
              node={node}
              onCheck={ancestors => changeNodes(ancestors, nodes)}
            />
          );
        })}
    </div>
  );
};

PitayaTree.Node = PitayaTreeNode;

export default PitayaTree;
