import { GET_BEHAVIOR_VERSIONS, GET_BEHAVIOR_VERSION, DELETE_BEHAVIOR_VERSION } from "../actions/types";

const initialState = {
  behaviorVersions: [],
  behaviorVersion: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BEHAVIOR_VERSIONS:
      return {
        ...state,
        behaviorVersions: action.payload,
      };
      case GET_BEHAVIOR_VERSION:
      return {
        ...state,
        behaviorVersion: action.payload,
      };
    case DELETE_BEHAVIOR_VERSION:
      return {
        ...state,
        behaviorVersions: state.behaviorVersions.filter(
            behaviorVersion => behaviorVersion.id !== action.payload
            )
      };
    default:
      return state;
  }
}
