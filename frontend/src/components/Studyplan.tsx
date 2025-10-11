import "./Studyplan.css";

function Studyplan({info}: {info: string}) {
  return (
    <div className="studyplan">
      <div className="column">
        <div className="info">{info}</div>
      </div>
      <div className="column">
        <div className="credits_container">
          
        </div>
      </div>
    </div>
  );
}

export default Studyplan;