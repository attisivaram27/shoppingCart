import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { updateProfile } from "../../Redux/loginslice";
import { registrationService } from '../../services/registrationAPI';



const Profile = () => {
    const dispatch = useDispatch();
    const [isEditMode, setIsEditMode] = useState(false);
    const data = useSelector(state => state.login.userDetails);
    const { firstName, lastName, email, gender, phone, password } = data;

    const updateTextField = (e) => {
        const { name, value } = e.target;
        dispatch(updateProfile({ [name]: value }));
    }


    return (
        <Box
            sx={{
                width: 500,
                border: '1px solid #ccc',
                borderRadius: "8px",
                padding: "20px",
                marginLeft: "30%",
                marginTop: "10%"

            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="h6" gutterBottom > Profile </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="outlined" onClick={() => setIsEditMode(true)}>Edit Profile </Button>
                </Grid>
                <Grid item xs={6}>

                    <TextField name="firstName" disabled={!isEditMode} fullWidth value={firstName} label="First Name" variant="outlined" size="small" onChange={updateTextField} />

                </Grid>
                <Grid item xs={6}>

                    <TextField name="LastName" disabled={!isEditMode} fullWidth value={lastName} label="Last Name" variant="outlined" size="small" onChange={updateTextField} />

                </Grid>
                <Grid item xs={6}>

                    <TextField disabled fullWidth value={email} label="Email" variant="outlined" size="small" />

                </Grid>
                <Grid item xs={6}>

                    <TextField name="phone" disabled={!isEditMode} fullWidth value={phone} type="number" label="Phone" variant="outlined" size="small" onChange={updateTextField} />

                </Grid>
                <Grid item xs={6}>

                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            name="gender"
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            value={gender}
                            disabled={!isEditMode}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" onChange={updateTextField} />
                            <FormControlLabel value="male" control={<Radio />} label="Male" onChange={updateTextField} />

                        </RadioGroup>
                    </FormControl>

                </Grid>
                <Grid item xs={6}>

                    <TextField name="password" disabled={!isEditMode} fullWidth value={password} type="password" label="Password" variant="outlined" size="small" onChange={updateTextField} />

                </Grid>
                {isEditMode &&
                    <Grid item xs={6}>
                        <Button fullWidth variant="contained" onClick={() => setIsEditMode(false)}>Update</Button>
                    </Grid>
                }


            </Grid>
        </Box>
    )
};
export default Profile;