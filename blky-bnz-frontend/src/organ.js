function Organ(prop) {
  return (
    <div className={prop.name}>
      <img src={prop.image} onClick={prop.click} className={prop.name} />
    </div>
  );
}

export default Organ;
