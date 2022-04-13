function Organ(prop) {
  return (
    <div className={prop.name}>
      <img src={prop.image} onClick={prop.click} data-organ={prop.name} />
    </div>
  );
}

export default Organ;
