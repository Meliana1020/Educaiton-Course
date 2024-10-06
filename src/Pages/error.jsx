import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

     return (
        <div className='flex flex-col justify-center min-h-screen items-center space-y-3'>
            <h1 className="font-medium text-5xl">Oops !!!</h1> 
            <p>Sorry, an unexpected error has occurred.</p> 
            <p>{error?.statusText || error?.message || "Unknown Error"}</p> 
        </div>
    )
}

export default ErrorPage;
