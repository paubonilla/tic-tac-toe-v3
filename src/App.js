import React from 'react';
import './App.css';
import Game from './components/Game';
import { AppContainer, AppWrapper, AppInner } from './styled'

function App() {
  return (
    <AppContainer>
      <AppWrapper>
        <AppInner>
          <Game />
        </AppInner>
      </AppWrapper>
    </AppContainer>
  );
}

export default App;
