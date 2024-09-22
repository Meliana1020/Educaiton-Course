import AuthLayout from "./AuthLayout";
import FormLogin from "../Fragments/FormLogin";

const LoginLayout = () => {
    return (
        <>
         <AuthLayout title="Masuk ke Akun" subtitle="Yuk, lanjutkan belajarmu di videbelajar"
        type="login">
        <FormLogin/>
        </AuthLayout>
        </>

    )
}

export default LoginLayout;