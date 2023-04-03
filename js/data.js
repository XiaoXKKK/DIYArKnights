function saveData() {
    const formElements = document.querySelectorAll("input, textarea, select");
    const formData = {};
    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        console.log(element);
        const name = element.name;
        const value = element.value;
        console.log(name);
        console.log(value);
        if (name) {
            formData[name] = value;
        }
    }
    formData["atk_range"]=getGridColors()
    const formDataString = JSON.stringify(formData);
    const blob = new Blob([formDataString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "form-data.json";
    link.click();
  }
  
  function loadData(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const formDataString = event.target.result;
      const formData = JSON.parse(formDataString);
      const formElements = document.querySelectorAll("input, textarea, select");
      for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        const name = element.name;
        const value = formData[name];
        if (value !== undefined) {
          element.defaultValue = value;
          element.value = value;
        }
      }
        setGridColors(formData["atk_range"])
    };
    reader.readAsText(file);
  }