import React from 'react';
import Card, { CardVariant } from './components/Card';

function App() {
  return (
    <div>
      <Card variant={CardVariant.primary} width='200px' height='200px'>
          <button>Кнопка</button>
      </Card>
    </div>
  );
}

export default App;
