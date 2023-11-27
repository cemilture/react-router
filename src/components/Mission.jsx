import { useNavigate } from "react-router-dom";

function Mission() {
  const navigate = useNavigate();
  return (
    <>
      <div>Mission</div>
      <button onClick={() => navigate(-1)}>Geriye dön</button>
    </>
  );
}

export default Mission;
