import { useForm } from "react-hook-form";

const Ejercicio15 = () => {
  const {register, handleSubmit, formState: { errors }, reset} = useForm();

  const onSubmit = (usuario) => {
    console.log(usuario);
    reset();
    alert('Felicidades! Podés llenar formularios!');
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
          <fieldset className="col-12 col-md-6 mb-2">
            <label htmlFor="name-input" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              id="name-input"
              className="form-control"
              {...register("name", {
                required: "Campo requerido.",
                minLength: {
                  value: 3,
                  message: "Este campo tiene un mínimo de 3 caracteres.",
                },
                maxLength: {
                  value: 20,
                  message: "Este campo tiene un máximo de 20 caracteres.",
                },
              })}
            />
            <p className="text-danger">{errors.name?.message}</p>
          </fieldset>
          <fieldset className="col-12 col-md-6 mb-2">
            <label htmlFor="lastName-input" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              id="lastName-input"
              className="form-control"
              {...register("lastName", {
                required: "Campo requerido.",
                minLength: {
                  value: 3,
                  message: "Este campo tiene un mínimo de 3 caracteres.",
                },
                maxLength: {
                  value: 15,
                  message: "Este campo tiene un máximo de 15 caracteres.",
                },
              })}
            />
            <p className="text-danger">{errors.lastName?.message}</p>
          </fieldset>
          <fieldset className="col-12 col-md-6 mb-2">
            <label htmlFor="dni-input" className="form-label">
              DNI
            </label>
            <input
              type="number"
              id="dni-input"
              className="form-control"
              {...register("dni", {
                required: "Campo requerido.",
                minLength: {
                  value: 7,
                  message: "Este campo tiene un mínimo de 7 caracteres.",
                },
                maxLength: {
                  value: 8,
                  message: "Este campo tiene un máximo de 15 caracteres.",
                },
              })}
            />
            <p className="text-danger">{errors.dni?.message}</p>
          </fieldset>
          <fieldset className="col-12 col-md-6 mb-2">
            <label htmlFor="email-input" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email-input"
              className="form-control"
              {...register("email", {
                required: "Campo requerido.",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Debe ingresar un mail válido."
                }
              })}
            />
            <p className="text-danger">{errors.email?.message}</p>
          </fieldset>
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

export default Ejercicio15;
