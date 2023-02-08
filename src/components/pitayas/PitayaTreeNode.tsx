import React, { useState, useEffect } from 'react';

import PitayaCollapse from '@src/components/pitayas/PitayaCollapse';
import PitayaCheckbox from '@src/components/pitayas/PitayaCheckbox';
import { Node } from '@src/components/pitayas/PitayaTree';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';
import { CheckStatus } from '@src/components/pitayas/types/CheckStatus';

type PitayaTreeNodeProps = React.HTMLProps<HTMLDivElement> & {
  node: Node;
  toggled?: () => void;
  ancestors?: string[];
  onCheck: (ancestors: string[]) => void;
};

const PitayaTreeNode = (props: PitayaTreeNodeProps) => {
  const { node, ancestors = [], toggled, onCheck } = props;

  const [open, setOpen] = useState(false);
  const [parentRefresh, setParentRefresh] = useState(false);

  useEffect(() => {
    if (toggled) {
      setTimeout(() => toggled(), 110);
    }
  }, [parentRefresh]);

  const onClick = (t: boolean) => {
    setOpen(t);
    if (toggled) {
      setTimeout(() => toggled(), 110);
    }
  };

  const copyAncestor = [...ancestors];
  copyAncestor.splice(0, 0, node.key);

  const className = [open && 'toggled'].filter(Boolean).join(' ');

  const hasChildrenNode = (
    <div className={className}>
      <PitayaGroup
        key={node.key}
        className="expansion-header"
        onClick={() => onClick(!open)}
      >
        <div className="checkbox-container">
          <PitayaCheckbox
            className={
              node.checked === CheckStatus.HALF_CHECKED ? 'half-checked' : ''
            }
            inputId={node.key}
            key={node.key}
            label={''}
            checked={node.checked === CheckStatus.CHECKED}
            onClick={e => {
              e.stopPropagation();
            }}
            onChange={e => {
              e.stopPropagation();
              onCheck(copyAncestor);
            }}
          />
          <span className="checkbox-label">{node.label}</span>
        </div>
      </PitayaGroup>
      <PitayaCollapse className="content" isOpen={open} refresh={parentRefresh}>
        {node.children?.map(child => (
          <PitayaTreeNode
            key={child.key}
            node={child}
            toggled={() => setParentRefresh(!parentRefresh)}
            ancestors={copyAncestor}
            onCheck={onCheck}
          />
        ))}
      </PitayaCollapse>
    </div>
  );

  const noChildrenNode = (
    <div className="checkbox-container">
      <PitayaCheckbox
        className="no-child"
        inputId={node.key}
        key={node.key}
        label={''}
        checked={node.checked === CheckStatus.CHECKED}
        onChange={() => {
          onCheck(copyAncestor);
        }}
      />
      <span className="checkbox-label">{node.label}</span>
    </div>
  );
  return node.children ? hasChildrenNode : noChildrenNode;
};

export default PitayaTreeNode;
