import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import { Google } from "@mui/icons-material";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { checkingAuthentication, startGoogleSingIn } from "../../store/auth/thunks";
import { useMemo } from "react";

export const LoginPage = () => {

  const { status } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange, formState } = useForm({
    email: 'franciscotimez@gmail.com',
    password: '1234'
  });

  const isAuthenticating = useMemo(() => status === 'auth-checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuthentication());
  };

  const onGoogleSingIn = () => {
    console.log("Google sing in");

    dispatch(startGoogleSingIn());
  };

  return (
    <AuthLayout title="Login">

      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="example@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
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
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
                onClick={onGoogleSingIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end" >
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear Cuenta
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  );
};
