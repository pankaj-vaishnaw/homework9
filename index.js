const addButton = document.getElementById("addButton");
    const textInput = document.getElementById("textInput");
    const outputDiv = document.getElementById("output");

    addButton.addEventListener("click", () => {
      const text = textInput.value.trim();
      if (text !== "") {
        const pTag = document.createElement("p");
        pTag.textContent = text;
        outputDiv.appendChild(pTag);
        textInput.value = "";
      }
    });