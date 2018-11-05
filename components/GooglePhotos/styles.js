import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: black;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 500ms ease, transform 500ms ease;
  ${({ isOpen }) => isOpen
    && `
      visibility: initial;
      opacity: 1;
      transform: translateX(0px);
    `};
`;

const Button = styled.button`
  position: absolute;
  width: 30%;
  height: 100%;
  top: 0;
  bottom: 0;
  cursor: pointer;
  transition: opacity 200ms ease;
  background: transparent;
  border: none;
  outline: 0;
  &:hover {
    opacity: 1;
  }
  ${({ leftColumn }) => leftColumn
    && `
    left: 0;
  `};
  ${({ rightColumn }) => rightColumn
    && `
    right: 0;
  `};
`;

const Arrow = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 28px;
  position: absolute;
  top: 50%;
  margin-top: -28px;
  height: 56px;
  width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 200ms ease;
  opacity: 1;
  ${({ isLeft }) => isLeft && 'left: 28px;'};
  ${({ isRight }) => isRight && 'right: 28px;'};
  ${({ mouseIdle }) => mouseIdle && 'opacity: 0;'};
`;

const Close = styled.div`
  height: 48px;
  width: 48px;
  position: absolute;
  top: 14px;
  left: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 200ms ease;
  opacity: 1;
  z-index: 1000;
  ${({ mouseIdle }) => mouseIdle && 'opacity: 0;'};
  & svg {
    width: 35px;
    height: 35px;
  }
`;

export {
  Overlay, Image, Button, Arrow, Close,
};
