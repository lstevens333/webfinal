
const input = document.getElementById("enter-input");

if (input) {
  input.addEventListener("keyup", function () {
    if (input.value.toLowerCase().trim() === "enter") {
      window.location.href = "desk.html";
    }
  });
}

const sketchbook = document.getElementById("sketchbook");
const sketchbookOverlay = document.getElementById("sketchbook-overlay");
const closeSketchbook = document.getElementById("close-sketchbook");

if(sketchbook) {

sketchbook.addEventListener("click", function () {
    sketchbookOverlay.classList.remove("hidden");
});

}

if (closeSketchbook) {
  closeSketchbook.addEventListener("click", function () {
    sketchbookOverlay.classList.add("hidden");
  });
}



const receipt = document.getElementById("receipt");
const receiptOverlay = document.getElementById("receipt-overlay");
const closeReceipt = document.getElementById("close-receipt");

if(receipt) {

receipt.addEventListener("click", function () {
    receiptOverlay.classList.remove("hidden");
});

}

if (closeReceipt) {
  closeReceipt.addEventListener("click", function () {
    receiptOverlay.classList.add("hidden");
  });
}

const grocery = document.getElementById("grocery");
const groceryOverlay = document.getElementById("grocery-overlay");
const closeGrocery = document.getElementById("close-grocery");

if(grocery) {

grocery.addEventListener("click", function () {
    groceryOverlay.classList.remove("hidden");
});

}

if (closeGrocery) {
  closeGrocery.addEventListener("click", function () {
    groceryOverlay.classList.add("hidden");
  });
}





const usb = document.getElementById("usb");
const usbOverlay = document.getElementById("usb-overlay");
const closeUsb = document.getElementById("close-usb");
const usbPhoto = document.getElementById("usb-photo");
const prevPhoto = document.getElementById("prev-photo");
const nextPhoto = document.getElementById("next-photo");

const usbPhotos = [
  "images/photo1.JPG",
  "images/photo2.JPG",
  "images/photo3.JPG",
  "images/photo4.JPG",
  "images/photo5.JPG"
];

let currentPhoto = 0;

if (usb) {
  usb.addEventListener("click", function () {
    usbOverlay.classList.remove("hidden");
  });
}

if (closeUsb) {
  closeUsb.addEventListener("click", function () {
    usbOverlay.classList.add("hidden");
  });
}

if (nextPhoto) {
  nextPhoto.addEventListener("click", function () {
    currentPhoto++;

    if (currentPhoto >= usbPhotos.length) {
      currentPhoto = 0;
    }

    usbPhoto.src = usbPhotos[currentPhoto];
  });
}

if (prevPhoto) {
  prevPhoto.addEventListener("click", function () {
    currentPhoto--;

    if (currentPhoto < 0) {
      currentPhoto = usbPhotos.length - 1;
    }

    usbPhoto.src = usbPhotos[currentPhoto];
  });
}


const phone = document.getElementById("phone");
const phoneOverlay = document.getElementById("phone-overlay");
const closePhone = document.getElementById("close-phone");

const play = document.getElementById("play");
const pause = document.getElementById("pause");
const phoneAudio = document.getElementById("phone-audio");

if (phone) {
  phone.addEventListener("click", function () {
    phoneOverlay.classList.remove("hidden");
  });
}

if (closePhone) {
  closePhone.addEventListener("click", function () {
    phoneOverlay.classList.add("hidden");

    phoneAudio.pause();

    pause.classList.add("hidden");
    play.classList.remove("hidden");
  });
}

if (play && pause && phoneAudio) {

  play.addEventListener("click", function () {

    phoneAudio.play();

    play.classList.add("hidden");
    pause.classList.remove("hidden");

  });

  pause.addEventListener("click", function () {

    phoneAudio.pause();

    pause.classList.add("hidden");
    play.classList.remove("hidden");

  });

}