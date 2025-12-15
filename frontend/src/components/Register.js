import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Container, Box, TextField, Button, Typography, Paper, FormControl, InputLabel, Select, MenuItem, Alert } from '@mui/material';
import { Navigate, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios';

function Register() {

  const { control, handleSubmit, formState: { errors }, setError } = useForm();

  const onSubmit = async (data) => {
    try {
      const { data: { msg } } = await axios.post('http://localhost:3001/users', data)
      Swal.fire({
        title: msg,
      });
    } catch (error) {
      setError(error);
      throw new Error('Fallo')
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
            Crear cuenta
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
            {/* fullname */}
            <Controller
              name="firstname"
              control={control}
              defaultValue=""
              rules={{
                required: 'El campo nombre es requerido',
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Primer nombre"
                  type="firstname"
                  autoComplete="firstname"
                  autoFocus
                  error={!!errors.firstname}
                  helperText={errors.firstname?.message}
                />
              )}
            />
            <Controller
              name="lastname"
              control={control}
              defaultValue=""
              rules={{
                required: 'El campo apellido es requerido',
                minLength: 2
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Apellido"
                  type="lastname"
                  autoComplete="lastname"
                  autoFocus
                  error={!!errors.lastname}
                  helperText={errors.lastname?.message}
                />
              )}
            />
            {/* email */}
            <Controller
              name="email"
              control={control}
              defaultValue=""
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
              defaultValue=""
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

            <Controller
              name="typeId"
              control={control}
              defaultValue=""
              rules={{
                required: 'La contraseña es requerida'
              }}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel>Tipo de documento</InputLabel>
                  <Select
                    {...field}
                    label="Tipo De Documento"
                    type="typeId"
                    autoComplete="current-typeId"
                    error={!!errors.typeId}
                    helperText={errors.typeId?.message}
                  >
                    <MenuItem value={1}>C.C Cedula de ciudadania</MenuItem>
                    <MenuItem value={2}>T.I Tarjeta de Identidad</MenuItem>
                  </Select>
                </FormControl>

              )}
            />
            <Controller
              name="identification"
              control={control}
              defaultValue=""
              rules={{
                required: 'El campo identeificacion es requerido',
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Identificacion"
                  type="identification"
                  autoComplete="current-identification"
                  error={!!errors.identification}
                  helperText={errors.identification?.message}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              rules={{
                required: 'El campo telefono es requerido',
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Telefono"
                  type="phone"
                  autoComplete="current-phone"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              )}
            />

            <Controller
              name="address"
              control={control}
              defaultValue=""
              rules={{
                required: 'El campo direccion es requerido',
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Direccion"
                  type="address"
                  autoComplete="current-address"
                  error={!!errors.address}
                  helperText={errors.address?.message}
                />
              )}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Crear Cuenta
            </Button>

            <div>
              <span>¿Ya tienes una cuenta?</span>
              <NavLink
                to='/'

                type='button'
              >
                Iniciar Sesion
              </NavLink>
            </div>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Register;
