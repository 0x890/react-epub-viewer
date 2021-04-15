import React from 'react'
import styled from 'styled-components'
// components
import CloseBtn from 'components/sideMenu/CloseBtn'
// lib
import * as styles from 'lib/styles/styles'
import zIndex from 'lib/styles/zIndex'
import palette from 'lib/styles/palette'

const Wrapper = ({ title, show, onClose, children }: Props, ref: any) => {
  return (
    <Container show={show} ref={ref}>
      <Header>
        <span>{title}</span>
        <CloseBtn onClick={onClose} />
      </Header>
      {children}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 340px;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: ${zIndex.menu};
  box-shadow: -4px 0 8px 0 rgba(0,0,0,.16);
  background-color: ${palette.white};
  border-radius: 16px 0 0 16px;
  transform: ${({ show }: { show: boolean }) => show 
    ? `translateX(0px) scale(1)`
    : `translateX(420px) scale(.8)`
  };
  transition: .3s ${styles.transition};
  overflow-y: auto;
  ${styles.scrollbar()};
`;

const Header = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;

  & > span {
    padding-left: 24px;
    font-size: 21px;
    font-weight: 600;
  }
`;

interface Props {
  title: string;
  show: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default React.forwardRef(Wrapper)