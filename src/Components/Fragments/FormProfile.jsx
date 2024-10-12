import { useState, useEffect } from "react";
import Button from "../Elements/Button/Index";
import InputForm from "../Elements/Input/Index";

const FormProfil = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    nohp: "",
    password: "",
  });

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUserData({
        name: currentUser.namaLengkap,
        email: currentUser.email,
        nohp: currentUser.noHp,
        password: currentUser.password
      });
    }
  }, []);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const updateUsers = users.map((user) => {
      if(user.email === userData.email) {
        return {
          ...user,
          namaLengkap: userData.name,
          noHp: userData.nohp,
          password: userData.password,
        };
      }
      return user;
    });

    localStorage.setItem('users', JSON.stringify(updateUsers));

    localStorage.setItem('currentUser', JSON.stringify({
      namaLengkap : userData.name,
      email: userData.email,
      noHp: userData.nohp,
      password: userData.password,
    }));

    alert("Data berhasil disimpan!");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-center items-center mt-5 px-4 sm:px-6 lg:px-8">          
        <div className="flex flex-row w-full max-w-4xl  shadow-2xl bg-white rounded-2xl p-6">
          <div className="w-1/4">
          <h1 className="text-3xl font-bold mb-3">Profil</h1>
          <img src="/public/avatar.png" alt="" className="w-auto h-32 mb-5 mt-5"/>
          </div>         
            <div className="w-3/4 ml-8">
            <InputForm 
            label="Nama Lengkap" 
            type="text" 
            name="name" 
            value={userData.name}
            onChange={handleChange}
            />
            <InputForm 
            label="E-mail" 
            type="email" 
            name="email"
            value={userData.email}
            readOnly
            />
            <InputForm 
            label="NO HP" 
            type="number" 
            name="nohp"
            value={userData.nohp}
            onChange={handleChange} 
            />
            <InputForm 
            label="Password" 
            type="password" 
            name="password"
            value={userData.password}
            onChange={handleChange} 
            />

            <Button
              variant="bg-orange-500"
              size="w-full"
              type="submit"
              className="w-full h-full"
              textColor="text-white"
              fontType="font-bold"
            >
              Save Changes
            </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default FormProfil;
