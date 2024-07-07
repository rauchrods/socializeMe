import { Bounce, toast } from "react-toastify";

const useToast = () => {
  const showToast = (title, status) =>
    toast(title, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      type: status,
    });

  return showToast;
};

export default useToast;
