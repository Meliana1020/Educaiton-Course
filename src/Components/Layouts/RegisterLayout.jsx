import AuthLayout from "./AuthLayout";
import FormRegister from "../Fragments/FormRegister";

const RegisterLayout = () => {
    return (
        <>
         <AuthLayout title="Pendaftaran Akun" subtitle="Yuk, daftarkan akunmu sekarang!"
        type="login">
        <FormRegister/>
        </AuthLayout>
        </>
    )
}

export default RegisterLayout;