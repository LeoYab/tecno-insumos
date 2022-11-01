import { useState } from "react"
import "../ItemForm/ItemForm.scss"

const ItemForm = ({crtordr}) => {
    
    const [dataUser, setDataUser] = useState({

        name: "",
        lastname: "",
        email: "",
        address: "",
        zipcode: "",


    })


    return (
      
            <div className="d-flex flex-column align-items-center mt-2">
                <h3 className="contentForm bg-info rounded text-white mb-0">INGRESA TUS DATOS</h3>
           
            <form className="contentForm justify-content-center">

                <div className="p-3 shadow rounded">
                    <p className="h4 mb-4">Información personal</p>

                    <div className="form-row mb-4">
                        <div className="col mb-2">

                            <input type="text" className="form-control" placeholder="Nombre" value={dataUser.name} onChange={(e) => setDataUser({ ...dataUser, name: e.target.value })} />
                        </div>

                        <div className="col mb-2">

                            <input type="text" className="form-control" placeholder="Apellido" value={dataUser.lastname} onChange={(e) => setDataUser({ ...dataUser, lastname: e.target.value })} />
                        </div>

                {/*         <div className="col mb-2">

                            <input type="email" className="form-control mb-4" placeholder="E-mail" value={dataUser.email} onChange={(e) => setDataUser({ ...dataUser, email: e.target.value })} />
                        </div> */}
                    </div>




                    <p className="h4 mb-4">Información de envío</p>

                    <div className="col mb-2">

                        <input type="text" className="form-control" placeholder="Dirección" value={dataUser.address} onChange={(e) => setDataUser({ ...dataUser, address: e.target.value })} />
                    </div>

                    <div className="col mb-2">

                        <input type="number" className="form-control" placeholder="Código postal" value={dataUser.zipcode} onChange={(e) => setDataUser({ ...dataUser, zipcode: e.target.value })} />
                    </div>
                   <button onClick={() => crtordr(dataUser)} className="btn btn-info my-4 btn-block text-white" type="button">Comprar</button>
                </div>
            </form>
            </div>
 

    )

}

export default ItemForm