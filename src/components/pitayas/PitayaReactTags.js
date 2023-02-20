import React from 'react';
import ReactTags from '@src/components/react_tag_autocomplete/ReactTags.js';
import styles from '@src/assets/stylesheets/pitayas/PitayaReactTags.module.scss';

export default class PitayaReactTags extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="round_box_control_group input_with_label">
        {!!this.props.label && (
          <label className="round_box_label">{this.props.label}</label>
        )}
        <div className={styles.pitayaReactTags}>
          <ReactTags
            autofocus={false}
            tags={this.props.tags}
            placeholder={this.props.placeholder}
            suggestions={this.props.suggestions}
            handleDelete={this.props.handleDelete}
            handleAddition={this.props.handleAddition}
            minQueryLength={0}
          />
        </div>
      </div>
    );
  }
}
