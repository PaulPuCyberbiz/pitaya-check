import styled from 'styled-components';

const CrossIcon = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  width: 13px;
  height: 13px;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    content: ' ';
    height: 100%;
    width: 2px;
    background-color: #333333;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;
export default CrossIcon;
