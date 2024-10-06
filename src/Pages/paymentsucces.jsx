import CompNavbar from "../Components/Fragments/CompNavbar";

const PaymentSuccesPage = () => {
  return (
    <>
    <CompNavbar>

    </CompNavbar>

    <div className="flex justify-center items-center min-w-screen">
      <div className="text-center">
        <img src="succes.png" alt="Pembayaran Berhasil" />
        <h1 className="text-2xl font-bold mt-4">Pembayaran Berhasil</h1>
      </div>
    </div>
    </>
    
    
  );
};

export default PaymentSuccesPage;
