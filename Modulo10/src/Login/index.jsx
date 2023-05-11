import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const Login = () => {
const [login, setLogin] = useState('');
const [senha, setSenha] = useState('');

    return (
        <Container maxWidth="sm">
            <Box sx={{ bgcolor: '#cfe8fc', height: '45vh'}}>
            <Grid container spacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <Input id="login_user" aria-describedby="login_user_helper_text" value={login} onChange={e => { setLogin(e.target.value); } } />
                        <FormHelperText id="login_user_helper_text">User</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <Input id="senha_user" type='password' aria-describedby="senha_user_helper_text" value={senha} onChange={e => { setSenha(e.target.value); } } />
                        <FormHelperText id="senha_user_helper_text">Senha</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button size="small" variant="contained">Login</Button>
                </Grid> 
            </Grid>
        </Box>
    </Container>
    );
}

export default Login;