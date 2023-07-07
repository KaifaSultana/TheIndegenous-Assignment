import React from 'react';
import { Container } from '@mui/material';
import NoteList from './NoteList';

const App = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <NoteList />
    </Container>
  );
};

export default App;

