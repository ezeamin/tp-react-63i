import { useForm } from "react-hook-form";
import InputFieldv2 from "../components/Ejercicio8v2/InputFieldv2";

const Ejercicio8v2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (usuario) => {
    console.log(usuario);
    reset();
    alert("Felicidades! Podés llenar formularios!");
  };

  return (
    <>
      <form
        className="bg-light text-dark p-3 rounded w-100"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h1 className="text-center">Formulario</h1>
        <section className="row">
          <InputFieldv2 type={"text"} register={register} name={"nombre"} errors={errors}
            others={{
              minLength: {
                value: 3,
                message: "Este campo tiene un mínimo de 3 caracteres.",
              },
              maxLength: {
                value: 20,
                message: "Este campo tiene un máximo de 20 caracteres.",
              },
            }}
          ></InputFieldv2>
          <InputFieldv2
            type={"text"} register={register} name={"apellido"} errors={errors}
            others={{
              minLength: {
                value: 3,
                message: "Este campo tiene un mínimo de 3 caracteres.",
              },
              maxLength: {
                value: 20,
                message: "Este campo tiene un máximo de 20 caracteres.",
              },
            }}
          ></InputFieldv2>
          <InputFieldv2 type={"number"} register={register} name={"DNI"} errors={errors}
            others={{
              min: {
                value: 1000000,
                message: "Su DNI tiene que tener 7 cifras o más",
              },
              max: {
                value: 99999999,
                message: "Su DNI no puede excederse de las 8 cifras.",
              },
            }}
          ></InputFieldv2>
          <InputFieldv2 type={"email"} register={register} name={"email"} errors={errors}
            others={{
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Debe ingresar un mail válido.",
              },
            }}
          ></InputFieldv2>
        </section>
        <div className="text-end">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};

export default Ejercicio8v2;
