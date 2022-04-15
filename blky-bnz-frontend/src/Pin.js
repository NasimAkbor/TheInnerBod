import Ping from "./Images/ping.png";

function Pin(prop) {
  return (
    <img
      className={prop.class}
      onClick={prop.click}
      src={Ping}
      data-key={prop.name}
    />
  );
}

export default Pin;
