import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastify = ({ text, icon }: any) => {
  console.log({ text, icon });
  toast.success(`${text}`, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 4000,
  });
};
