const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const loginBtn = document.getElementById('login-btn');

// Check if the browser supports getUserMedia
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    })
    .catch((error) => {
      console.error('Error accessing camera:', error);
    });
}

// Add an event listener to the login button
loginBtn.addEventListener('click', () => {
  takeSnapshot();
});

// Function to capture a snapshot from the video stream
function takeSnapshot() {
  const context = canvas.getContext('2d');
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const imageDataURL = canvas.toDataURL('image/jpeg');

  // Call a function to process the captured image for face recognition
  processImage(imageDataURL);
}

// Function to process the captured image for face recognition
function processImage(imageDataURL) {
  // Add your face recognition logic here
  // You can use a face recognition library or API of your choice
  // Compare the captured image with the registered user's face, etc.
  // For simplicity, let's just display an alert indicating successful login
  alert('Login successful!');
}
