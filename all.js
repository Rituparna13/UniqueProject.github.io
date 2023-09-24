const alarmSound = document.getElementById('alarmSound');

function setAlarm(time, activity) {
  const now = new Date();
  const selectedTime = new Date(now.toDateString() + ' ' + time);

  
  if (selectedTime > now) {
    const timeDifference = selectedTime - now;

    
    setTimeout(() => {
      
      alarmSound.play();
      alert('Time for ' + activity + '!');
    }, timeDifference);
  } else {
    alert('Please select a time in the future for ' + activity + '.');
  }
}

function addEventListenerForActivity(activity) {
  const timeInput = document.getElementById(activity + 'Time');

  document.querySelector('#' + activity + ' input[type="radio"]').addEventListener('change', function () {
    if (this.checked) {
      const time = timeInput.value;
      if (time) {
        setAlarm(time, activity);
      } else {
        alert('Please select a time for ' + activity + '.');
      }
    }
  });
}


const activities = ['walk', 'clean', 'study', 'water', 'bed'];
for (const activity of activities) {
  addEventListenerForActivity(activity);
}
