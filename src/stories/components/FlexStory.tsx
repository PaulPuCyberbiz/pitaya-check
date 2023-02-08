import React from 'react';
import PitayaFlex, {
  PitayaFlexItem,
  FlexDirection,
  FlexAlignItems,
  FlexJustify,
} from '@src/components/pitayas/PitayaFlex';
import PitayaGroup from '@src/components/pitayas/PitayaGroup';

const FlexStory = () => {
  const children = (
    <>
      <PitayaFlexItem
        style={{ backgroundColor: 'red', height: '30px', width: '30px' }}
      />
      <PitayaFlexItem
        style={{ backgroundColor: 'yellow', height: '60px', width: '60px' }}
      />
      <PitayaFlexItem
        style={{ backgroundColor: 'green', height: '90px', width: '90px' }}
      />
    </>
  );
  return (
    <div className="pt-5 px-5">
      <h1 className="mb-4">Pitaya Flex</h1>
      <PitayaFlex style={{ backgroundColor: '#aaa', width: '100%' }}>
        {children}
      </PitayaFlex>
      <hr />
      <h1 className="my-4">Exmaple</h1>
      <div className="row m-0">
        <div className="col-lg-6 col-md-12 p-0">
          <h3>
            方向 (flexDirection: FlexDirection, default: FlexDirection.ROW)
          </h3>
          <p>共兩種方向 FlexDirection.ROW 和 FlexDirection.COLUMN </p>
          <br />
        </div>
        <div className="col-lg-6 col-md-12 bg-light px-5 py-4 mb-5">
          <PitayaGroup>
            <h5>FlexDirection.ROW</h5>
            <PitayaFlex
              flexDirection={FlexDirection.ROW}
              style={{
                backgroundColor: '#aaa',
                height: '100px',
                width: '100%',
              }}
            >
              {children}
            </PitayaFlex>
          </PitayaGroup>
          <PitayaGroup>
            <h5>FlexDirection.COLUMN</h5>
            <PitayaFlex
              flexDirection={FlexDirection.COLUMN}
              style={{
                backgroundColor: '#aaa',
                height: '250px',
                width: '100%',
              }}
            >
              {children}
            </PitayaFlex>
          </PitayaGroup>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-lg-6 col-md-12 p-0">
          <h3>對齊 (flexAlignItems: FlexAlignItems)</h3>
          <p>共有 START, END, CENTER, BASELINE 四種選項</p>
          <p>預設為 FlexAlignItems.CENTER </p>
          <br />
        </div>
        <div className="col-lg-6 col-md-12 bg-light px-5 py-4 mb-5">
          <PitayaGroup>
            <h5>FlexAlignItems.CENTER</h5>
            <PitayaFlex
              flexAlignItems={FlexAlignItems.CENTER}
              style={{
                backgroundColor: '#aaa',
                height: '100px',
                width: '100%',
              }}
            >
              {children}
            </PitayaFlex>
          </PitayaGroup>
          <PitayaGroup>
            <h5>FlexAlignItems.START</h5>
            <PitayaFlex
              flexAlignItems={FlexAlignItems.START}
              style={{
                backgroundColor: '#aaa',
                height: '100px',
                width: '100%',
              }}
            >
              {children}
            </PitayaFlex>
          </PitayaGroup>
          <PitayaGroup>
            <h5>FlexAlignItems.END</h5>
            <PitayaFlex
              flexAlignItems={FlexAlignItems.END}
              style={{
                backgroundColor: '#aaa',
                height: '100px',
                width: '100%',
              }}
            >
              {children}
            </PitayaFlex>
          </PitayaGroup>
          <PitayaGroup>
            <h5>FlexAlignItems.BASELINE</h5>
            <PitayaFlex
              flexAlignItems={FlexAlignItems.BASELINE}
              style={{
                backgroundColor: '#aaa',
                height: '100px',
                width: '100%',
              }}
            >
              {children}
            </PitayaFlex>
          </PitayaGroup>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-lg-6 col-md-12 p-0">
          <h3>子元件分配 (flexAlignItems: FlexJustify)</h3>
          <p>共有 START, END, CENTER, SPACE_BETWEEN 四種選項</p>
          <p>預設為 FlexJustify.START </p>
          <br />
        </div>
        <div className="col-lg-6 col-md-12 bg-light px-5 py-4 mb-5">
          <PitayaGroup>
            <h5>FlexJustify.START</h5>
            <PitayaFlex
              flexJustify={FlexJustify.START}
              style={{
                backgroundColor: '#aaa',
                height: '100px',
                width: '100%',
              }}
            >
              {children}
            </PitayaFlex>
          </PitayaGroup>
          <PitayaGroup>
            <h5>FlexJustify.CENTER</h5>
            <PitayaFlex
              flexJustify={FlexJustify.CENTER}
              style={{
                backgroundColor: '#aaa',
                height: '100px',
                width: '100%',
              }}
            >
              {children}
            </PitayaFlex>
          </PitayaGroup>
          <PitayaGroup>
            <h5>FlexJustify.END</h5>
            <PitayaFlex
              flexJustify={FlexJustify.END}
              style={{
                backgroundColor: '#aaa',
                height: '100px',
                width: '100%',
              }}
            >
              {children}
            </PitayaFlex>
          </PitayaGroup>
          <PitayaGroup>
            <h5>FlexJustify.SPACE_BETWEEN</h5>
            <PitayaFlex
              flexJustify={FlexJustify.SPACE_BETWEEN}
              style={{
                backgroundColor: '#aaa',
                height: '100px',
                width: '100%',
              }}
            >
              {children}
            </PitayaFlex>
          </PitayaGroup>
        </div>
      </div>
    </div>
  );
};

export default FlexStory;
