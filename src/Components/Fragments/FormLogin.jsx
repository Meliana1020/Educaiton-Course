import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuthStore from "../../Store/useAuthStore";

const FormLogin = (props) => {
  const { type } = props;
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const { login, users,  currentUser} = useAuthStore();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
  
    const emailInput = e.target.email.value;
    const passwordInput = e.target.password.value;
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const user = users.find((user) => user.email === emailInput);
    
    if (!user) {
      alert("Email belum terdaftar. Silahkan registrasi terlebih dahulu.");
    } else {
      if (user.password === passwordInput) {
        alert("Login berhasil!");
        localStorage.setItem('currentUser', JSON.stringify(user)); // Simpan data user yang login
        navigate("/");
      } else {
        alert("Password salah, coba lagi.");
      }
    }
  };
  
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-5">
        <InputForm
          label="E-mail"
          type="email"
          placeholder="example@mail.com"
          name="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="********"
          name="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <div className="text-right mt-2">Lupa Password?</div>
        <Button
          variant="bg-green-500"
          textColor="text-white"
          size="w-full"
          fontType="font-bold"
        >
          Masuk
        </Button>
        {type === "login" ? (
          <Button
            variant="bg-green-100"
            textColor="text-green-800 !important"
            size="w-full"
            fontType="font-bold"
          >
            Masuk
          </Button>
        ) : (
          <Button
            variant="bg-green-100"
            textColor="text-green-800 !important"
            size="w-full"
            fontType="font-bold"
            onClick={handleRegister}
          >
            Daftar
          </Button>
        )}
        <div className="text-center mt-3">atau</div>
        <Button
          variant="bg-white"
          size="w-full"
          type="submit"
          className="w-full h-full"
        >
          <div className="flex justify-center items-center w-full h-full">
            <img src="/google.png" alt="google" />
          </div>
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;
