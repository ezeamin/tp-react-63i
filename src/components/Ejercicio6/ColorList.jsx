import ColorItem from './ColorItem';

const ColorList = (props) => {
  const { colors, setColors } = props;

  return (
    <section className='row mt-3'>
      {colors.map((color) => (
        <ColorItem key={color.id} color={color} setColors={setColors} />
      ))}
    </section>
  );
};
export default ColorList;
