import { useLocation } from 'react-router-dom';

const Label = (props) => {
  const { htmlFor, children } = props;
  const location = useLocation();

  const shouldShowSpan = location.pathname === '/login' || location.pathname === '/register';

  return (
    <label
      htmlFor={htmlFor}
      className="block text-slate-700 text-base font-bold mb-2 justify-start text-left"
    >
      {children}
      {shouldShowSpan && <span className="text-red-500">*</span>}
    </label>
  );
};

export default Label;
