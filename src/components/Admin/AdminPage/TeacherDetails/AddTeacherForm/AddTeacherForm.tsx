import { Box, FormLabel, InputLabel, MenuItem, Stack, TextField, Button } from "@mui/material";
import * as yup from "yup"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useFormik } from "formik";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useContext } from "react";
import AdminContext from "../../../../../context/AdminContext";



const SemList = ['1', '2', '3', '4', '5', '6', '7', '8']
const DivList = ['A', 'B']

const validationSchema = yup.object({
    id: yup.string().min(6, 'Id is too short - should be 6 chars minimum').required('Id is required'),
    firstname: yup.string().required('First Name is Required'),
    lastname: yup.string().required('Last Name is Required'),
    department: yup.string().required('Department is not selected'),
});




const AddTeacherForm = () => {

    const { branchList } = useContext(AdminContext)

    const formik = useFormik({
        initialValues: {
            id: "",
            firstname: "",
            middlename: "",
            dob: null,
            lastname: "",
            designation: "",
            department: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, formikHelpers) => {
            console.log(values);
        },
        validateOnChange: true,

    });

    return (
        <Box sx={{ width: 1000, height: 1000 }}>
            <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                <Stack gap='15px'>
                    <TextField
                        required
                        id="id"
                        name="id"
                        label="Teacher Id"
                        value={formik.values.id}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.id && Boolean(formik.errors.id)}
                        helperText={formik.touched.id && formik.errors.id}
                    />


                    <Stack direction={'row'} gap='10px'>
                        <TextField
                            sx={{ width: '13%' }}
                            required
                            id='designation'
                            name='designation'
                            label='Designation'
                            value={formik.values.designation}
                            onChange={formik.handleChange}
                            error={formik.touched.designation && Boolean(formik.errors.designation)}
                            helperText={formik.touched.designation && formik.errors.designation}
                        />
                        <TextField
                            required
                            sx={{ width: '29%' }}
                            id="firstname"
                            name="firstname"
                            label="First Name"
                            value={formik.values.firstname}
                            onChange={formik.handleChange}
                            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                            helperText={formik.touched.firstname && formik.errors.firstname}
                        />
                        <TextField
                            sx={{ width: '29%' }}
                            id="=middlename"
                            name="middlename"
                            label="Middle Name"
                            value={formik.values.middlename}
                            onChange={formik.handleChange}
                            error={formik.touched.middlename && Boolean(formik.errors.middlename)}
                            helperText={formik.touched.middlename && formik.errors.middlename}
                        ></TextField>

                        <TextField
                            sx={{ width: '29%' }}
                            required
                            id="lastname"
                            name="lastname"
                            label="Last Name"
                            value={formik.values.lastname}
                            onChange={formik.handleChange}
                            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                            helperText={formik.touched.firstname && formik.errors.firstname}
                        /></Stack>

                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en'>
                        <DatePicker
                            sx={{
                                width: '20%'
                            }}
                            format="DD-MMM-YYYY"
                            value={formik.values.dob}
                            onChange={(value) => formik.setFieldValue('dob', value)}
                            label='Date of Birth'
                        />
                    </LocalizationProvider>
                    <TextField
                        sx={{ width: '25%' }}
                        select
                        required
                        id='department'
                        name='department'
                        label='Department'
                        value={formik.values.department}
                        onChange={formik.handleChange}
                        error={formik.touched.department && Boolean(formik.errors.department)}
                        helperText={formik.touched.department && formik.errors.department}
                    >
                        {branchList.map((dept, i) => {
                            return (<MenuItem value={dept} key={dept}>{dept}</MenuItem>)
                        })}
                    </TextField>
                    <Stack direction={'row'} gap='40px' justifyContent={'center'} >
                        <Button type='reset' variant="outlined">Reset</Button>
                        <Button type='submit' variant="contained" >Submit</Button>
                    </Stack>
                </Stack>
            </form>
        </Box>
    )
}

export default AddTeacherForm;