import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from "react-toastify";

export function ToastNotifyConfig() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
}