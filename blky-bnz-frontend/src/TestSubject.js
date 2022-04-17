import Skin from "./Images/skin_system.jpeg";
function TestSubject() {
  return (
    <div className="bodyContainer">
      <div className="testTube">
        <div className="scanner">
          <div className="light"></div>
        </div>
        <div className="testSubject">
          <img src={Skin} className="person" />
        </div>
      </div>
    </div>
  );
}

export default TestSubject;
