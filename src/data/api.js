
const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const savedReservation = [];

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};


const submitAPI = (formData) => {
  if (formData && formData.date && formData.selectedTime) {
      // Save the reservation data dynamically
      savedReservation.push(formData);

      // // Update available times by removing the selected time
      // if (availableTimes[formData.date]) {
      //     availableTimes[formData.date] = availableTimes[formData.date].filter(
      //         (time) => time !== formData.time
      //     );
      // }

      return Promise.resolve(true); // Simulate successful submission
  } else {
      return Promise.reject(new Error('Form submission failed. Please provide valid data.'));
  }
};

export {fetchAPI, submitAPI};
