
// BMI CALCULATOR ↓ //

function calculateBMI() {
  let heightInput = document.getElementById("height-input"); // 身長入力欄
  let weightInput = document.getElementById("weight-input"); // 体重入力欄
  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);
  let resultElement = document.getElementById("result"); // BMI表示場所
  let adviceElement = document.getElementById("advice");

  if (isNaN(height) && isNaN(weight)) {
    alert("両方の値を入力してください。");
    return;
  }

  if (isNaN(height)) {
    alert("身長の値を入力してください。");
    return;
  }

  if (isNaN(weight)) {
    alert("体重の値を入力してください。");
    return;
  }

  if (weight < 0 && height < 0) {
    alert("身長と体重に負の値が入っています。正の整数で入力してください。");
    return;
  }

  if (height < 0) {
    alert("身長に負の値が入っています。正の整数で入力してください。");
    return;
  }

  if (weight < 0) {
    alert("体重に負の値が入っています。正の整数で入力してください。");
    return;
  }

  if (height === 0 && weight === 0) {
    alert("身長と体重に0が入っています。正の整数で入力してください。");
    return;
  }

  if (height === 0) {
    alert("身長に0が入っています。正の整数で入力してください。");
    return;
  }

  if (weight === 0) {
    alert("体重に0が入っています。正の整数で入力してください。");
    return;
  }

  if (!Number.isInteger(height)) {
    let roundedHeight = Math.round(height);

    alert(
      "有効な値を入力してください。有効な値として最も近いのは身長" +
        roundedHeight +
        "cmです。"
    );
    return;
  }

  if (!Number.isInteger(weight)) {
    let roundedWeight = Math.round(weight);

    alert(
      "有効な値を入力してください。有効な値として最も近いのは体重" +
        roundedWeight +
        " kgです。"
    );
    return;
  }

  let bmi = weight / (height / 100) ** 2;
  let classification = "";
  let advice = "";

  if (bmi < 18.5) {
    classification = "低体重";
    advice =
      "バランスの取れた食事を食べて、 " + "\n" + "定期的に運動しましょう!";

    adviceElement.innerText = advice;
    adviceElement.style.color = "#FFC1C1";
    adviceElement.style.fontFamily = "Kiwi Maru";

    resultElement.style.color = "#33CCFF";
    resultElement.style.fontFamily = "Kiwi Maru";
  } else if (bmi >= 18.5 && bmi < 25) {
    classification = "普通体重";
    advice = "バランスの取れた食事を心がけましょう!";

    adviceElement.innerText = advice;
    adviceElement.style.color = "#FFC1C1";
    adviceElement.style.fontFamily = "Kiwi Maru";

    resultElement.style.color = "#66CDAA";
    resultElement.style.fontFamily = "Kiwi Maru";
  } else if (bmi >= 25 && bmi < 30) {
    classification = "肥満（１度）";
    resultElement.style.color = "#FA8072";
    resultElement.style.fontFamily = "Kiwi Maru";

    advice = "食事の見直しを行いましょう!";
    adviceElement.innerText = advice;
    adviceElement.style.color = "#FFC1C1";
    adviceElement.style.fontFamily = "Kiwi Maru";
  } else if (bmi >= 30 && bmi < 35) {
    classification = "肥満（２度）";
    resultElement.style.color = "#FA8072";
    resultElement.style.fontFamily = "Kiwi Maru";

    advice = "食事の見直しを行いましょう!";
    adviceElement.innerText = advice;
    adviceElement.style.color = "#FFC1C1";
    adviceElement.style.fontFamily = "Kiwi Maru";
  } else if (bmi >= 35 && bmi < 40) {
    classification = "肥満（３度）";
    resultElement.style.color = "#FA8072";
    resultElement.style.fontFamily = "Kiwi Maru";

    advice = "食事の見直しを行いましょう!";
    adviceElement.innerText = advice;
    adviceElement.style.color = "#FFC1C1";
    adviceElement.style.fontFamily = "Kiwi Maru";
  } else {
    classification = "肥満（４度）";
    resultElement.style.color = "#FA8072";
    resultElement.style.fontFamily = "Kiwi Maru";

    advice = "食事の見直しを行いましょう!";
    adviceElement.innerText = advice;
    adviceElement.style.color = "#FFC1C1";
    adviceElement.style.fontFamily = "Kiwi Maru";
  }

  let standardWeight = 22 * (height / 100) ** 2;
  let weightDifference = weight - standardWeight;

  resultElement.innerText =
    "BMI: " +
    bmi.toFixed(2) +
    "\n" +
    classification +
    "\n標準体重との差: " +
    weightDifference.toFixed(2) +
    " kg";
}

function reset() {
  document.getElementById("height-input").value = "";
  document.getElementById("weight-input").value = "";
  document.getElementById("result").innerText = "";
  document.getElementById("result").style.color = "";
  document.getElementById("advice").innerText = "";
  document.getElementById("advice").style.color = "";
}

/* ANIMATION FOR TEXT↓ */

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slideUp");

        // Gỡ bỏ quan sát sau khi animation đã được kích hoạt
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("slideUp");
      }
    });
  },
  {
    // Cài đặt để chỉ kích hoạt một lần
    root: null,
    threshold: 0.3, // Chỉ cần phần tử hiển thị 50% trong viewport là kích hoạt
    once: true, // Kích hoạt một lần và sau đó ngừng quan sát
  }
);

// Observe each element with the .animate class
document.querySelectorAll(".animate").forEach((element) => {
  observer.observe(element);
});

let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 100, // Tốc độ cuộn
  offset: 100, // Độ lệch vị trí cuộn
});

// CURSOR POINTER ↓ //

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOuline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOuline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});

const createCursor = (x, y) => {
  const cursor = document.createElement("div");
  cursor.className = "cursor";
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;

  return cursor;
};

const removeCursorFromDom = (cursor) => {
  const timeout = setTimeout(() => {
    cursor.remove();
    clearTimeout(timeout);
  }, 1000);
};

window.addEventListener("click", (event) => {
  const cursor = createCursor(event.pageX, event.pageY);
  document.body.append(cursor);
  removeCursorFromDom(cursor);
});


