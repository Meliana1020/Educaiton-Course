import AuthLayout from "./AuthLayout";
import FormRegister from "../Fragments/FormRegister";

const RegisterLayout = () => {
    return (
        <>
         <AuthLayout title="Masuk ke Akun" subtitle="Yuk, lanjutkan belajarmu di videbelajar"
        type="login">
        <FormRegister/>
        </AuthLayout>
        </>
    )
}

export default RegisterLayout;