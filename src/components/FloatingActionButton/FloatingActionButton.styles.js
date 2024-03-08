// src/components/FloatingActionButton/FloatingActionButton.styles.js
import { styled } from 'styled-components';

export const FabContainer = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
`;

export const FabIcon = styled.div.attrs((props) => ({
  isFabOpen: props.isFabOpen,
}))`
  background-color: ${({ isFabOpen }) => (isFabOpen ? '#F8F8F8' : '#0F0F0F')};
  color: ${({ isFabOpen }) => (isFabOpen ? '#0F0F0F' : '#F8F8F8')};
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export const FabOptions = styled.div.attrs((props) => ({
  isFabOpen: props.isFabOpen,
}))`
  display: ${({ isFabOpen }) => (isFabOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  bottom: 70px;
  right: 0;
`;

export const FabOption = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #808080;
    color: #f8f8f8;
  }
`;
