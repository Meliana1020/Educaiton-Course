import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
import { useNavigate } from "react-router-dom";

const FormRegister = (props) => {
  const { type } = props;
  const navigate = useNavigate();

  // Function for navigation
  const handleRegister = () => {
    navigate("/"); // Navigasi setelah klik daftar
  };

  const handleLogin = () => {
    navigate("/"); // Navigasi ke halaman login
  };

  return (
    <form action="/submit">
      <div className="mb-5">
        <InputForm
          label="Nama Lengkap"
          type="text"
          placeholder="masukkan nama anda disini"
          name="namalengkap"
        />
        <InputForm
          label="E-mail"
          type="email"
          placeholder="example@mail.com"
          name="email"
        />
        <InputForm label="No HP" type="text" placeholder="" name="nohp" />
        <InputForm
          label="Password"
          type="password"
          placeholder="********"
          name="password"
        />
        <InputForm
          label="Konfirmasi Password"
          type="password"
          placeholder="********"
          name="confirmpassword"
        />

        <div className="text-right mt-2">Lupa Password?</div>

        <Button variant="bg-green-500" textColor="text-white" size="w-full" onClick={handleRegister}>
          Daftar
        </Button>

        {type === "login" ? (
          <Button
            variant="bg-green-100"
            textColor="text-green-700"
            size="w-full"
            onClick={handleLogin}
          >
            Masuk
          </Button>
        ) : (
          <Button
            variant="bg-green-100"
            textColor="text-green-700"
            size="w-full"
            onClick={handleLogin}
          >
            Masuk
          </Button>
        )}

        <div className="text-center mt-3">atau</div>

        {/* Button Google Login */}
        <button className="bg-white w-full py-2 px-2 rounded-md flex justify-center items-center">
          <img src="/google.png" alt="google" type="submit" />
        </button>
      </div>
    </form>
  );
};

export default FormRegister;
