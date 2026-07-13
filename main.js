import './style.css'

document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.getElementById("splash-screen");
  const homepage = document.getElementById("homepage");

  // Show splash for 2 seconds (2000 ms), then fade out and show homepage
  setTimeout(() => {
    splashScreen.classList.add("hidden");
    homepage.classList.remove("hidden");
  }, 2000);

  // Navigate to compact 1 screen when clicking the banner
  const playBanner = document.getElementById("play-banner");
  const compact1Screen = document.getElementById("compact-1-screen");
  
  if (playBanner) {
    playBanner.addEventListener("click", () => {
      homepage.classList.add("hidden");
      compact1Screen.classList.remove("hidden");
    });
  }

  // Navigate to compact 2 when clicking Get Started
  const getStartedBtn = document.getElementById("get-started-btn");
  const compact2Screen = document.getElementById("compact-2-screen");

  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
      compact1Screen.classList.add("hidden");
      compact2Screen.classList.remove("hidden");
    });
  }

  // Handle Image Upload Preview
  const petImageUpload = document.getElementById("pet-image-upload");
  const petImagePreview = document.getElementById("pet-image-preview");

  if (petImageUpload) {
    petImageUpload.addEventListener("change", function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          petImagePreview.src = e.target.result;
          petImagePreview.classList.remove("hidden");
        }
        reader.readAsDataURL(file);
      }
    });
  }

  // Navigate to compact 3 when clicking Next
  const nextBtn2 = document.getElementById("next-btn-2");
  const compact3Screen = document.getElementById("compact-3-screen");

  if (nextBtn2) {
    nextBtn2.addEventListener("click", () => {
      compact2Screen.classList.add("hidden");
      compact3Screen.classList.remove("hidden");
    });
  }

  const nextBtn5 = document.getElementById("next-btn-5");
  const animScreen = document.getElementById("anim-screen");

  if (nextBtn5) {
    nextBtn5.addEventListener("click", () => {
      compact5Screen.classList.add("hidden");
      animScreen.classList.remove("hidden");
      
      const lottiePlayer = document.getElementById("paws-lottie");
      if (lottiePlayer && typeof lottiePlayer.play === 'function') {
        lottiePlayer.play();
      }

      setTimeout(() => {
        const resultScreen = document.getElementById("result-screen");
        if (resultScreen) {
          animScreen.classList.add("hidden");
          resultScreen.classList.remove("hidden");
        }
      }, 3500);
    });
  }

  // Handle slider logic for dog image
  const bindDogSlider = (sliderId, imageId) => {
    const slider = document.getElementById(sliderId);
    const img = document.getElementById(imageId);
    if (slider && img) {
      slider.addEventListener("input", (e) => {
        const val = parseInt(e.target.value);
        if (val === 0) img.src = "/dog_left_1783931607250.png";
        else if (val === 1) img.src = "/dog_center_1783931617145.png";
        else img.src = "/dog_right_1783931626512.png";
      });
    }
  };

  bindDogSlider("dog-slider", "dynamic-dog-image");
  bindDogSlider("personality-slider", "dynamic-dog-image-4");
  bindDogSlider("motivation-slider", "dynamic-dog-image-5");

  // Back Navigation
  const backToHome = document.getElementById("back-to-home");
  const backToC1 = document.getElementById("back-to-c1");
  const backToC2 = document.getElementById("back-to-c2");

  if (backToHome) {
    backToHome.addEventListener("click", () => {
      compact1Screen.classList.add("hidden");
      homepage.classList.remove("hidden");
    });
  }

  if (backToC1) {
    backToC1.addEventListener("click", () => {
      compact2Screen.classList.add("hidden");
      compact1Screen.classList.remove("hidden");
    });
  }

  if (backToC2) {
    backToC2.addEventListener("click", () => {
      compact3Screen.classList.add("hidden");
      compact2Screen.classList.remove("hidden");
    });
  }

  // Navigate to compact 4
  const nextBtn3 = document.getElementById("next-btn-3");
  const compact4Screen = document.getElementById("compact-4-screen");
  const dynamicDogImage = document.getElementById("dynamic-dog-image");

  if (nextBtn3) {
    nextBtn3.addEventListener("click", () => {
      if (dynamicDogImage) {
        document.getElementById("dynamic-dog-image-4").src = dynamicDogImage.src;
      }
      compact3Screen.classList.add("hidden");
      compact4Screen.classList.remove("hidden");
    });
  }

  // Navigate to compact 5
  const nextBtn4 = document.getElementById("next-btn-4");
  const compact5Screen = document.getElementById("compact-5-screen");

  if (nextBtn4) {
    nextBtn4.addEventListener("click", () => {
      document.getElementById("dynamic-dog-image-5").src = document.getElementById("dynamic-dog-image-4").src;
      compact4Screen.classList.add("hidden");
      compact5Screen.classList.remove("hidden");
    });
  }

  if (backToC3) {
    backToC3.addEventListener("click", () => {
      compact4Screen.classList.add("hidden");
      compact3Screen.classList.remove("hidden");
    });
  }

  // Back navigation for compact 5
  const backToC4 = document.getElementById("back-to-c4");
  
  if (backToC4) {
    backToC4.addEventListener("click", () => {
      compact5Screen.classList.add("hidden");
      compact4Screen.classList.remove("hidden");
    });
  }
});
