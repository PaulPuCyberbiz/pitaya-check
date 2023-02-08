import React, { useState } from 'react';
import PitayaPagination from '@src/components/pitayas/PitayaPagination.tsx';
import PitayaRoundBox from '../src/components/pitayas/PitayaRoundBox';
import PitayaGroup from '../src/components/pitayas/PitayaGroup';
import { FlexJustify } from '../src/components/pitayas/PitayaFlex';
import { action, decorate } from '@storybook/addon-actions';

export default class PaginationStorybook extends React.Component {
  constructor() {
    super();
    this.state = {
      limit: 7,
      currentPage: 1,
      totalPage: 4,
      currentPage2: 5,
      totalPage2: 22,
    };
    this.changePageHandler = this.changePageHandler.bind(this);
  }

  changePageHandler(currentPage) {
    decorate([args => [`${args[0]}`]]).action('change page of first block to')(
      currentPage,
    );
    this.setState({ currentPage });
  }
  changePageHandler2(currentPage) {
    decorate([args => [`${args[0]}`]]).action('change page of second block to')(
      currentPage,
    );
    this.setState({ currentPage2: currentPage });
  }

  render() {
    return (
      <div className="pt-5 px-5">
        <h1 className="mb-5">Pitaya pagination</h1>
        <PitayaRoundBox>
          <PitayaGroup>
            <h1>{`Current page: ${this.state.currentPage}`}</h1>
            <hr />
            <br />
            <PitayaPagination
              currentPage={this.state.currentPage}
              flexJustify={FlexJustify.END}
              limit={this.state.limit}
              totalPages={this.state.totalPage}
              onPageChange={page => this.changePageHandler(page)}
            />
          </PitayaGroup>
        </PitayaRoundBox>

        <PitayaRoundBox>
          <PitayaGroup>
            <h1>
              With total count, {`Current page: ${this.state.currentPage2}`}
            </h1>
            <hr />
            <br />
            <PitayaPagination
              currentPage={this.state.currentPage2}
              flexJustify={FlexJustify.END}
              limit={this.state.limit}
              objName="商品"
              totalCount={100}
              totalPages={this.state.totalPage2}
              onPageChange={page => this.changePageHandler2(page)}
            />
            <hr />
            <br />
            <PitayaPagination
              currentPage={this.state.currentPage2}
              flexJustify={FlexJustify.SPACE_BETWEEN}
              limit={this.state.limit}
              objName="群組"
              totalCount={100}
              totalPages={this.state.totalPage2}
              onPageChange={page => this.changePageHandler2(page)}
            />
          </PitayaGroup>
        </PitayaRoundBox>
      </div>
    );
  }
}
