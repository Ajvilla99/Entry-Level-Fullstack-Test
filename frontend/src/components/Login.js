import { useForm, Controller } from 'react-hook-form';
import { Container, Box, TextField, Button, Typography, Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Login({ onLogin }) {

  const { control, handleSubmit, formState: { errors }, setError } = useForm();

  const onSubmit = async(data) => {
    try {
      const res = await axios.post('http://localhost:3001/auth/login', {
        ...data
      });
      onLogin(res.data.user)
    } catch (error) {
      setError(error)
      console.error(error)
    }
  };

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
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Iniciar sesión
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
            <Controller
              name="email"
              control={control}
              defaultValue="complete@cd.com"
              rules={{
                required: 'El correo electrónico es requerido',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Dirección de correo electrónico inválida',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Correo electrónico"
                  type="email"
                  autoComplete="email"
                  autoFocus
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue="Pass@123"
              rules={{
                required: 'La contraseña es requerida',
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Contraseña"
                  type="password"
                  autoComplete="current-password"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar sesión
            </Button>

            <div>
              <span>¿No tienes una cuenta?</span>
              <NavLink
                to='/register'

                type='button'
              >
                Registrate
              </NavLink>
            </div>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;
