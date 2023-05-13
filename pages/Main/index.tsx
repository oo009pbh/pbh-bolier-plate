import React, { useState, useEffect } from 'react';
import loadable from '@loadable/component';
import { useNavigate } from 'react-router-dom';

// Styles
import { Container } from '@pages/Main/styles';

// Components
import Button from '@atom/Button';

const Main = () => {
  return (
    <Container>
      <Button>버튼</Button>
    </Container>
  );
};

export default Main;
