import React, { useState, useEffect } from "react";
import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../Store/useAuthStore";

const FormRegister = (props) => {
  const { type } = props;
  const navigate = useNavigate();
  const { register } = useAuthStore(); 
  const [namaLengkap, setNamaLengkap] = useState('');
  const [email, setEmail] = useState('');
  const [noHp, setNoHp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setNamaLengkap(parsedData.namaLengkap || '');
      setEmail(parsedData.email || '');
      setNoHp(parsedData.noHp || '');
      setPassword(parsedData.password || '');
      setConfirmPassword(parsedData.confirmPassword || '');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!namaLengkap || !email || !noHp || !password || !confirmPassword) {
      alert("Mohon isi semua field.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password dan Konfirmasi Password harus sama.");
      return;
    }

    const newUser = {
      namaLengkap,
      email,
      noHp,
      password,
    };

    register(newUser);

    setNamaLengkap("");
    setEmail("");
    setNoHp("");
    setPassword("");
    setConfirmPassword("");

    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <form>
      <div className="mb-4">
        <InputForm
          label="Nama Lengkap"
          type="text"
          name="namalengkap"
          value={namaLengkap}
          onChange={(e) => setNamaLengkap(e.target.value)}
          placeholder="Masukkan nama lengkap"
          required
        />
      </div>

      <div className="mb-4">
        <InputForm
          label="E-mail"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@mail.com"
          required
        />
      </div>

      <div className="mb-4">
        <InputForm
          label="No Hp"
          type="tel"
          name="nohp"
          value={noHp}
          onChange={(e) => setNoHp(e.target.value)}
          placeholder="Masukkan nomor HP"
          required
        />
      </div>

      <div className="mb-4">
        <InputForm
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Masukkan password"
          required
        />
      </div>

      <div className="mb-4">
        <InputForm
          label="Konfirmasi Password"
          type="password"
          name="confirmpassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Konfirmasi password"
          required
        />
      </div>

      <Button
        variant="bg-green-500"
        textColor="text-white"
        size="w-full"
        type="submit"
        onClick={handleSubmit}
      >
        Daftar
      </Button>

      <div className="mt-4">
        {type === "login" ? (
          <Button
            variant="bg-green-100"
            textColor="text-green-800 !important"
            type="button"
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
            onClick={handleLogin}
          >
            Masuk
          </Button>
        )}
      </div>

      <div className="text-center mt-3">atau</div>

      <Button
        variant="bg-white"
        size="w-full"
        type="button"
        className="w-full h-full"
      >
        <div className="flex justify-center items-center w-full h-full">
          <img src="/public/google.png" alt="google" />
        </div>
      </Button>
    </form>
  );
};

export default FormRegister;
