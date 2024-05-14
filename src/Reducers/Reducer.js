export const addJobseekar = (state = { jobseekar: [] }, action) => {
    switch (action.type) {
      case "JOBSEEKAR_ADD_SUCCES":
        return {
          ...state,
          jobseekar: action.payload
        };
      case "JOBSEEKAR_ADD_FAIL":
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };

  export const loginReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case "LOGIN_JOBSEEKAR_REQUEST":
        return {
          loading: true
        };
      case "LOGIN_JOBSEEKAR_SUCCESS":
        return {
          loading: false,
          user: action.payload
        };
      case "LOGIN_JOBSEEKAR_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };

  export const singleJobseekarReducer = (state = { singleJobseekar: {} }, action) => {
    switch (action.type) {
      case "SINGLE_JOBSEEKAR_REQUEST":
        return {
          loading: true,
        };
      case "SINGLE_JOBSEEKAR_SUCCES":
        return {
          ...state,
          loading: false,
          singleJobseekar: action.payload,
        };
      case "SINGLE_JOBSEEKAR_FAIL":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };


  export const UpdateProfileReducer = (state = {profile: {}}, action) => {
    switch (action.type) {
      case "UPDATE_PROFILE_SUCCES":
        return {
          ...state,
          profile: action.payload
        };
      case "UPDATE_PROFILE_FAILURE":
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };

//   export const contactInfoReducer = (state = { contactinfo: {} }, action) => {
//     switch (action.type) {
//       case "ADD_CONTACTINFO_SUCCES":
//         return {
//           ...state,
//           contactinfo: action.payload
//         }; 
//       case "ADD_CONTACTINFO_FAILURE":
//         return {
//           ...state,
//           error: action.payload
//         };
//       default:
//         return state;
//     }
//   };

//   export const experienceInfoReducer = (state = { experienceinfo: {} }, action) => {
//     switch (action.type) {
//       case "ADD_EXPERIENCEINFO_SUCCES":
//         return {
//           ...state,
//           experienceinfo: action.payload
//         };
//       case "ADD_EXPERIENCEINFO_FAILURE":
//         return {
//           ...state,
//           error: action.payload
//         };
//       default:
//         return state;
//     }
//   };