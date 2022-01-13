export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const SHOW_MESSAGE = 'SHOW_MESSAGE'
export const SHOW_MODAL = 'SHOW_MODAL'

export const showNotification = (type, title, description) => {
  return {
    type: SHOW_NOTIFICATION,
    payload: {
      massageType:type,
      message:title,
      description
    },
  }
}
// export const showMessage = data => {
//   return {
//     type: SHOW_MESSAGE,
//     payload: data,
//   }
// }
// export const showModal = data => {
//   return {
//     type: SHOW_MODAL,
//     payload: data,
//   }
// }

