import * as Yup from "yup";

export const validationLogin = Yup.object().shape({
    pseudo: Yup.string().required('Required'),
    password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
    role: Yup.string().required('Required')
})