import Skin from "./skin_system.jpeg";
function TestSubject() {
  return (
    <div className="testTube">
      <div className="scanner">
        <div className="light"></div>
      </div>
      <div className="testSubject">
        <img src={Skin} className="person" />
      </div>
    </div>
  );
}

export default TestSubject;
