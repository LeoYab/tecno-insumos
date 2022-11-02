import { useState } from "react"
import "../ItemForm/ItemForm.scss"
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

const ItemForm = ({ crtordr }) => {

    const [dataUser, setDataUser] = useState("")
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {data.email !== data.reenteremail ? setDataUser(<small className="alertValidation fw-semibold">Email no coincide</small>) : crtordr(data) }


    return (

        <div className="d-flex flex-column align-items-center mt-2">
            <h3 className="contentForm bg-info rounded text-white mb-0">INGRESA TUS DATOS</h3>

            <form className="contentForm justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                <div className="p-3 shadow rounded">
                    <p className="h4 mb-4">Información personal</p>

                    <div className="form-row mb-4">

                        <div className="col mb-2 text-start">
                            {errors.name && <small className="alertValidation fw-semibold">Ingrese su nombre</small>}
                            <input type="text" className="form-control" placeholder="Nombre" {...register("name", { required: true, maxLength: 80 })} />

                        </div>

                        <div className="col mb-2 text-start">
                            {errors.lastname && <small className="alertValidation fw-semibold">Ingrese su apellido</small>}
                            <input type="text" className="form-control" placeholder="Apellido" {...register("lastname", { required: true, maxLength: 80 })} />

                        </div>

                        <div className="col mb-2 text-start">
                            {errors.email && <small className="alertValidation fw-semibold">Ingrese su mail</small>}
                            <input type="text" className="form-control" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />

                        </div>

                        <div className="col mb-2 text-start">
                            {dataUser}
                            <input type="text" className="form-control" placeholder="Repetir Email" {...register("reenteremail", { required: true, pattern: /^\S+@\S+$/i })} />

                        </div>

                        <div className="col mb-2 text-start">
                            {errors.phone && <small className="alertValidation fw-semibold">Dato invalido</small>}
                            <input type="number" className="form-control" placeholder="Celular" {...register("phone", { required: true, minLength: 6, maxLength: 12 })} />

                        </div>
                        <p className="h4 mb-4">Información de envío</p>

                        <div className="col mb-2 text-start">
                            {errors.address && <small className="alertValidation fw-semibold">Dato invalido</small>}
                            <input type="text" className="form-control" placeholder="Dirección" {...register("address", { required: true, maxLength: 12 })} />
                        </div>

                        <div className="col mb-2 text-start">
                            {errors.zipcode && <small className="alertValidation fw-semibold">Dato invalido</small>}
                            <input type="number" className="form-control" placeholder="Código Postal" {...register("zipcode", { required: true, maxLength: 12 })} />
                        </div>
                        <button onClick={() => navigate(-1)} className="btn btn-secondary my-4 btn-block text-white me-2">Volver</button>
                        <button type="submit" className="btn btn-info my-4 btn-block text-white ms-2">Comprar</button>
                        {/* <input type="submit" name="Comprar" className="btn btn-outline-info my-4 btn-block text-white" /> */}

                    </div>

                </div>

            </form>

        </div>

    )

}

export default ItemForm