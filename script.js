let modal = document.getElementById('myModal');
let modalImg = document.getElementById('modalImg');
let captionText = document.getElementById('caption');
let currentImgIndex = 0;
let images = [
  'dt.jpg', 'pt.jpg', 'at.jpg', 'clt.jpg', 'an.jpg', 'sf.jpg', 'ds.jpg', 'pp.jpg', 'pr.jpg', 'ct.jpg', 'lt.jpg', 't.jpg'
]; 

// Variables for swipe gesture detection
let touchStartX = 0;
let touchEndX = 0;

function openModal(index) {
  currentImgIndex = index;
  modalImg.src = getModalImage(index); 
  modal.style.display = 'block';
  updateModalContent();
}

function getModalImage(index) {
  switch (index) {
    case 0:
      return 'daf.jpg'; 
    case 1:
      return 'pn.jpg'; 
    case 2:
      return 'aster.jpg';
    case 3:
      return 'clily.jpg'; 
    case 4:
      return 'an.jpg'; 
    case 5:
      return 'sf.jpg'; 
    case 6:
      return 'ds.jpg'; 
    case 7:
      return 'pp.jpg'; 
    case 8:
      return 'pr.jpg'; 
    case 9:
      return 'ct.jpg'; 
    case 10:
      return 'lt.jpg'; 
    case 11:
      return 't.jpg'; 
    default:
      return ''; 
  }
}

function closeModal() {
  modal.style.display = 'none';
}

function changeImage(step) {
  currentImgIndex += step;
  if (currentImgIndex < 0) {
    currentImgIndex = images.length - 1;
  } else if (currentImgIndex >= images.length) {
    currentImgIndex = 0;
  }
  updateModalContent();
}

function updateModalContent() {
  modalImg.src = getModalImage(currentImgIndex); // Use getModalImage to get the correct modal image URL
  captionText.innerHTML = getCaption(images[currentImgIndex]); // Update caption based on the current image index
}

// Function to retrieve caption based on image name (replace with your logic)
function getCaption(imageName) {
  // Implement logic to retrieve caption based on imageName (e.g., from a data structure)
  // For example, you can use a switch statement or an object to map image names to captions
  switch (imageName) {
    case 'dt.jpg':
      return 'Daffodils';
    case 'pt.jpg':
      return 'Peony';
    case 'at.jpg':
      return 'Aster';
    case 'clt.jpg':
      return 'Calla Lily';
    case 'an.jpg':
      return 'Anemone';
    case 'sf.jpg':
      return 'Sunflower';
    case 'ds.jpg':
      return 'Daisy';
    case 'pp.jpg':
      return 'Poppy';
    case 'pr.jpg':
      return 'Pink Rose';
    case 'ct.jpg':
      return 'Camellia';
    case 'lt.jpg':
      return 'Lavender';
    case 't.jpg':
      return 'Tulip';
    default:
      return 'No caption available';
  }
}

// Keyboard navigation for modal (Optional)
document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    closeModal(); // Close modal on Escape key press
  } else if (evt.keyCode == 37) {
    // Previous image on left arrow key press
    changeImage(-1);
  } else if (evt.keyCode == 39) {
    // Next image on right arrow key press
    changeImage(1);
  }
};

// Touch event listeners for swipe gestures
modal.addEventListener('touchstart', touchStart, false);
modal.addEventListener('touchmove', touchMove, false);
modal.addEventListener('touchend', touchEnd, false);

function touchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function touchMove(event) {
  touchEndX = event.touches[0].clientX;
}

function touchEnd() {
  const swipeThreshold = 50; // Adjust swipe sensitivity as needed
  const swipeDistance = touchEndX - touchStartX;

  if (swipeDistance > swipeThreshold) {
    changeImage(-1); // Swipe right, go to previous image
  } else if (swipeDistance < -swipeThreshold) {
    changeImage(1); // Swipe left, go to next image
  }
}