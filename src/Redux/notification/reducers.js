import { notification } from "antd";
import { SHOW_NOTIFICATION } from './actions';

const notificationState = {}

export default function notificationReducer(state = notificationState, action) {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      notification[action.payload.massageType]({
        message: action.payload.message,
        description: action.payload.description,
      });
      return state

    default:
      return state
  }
}
