import FormRegister from "../Components/Fragments/FormRegister";
import AuthLayout from "../Components/Layouts/AuthLayout";
import CompNavbar from "../Components/Fragments/CompNavbar";
const RegisterPage = () => {
    return (
        <>
        <div className="Navigation w-full px-4 py-5 ml-5 bg-white border-b border-[#3a3541]/10 flex justify-between items-center">
            <CompNavbar.Logo/>
        </div>
            <AuthLayout title="Pendaftaran Akun" subtitle="Yuk, daftarkan akunmu sekarang juga!"
        type="register">
            <FormRegister />
        </AuthLayout></>
    )
}

export default RegisterPage;