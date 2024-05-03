const formData = {
    email: "",
    message: ""
  };
  
  const feedbackForm = document.querySelector('.feedback-form');
  const emailInput = feedbackForm.querySelector('input[name="email"]');
  const messageInput = feedbackForm.querySelector('textarea[name="message"]');
  
  function saveFormData() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
  
  function loadFormData() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      Object.assign(formData, JSON.parse(savedData));
      emailInput.value = formData.email;
      messageInput.value = formData.message;
    }
  }
  
  function validateForm() {
    if (formData.email.trim() === "" || formData.message.trim() === "") {
      alert("Fill please all fields");
      return false;
    }
    return true;
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      console.log(formData);
      localStorage.removeItem('feedback-form-state');
      Object.keys(formData).forEach(key => {
        formData[key] = "";
      });
      emailInput.value = "";
      messageInput.value = "";
    }
  }
  
  emailInput.addEventListener('input', (event) => {
    formData.email = event.target.value;
    saveFormData();
  });
  
  messageInput.addEventListener('input', (event) => {
    formData.message = event.target.value;
    saveFormData();
  });
  
  feedbackForm.addEventListener('submit', handleSubmit);
  
  document.addEventListener('DOMContentLoaded', loadFormData);
  