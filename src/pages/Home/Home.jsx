import React, { useContext, useState } from "react";
import Modal from "../../components/Modal/Modal";
import Add from "../Add/Add";
import useFetch from "../../hooks/useFetch/useFetch";
import AuthContext from "../../store/authContext";
import IssueList from "../../components/IssueList/IssueList";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { state: issuesData } = useFetch("issues", user.uid);

  const [modalState, setModalState] = useState(false);

  return (
    <>
      <section>
        <div className="flex justify-between  mb-6">
          <h3 className="font-extrabold text-4xl">My Tickets:</h3>
          <button onClick={() => setModalState(true)}>Add an Issue</button>
        </div>
        <IssueList data={issuesData?.data} />
      </section>
      <Modal isOpen={modalState} setIsOpen={setModalState}>
        <Add />
      </Modal>
    </>
  );
};

export default Home;
