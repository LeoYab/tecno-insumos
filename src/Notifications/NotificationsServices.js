import Swal from "sweetalert2";
import { createContext } from "react"

export const NotificationContext = createContext()

export const NotificationsServices = ({children}) => {

    const ntfyObjProps = {
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      }

    const ntfyAddItem = (name) =>{

        const Toast = Swal.mixin(ntfyObjProps)
          
          Toast.fire({
            icon: 'success',
            title: `Se agregó ${name.bold()} al carrito`
          })
    
    }

    const ntfyRemoveItem = (name) =>{

        const Toast = Swal.mixin(ntfyObjProps)
          
          Toast.fire({
            icon: 'error',
            title: `Se eliminó ${name.bold()} del carrito`
          })
    
    }


return (
    <NotificationContext.Provider value={{ ntfyAddItem, ntfyRemoveItem }}>
    {children}
</NotificationContext.Provider>


)

}


