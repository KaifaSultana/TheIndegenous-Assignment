import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { CircularProgress, Grid, Paper, Typography } from '@mui/material';


const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(
          'https://api.gyanibooks.com/library/get_dummy_notes'
        );
        setNotes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={2}>
      {notes.map((note) => (
        <Grid item xs={12} sm={6} md={4} key={note.id}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              {note.title}
            </Typography>
            <Typography>{note.body}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default NoteList;
