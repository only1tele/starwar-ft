import { ToastOptions, toast } from "react-toastify"

export class StarwarToasts {
  static success(message: string, options?: ToastOptions) {
    if (toast.isActive("success-toast")) {
      toast.update("success-toast", { render: message })
      return "success-toast"
    }
    return toast.success(message, {
      ...options,
      theme: "colored",
      className: "starwar-toast",
      toastId: "success-toast",
    })
  }
  static error(message: string, options?: ToastOptions, isSupport?: boolean) {
    if (toast.isActive("error-toast")) {
      toast.update("error-toast", { render: message })
      return "error-toast"
    }
    return toast.error(message, {
      ...options,
      theme: "colored",
      className: "starwar-toast",
      toastId: "error-toast",
    })
  }
}
