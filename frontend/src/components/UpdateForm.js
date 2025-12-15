import React, { useEffect, useState } from 'react';
import { Container, Box, TextField, Button, Typography, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';

function UpdateForm({ id }) {

    const url = `http://localhost:3001/users/${id}`


    const { control, handleSubmit, formState: { errors }, setError } = useForm();

    const [dataUser, setDataUser] = useState(null)

    const getDataUser = async (id) => {
        try {
            const { data } = await axios.get(url)
            setDataUser(data)
            return;
        } catch (error) {
            throw new Error(error)
        }
    }

    const onSubmit = async (data) => {
        try {
            const res = await axios.post(url, data)
            alert('Actualizado correctamente')
            return res;
        } catch (error) {
            throw new Error({
                message: 'Error al actualizar los datos'
            })
        }
    }

    useEffect(() => {
        getDataUser(id);
    }, [])

    if (!dataUser) return <p></p>

    return (
        <Container maxWidth="sm">
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                <Controller
                    name="firstname"
                    control={control}
                    defaultValue={dataUser.firstname}
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
                    defaultValue={dataUser.lastname}
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
                    defaultValue={dataUser.email}
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
                {/* <Controller
                    name="password"
                    control={control}
                    defaultValue={''}
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
                /> */}

                <Controller
                    name="typeId"
                    control={control}
                    defaultValue={dataUser.typeId}
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
                    defaultValue={dataUser.identification}
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
                    defaultValue={dataUser.phone}
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
                    defaultValue={dataUser.address}
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
                    Actualizar Perfil
                </Button>
            </Box>
        </Container>
    );
}

export default UpdateForm;
