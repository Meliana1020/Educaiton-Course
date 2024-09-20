import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
import { useNavigate } from "react-router-dom";

const FormLogin = (props) => {
  const { type } = props;
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <form action="">
      <div className="mb-5">
        <InputForm
          label="E-mail"
          type="email"
          placeholder="example@mail.com"
          name="email"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="********"
          name="password"
        />
        <div className="text-right mt-2">Lupa Password?</div>
        <Button
          variant="bg-green-500"
          textColor="text-white"
          size="w-full"
          onClick={handleLogin}
        >
          Masuk
        </Button>
        {type === "login" ? (
          <Button
            variant="bg-green-100"
            textColor="text-green-800 !important"
            size="w-full"
            onClick={handleLogin}
          >
            Masuk
          </Button>
        ) : (
          <Button
            variant="bg-green-100"
            textColor="text-green-800 !important"
            size="w-full"
            onClick={handleRegister}
          >
            Daftar
          </Button>
        )}
        <div className="text-center mt-3">atau</div>
        <Button variant="bg-white">
          <img src="/google.png" alt="google" />
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;
