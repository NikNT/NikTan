import { toast } from "react-toastify";
export const successNotification = () => {
  toast.success("Your message has been sent!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};
