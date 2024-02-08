document.addEventListener("DOMContentLoaded", function() {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Hebe please?",
      "Don't do this to me",
      "I'm gonna cry",
      "You are breaking my heart ;(",
    ];
  
    const valentineContainer = document.getElementById("valentine-container");
  
    function createValentineContent() {
      const container = document.createElement("div");
      container.classList.add("valentine-content");
  
      const img = new Image();
      img.src = "https://media1.tenor.com/m/i-EiA87Hy4QAAAAd/kiss-day.gif";
      img.alt = "bears with hearts";
  
      const question = document.createElement("div");
      question.textContent = "Will you be my valentine?";
  
      const buttonsDiv = document.createElement("div");
      buttonsDiv.classList.add("buttons");
  
      const createButton = (text, className) => {
        const button = document.createElement("button");
        button.textContent = text;
        button.classList.add(className);
        return button;
      };
  
      const yesButton = createButton("Yes", "yesButton");
      const noButton = createButton("No", "noButton");
  
      buttonsDiv.append(yesButton, noButton);
      container.append(img, question, buttonsDiv);
      valentineContainer.appendChild(container);
  
      let noCount = 0;
  
      yesButton.addEventListener("click", function() {
        container.innerHTML = `
          <img src="https://media1.tenor.com/m/J3o-7E-2JGAAAAAd/emuahh.gif" alt="bears kissing">
          <div class="text">Yay!!!</div>
        `;
      });
  
      noButton.addEventListener("click", function() {
        const currentCount = Math.min(noCount, phrases.length - 1);
        noButton.textContent = phrases[currentCount];
        noCount++;
        yesButton.style.fontSize = `${noCount * 20 + 16}px`; // Increase the font size of the green button
      });
    }
  
    // Create the Valentine's Day content
    createValentineContent();
  });
  