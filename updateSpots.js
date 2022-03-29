/**
 * Update Spots for current day. (one possible solution)
 *
 * @param {Object}   state           State Object.
 * @param {Object}   appointments    New Appointments array
 * @param {Object}   id              Optional appointment id (may not need)
 * @return {Array}   A Days array we can save back into state.
 */

const updateSpots = function (state, appointments, id) {

  const currentDay = state.day;
  const startingAppointments = [];
  let returnDays = [];
  let index = 0;

  for (let i = 0; i < state.days.length; i++) {
    if (state.days[i].name === currentDay) {
      startingAppointments.push(...state.days[i].appointments);
      index = i;
    };
  };

  let spots = startingAppointments.length;
  for (const appointment of Object.values(appointments)) {
    if (startingAppointments.includes(appointment.id) && appointment.interview !== null) {
      spots--;
    };
  };

  returnDays.push(...state.days);
  returnDays[index] = { ...returnDays[index], appointments: [...returnDays[index].appointments], interviewers: [...returnDays[index].interviewers], spots }

  // return an updated days array 
  return returnDays;
};

// updateSpots(state)

module.exports = updateSpots;

