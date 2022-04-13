import Person from "./Person.png";
function TestSubject() {
  return (
    <div className="testTube">
      <div className="scanner">
        <div className="light"></div>
      </div>
      <div className="testSubject">
        <img src={Person} className="person" />
      </div>
    </div>
  );
}

export default TestSubject;
