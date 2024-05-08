import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import IssueWidget from "../../components/IssueDetails/IssueDetails";
import useFetch from "../../hooks/useFetch/useFetch";
import AuthContext from "../../store/authContext";
import IssueReport from "../../components/IssueReport/IssueReport";

const Issue = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext)
  const { get, state } = useFetch("issues", user?.uid || '');
  const [issueData, setIssueData] = useState({});

  useEffect(() => {
    get(id);
  }, []);

  useEffect(() => {
    setIssueData(state?.singleData);
  }, [state]);

  return (
    <LayoutWrapper>
      <IssueWidget data={issueData} />
      <IssueReport data={issueData}/>
    </LayoutWrapper>
  );
};

export default Issue;
