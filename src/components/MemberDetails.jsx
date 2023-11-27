import { useParams } from "react-router-dom";

function MemberDetails() {
  // const params = useParams();     alttaki kodun uzun versiyonu
  // const memberDetails = params.memberDetails;
  const { memberDetails } = useParams();

  return <div>MemberDetails {memberDetails}</div>;
}

export default MemberDetails;
