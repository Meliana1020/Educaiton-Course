import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
import { Link } from "react-router-dom";
const FormRegister = (props) => { 
    const { type } = props;return (
        <form action="">
          <div className="mb-5">
             <InputForm 
              label="Nama Lengkap" 
              type="text"
              placeholder="masukkan nama anda disini"
              name="namalengkap"/>
              <InputForm 
              label="E-mail" 
              type="email"
              placeholder="example@mail.com"
              name="email"/>
              <InputForm 
              label="No HP" 
              type="text"
              placeholder=""
              name="nohp"/>
              <InputForm 
              label="Password" 
              type="password"
              placeholder="********"
              name="password"/>
               <InputForm 
              label="Konfirmasi Password" 
              type="password"
              placeholder="********"
              name="confirmpassword"/>
             <div className="text-right mt-2">Lupa Password?</div>
              <Button variant="bg-green-500" textColor="text-white" size="w-full">
              Daftar
              </Button>
              { type === 'login' ?  
                <Button 
                variant="bg-green-100" 
                textColor="text-green-700" 
                size="w-full">
                    <Link to="/register">Daftar</Link>
                </Button>
                :  
                <Button 
                variant="bg-green-100" 
                textColor="text-green-700" 
                size="w-full">
                    <Link to="/login">Masuk</Link>
                </Button>}
              <div className="text-center mt-3">atau</div>
                <Button variant="bg-white">
                 <img src="./src/assets/images/google.png" alt="google"/>
              </Button>
          </div>
          </form>
    )
};

export default FormRegister;