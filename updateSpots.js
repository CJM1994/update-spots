/**
 * Update Spots for current day. (one possible solution)
 *
 * @param {Object}   state           State Object.
 * @param {Object}   appointments    New Appointments array
 * @param {Object}   id              Optional appointment id (may not need)
 * @return {Array}   A Days array we can save back into state.
 */

// const state = {
//   "day": "Monday",
//   "days": [
//     {
//       "id": 1,
//       "name": "Monday",
//       "appointments": [1, 2, 3],
//       "interviewers": [1, 2],
//       "spots": 2
//     },
//     {
//       "id": 2,
//       "name": "Tuesday",
//       "appointments": [4, 5],
//       "interviewers": [1, 2],
//       "spots": 3
//     }
//   ],

//   "appointments": {
//     "1": { "id": 1, "time": "12pm", "interview": null },
//     "2": { "id": 2, "time": "1pm", "interview": null },
//     "3": {
//       "id": 3,
//       "time": "2pm",
//       "interview": { "student": "Archie Cohen", "interviewer": 2 }
//     },
//     "4": { "id": 4, "time": "3pm", "interview": null },
//     "5": {
//       "id": 5,
//       "time": "4pm",
//       "interview": { "student": "Chad Takahashi", "interviewer": 2 }
//     }
//   }
// }

const updateSpots = function (state, appointments, id) {

  const currentDay = state.day;
  const startingAppointments = [];
  let returnDays = [];

  for (const day of state.days) {
    if (day.name === currentDay) {
      startingAppointments.push(...day.appointments);
    };
  };

  let spots = startingAppointments.length;
  for (const appointment of Object.values(appointments)) {
    if (startingAppointments.includes(appointment.id) && appointment.interview !== null) {
      spots--;
    };
  };

  returnDays.push(...state.days);
  returnDays[0] = { ...returnDays[0], appointments: [...returnDays[0].appointments], interviewers: [...returnDays[0].interviewers], spots }

  console.log(returnDays);

  // return an updated days array 
  return returnDays;
};

// updateSpots(state)

module.exports = updateSpots;

