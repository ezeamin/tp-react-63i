import ColorPicker from './ColorPicker';

const ColorItem = (props) => {
  const { color, setColors } = props;

  const handleDelete = () => {
    setColors((prevColors) =>
      prevColors.filter((prevColor) => prevColor.id !== color.id)
    );
  };

  return (
    <article className='col-12 col-md-4 col-lg-3 mb-2'>
      <div className='card py-3'>
        <h2 className='pb-3 text-center'>{color.value}</h2>
        <div className='bg-dark py-3 container d-flex justify-content-center align-items-center gap-3'>
          <ColorPicker color={color.value} disabled />
        </div>
        <div className='d-flex justify-content-end container'>
          <button
            type='button'
            onClick={handleDelete}
            className='btn btn-danger mt-4'
          >
            Borrar
          </button>
        </div>
      </div>
    </article>
  );
};
export default ColorItem;
