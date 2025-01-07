import { toast } from "react-toastify";

export const useToast = () => {
    const showToast = (message: string, type: 'success' | 'error') => {
      toast[type](message, {
        position: "bottom-center",
        autoClose: 2000,
      });
    };
  
    return {
      notifySuccess: (message: string) => showToast(message, 'success'),
      notifyError: (message: string) => showToast(message, 'error'),
    };
  };