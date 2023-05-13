import React, { useState, useEffect } from 'react';
import loadable from '@loadable/component';
import { useNavigate } from 'react-router-dom';

// Styles
import { Container } from '@pages/Main/styles';

// Components
import Button from '@atom/Button';
import { handlerModal, OneButtonModal } from '@molecule/Modal';

const Main = () => {
  const oneButtonModalHandler = handlerModal();

  return (
    <Container>
      <Button onClick={oneButtonModalHandler.onToggleModal}>버튼</Button>
      <OneButtonModal handler={oneButtonModalHandler} buttonClick={oneButtonModalHandler.onToggleModal}>
        <>안녕하세요?</>
      </OneButtonModal>
    </Container>
  );
};

export default Main;
