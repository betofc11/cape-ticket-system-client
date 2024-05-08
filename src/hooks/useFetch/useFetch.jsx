import { useEffect, useReducer } from "react";
import firebase from "../../../firebase";
import { ref, set, getDatabase, onValue, query, orderByChild, equalTo, push } from "firebase/database";
import { reducer } from "../../reducers/issueReducer";
import { formatDate } from "../../utils/dateUtils";

const db = getDatabase(firebase);

const initialState = {
  data: [],
  singleData: {},
  error: '',
}

const useFetch = (reference, uid = '') => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const formatData = (ss) => ({ ...ss.val(), id: ss.key });

  const fetchData = () => {
    try {
      const qry = query(ref(db, `${reference}/`), orderByChild('owner/id'), equalTo(uid))
      onValue(qry, (ss) => {
        const newData = [];
        ss.forEach((item) => {
          newData.push(formatData(item));
        });
        dispatch({ type: 'FETCH_ALL_SUCCESS', payload: newData })
      });
    } catch (error) {
      console.error(error);
    }
  };

  const get = (id) => {
    try {
      onValue(ref(db, `${reference}/${id}`), (ss) => {
        dispatch({ type: 'FETCH_ONE_SUCCESS', payload: formatData(ss) })
      });
    } catch (error) {
      console.error(error);
    }
  };

  const add = async (user, issueData) => {
    try {
      const date = new Date()
      const owner = {
        id: user?.uid,
        name: user?.name
      }
  
      const data = {
        issueTitle: issueData.issueTitle,
        medicalEquipmentName: issueData.medicalEquipmentName,
        reportDate: formatDate(date),
        status: 'open',
        owner
      }
      const pushNewIssue = push(ref(db, `${reference}`))
      await set(pushNewIssue, data);
    } catch (error) {
      console.error(error);
    }
  };

  const edit = async (id, body) => {
    try {
      return set(ref(db, `${reference}/${id}`), body)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { state, get, edit, add };
};

export default useFetch;
