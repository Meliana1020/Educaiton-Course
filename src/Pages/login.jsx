import CompNavbar from "../Components/Fragments/CompNavbar";
import LoginLayout from "../Components/Layouts/LoginLayout";

const LoginPage = () => {
    return (
        <>
        <CompNavbar>
            <CompNavbar.Logo/>
        </CompNavbar>
        <LoginLayout/>
        </>
    )
}

export default LoginPage;