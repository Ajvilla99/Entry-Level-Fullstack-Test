import React, { useState } from 'react';
import { Container, Box, Button, Typography } from '@mui/material';
import UpdateForm from './UpdateForm'

function Profile({ user }) {

  const [update, setUpdate] = useState(false);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h3" gutterBottom>
          Hola {user.firstname}
        </Typography>
        <Button
          type='button'
          onClick={() => setUpdate(!update)}
          variant="contained"
          size="large"
          sx={{ mt: 3 }}
        >
          Actualizar perfil
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{ mt: 2 }}
        >
          Cerrar sesión
        </Button>
      </Box>
      {
        update && (
          <UpdateForm  id={user.id} />
        )
      }
    </Container>
  );
}

export default Profile;
