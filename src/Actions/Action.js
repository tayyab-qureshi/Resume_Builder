import axios from "axios";

export const postjobseekar = (object) => async(dispatch) => {
    try {
        const {data} = await axios.post("http://localhost:8000/jobseekar",object)
        dispatch({ type: "JOBSEEKAR_ADD_SUCCES", payload: data });
    }
    catch (error) {
        dispatch({ type: "JOBSEEKAR_ADD_FAIL", payload: error.message})
    }
}

export const loginJobseekar = (email, password ) => async (dispatch) => {

    try {
        dispatch ({ type: "LOGIN_JOBSEEKAR_REQUEST"})
      const {data} = await axios.get("http://localhost:8000/jobseekar");

      const user = data.find((user) => user.email === email && user.password === password);

      if (user) {
          dispatch({ type: "LOGIN_JOBSEEKAR_SUCCESS", payload: user});
          localStorage.setItem('user', JSON.stringify(user));
          
      }  else {
        dispatch({ type: "LOGIN_JOBSEEKAR_FAILURE" ,payload: "Data not match"});

      }
    } catch (error) {
        dispatch({ type: "LOGIN_JOBSEEKAR_FAILURE" , payload: error.message});
    }
  };

  export const getSinglejobseekar = (id) => async(dispatch) => {
    try {
        dispatch ({ type: "SINGLE_JOBSEEKAR_REQUEST"});
        const {data} = await axios.get(`http://localhost:8000/jobseekar/${id}`);
        dispatch ({ type: "SINGLE_JOBSEEKAR_SUCCES", payload: data})
    } catch (error) {
        dispatch ({ type: "SINGLE_JOBSEEKAR_FAIL", payload: error.message})
    }
}

  export const addProfileInfo = (id, Object) => async (dispatch) => {
    try {
        const {data} = await axios.patch(`http://localhost:8000/jobseekar/${id}`, Object)
        console.log(data,"yo bro data");
        dispatch({ type: "UPDATE_PROFILE_SUCCES", payload: data})
    } catch(error){
        dispatch({ type: "UPDATE_PROFILE_FAILURE", payload: error.message})
    }
}

// export const addContactInfo = (id, Object) => async (dispatch) => {
//     try {
//         const {data} = await axios.put(`http://localhost:8000/jobseekar/${id}`, Object)
//         dispatch({ type: "ADD_CONTACTINFO_SUCCES", payload: data})
//     } catch(error){
//         dispatch({ type: "ADD_CONTACTINFO_FAILURE", payload: error.message})
//     }
// }

// export const addExperienceInfo = (id, Object) => async (dispatch) => {
//     try {
//         const {data} = await axios.put(`http://localhost:8000/jobseekar/${id}`, Object)
//         dispatch({ type: "ADD_EXPERIENCEINFO_SUCCES", payload: data})
//     } catch(error){
//         dispatch({ type: "ADD_EXPERIENCEINFO_FAILURE", payload: error.message})
//     }
// }