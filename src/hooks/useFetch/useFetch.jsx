import { useEffect, useReducer } from "react";
import firebase from "../../../firebase";
import { ref, set, getDatabase, onValue, update } from "firebase/database";
import { reducer } from "../../reducers/issueReducer";

const db = getDatabase(firebase);

const initialState = {
  data: [],
  singleData: {},
  error: '',
}

const useFetch = (reference) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const formatData = (ss) => ({ ...ss.val(), id: ss.key });

  const fetchData = () => {
    try {
      onValue(ref(db, `${reference}/`), (ss) => {
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

  const addIssue = () => {
    try {
      set(ref(db, `issues/`), issues);
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

  return { state, get, addIssue, edit };
};

export default useFetch;
