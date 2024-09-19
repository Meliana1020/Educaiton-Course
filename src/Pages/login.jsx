import CompNavbar from "../Components/Fragments/CompNavbar";
import FormLogin from "../Components/Fragments/FormLogin";
import AuthLayout from "../Components/Layouts/AuthLayout";
const LoginPage = () => {
    return (
        <>
        <div className="Navigation w-full px-4 py-5 ml-5 bg-white border-b border-[#3a3541]/10 flex justify-between items-center">
            <CompNavbar.Logo/>
        </div>
        <AuthLayout title="Masuk ke Akun" subtitle="Yuk, lanjutkan belajarmu di videbelajar"
        type="login">
             <FormLogin/>
        </AuthLayout></>


    )
}

export default LoginPage;