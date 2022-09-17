import { Link as RouterLink } from "react-router-dom";
import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState } from "react";

const formData = {
  displayName: '',
  email: '',
  password: '',
};

const formValidations = {
  displayName: [(value) => value.length >= 1, 'Debe escribir un nombre.'],
  password: [(value) => value.length >= 6, 'El pass debe tener minimo 6 caracteres.'],
  email: [(value) => value.includes('@'), 'El correo debe tener un @.'],
};

export const RegisterPage = () => {

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const { formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    console.log(formState);
    console.log(displayNameValid);
  };

  return (
    <AuthLayout title="Crear Cuenta">

      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Cosme Fulanito"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && isFormSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="example@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && isFormSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Pass"
              type="password"
              placeholder="pass"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && isFormSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
              >
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end" >
            <Typography sx={{ mr: 1 }}>Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  );
};
