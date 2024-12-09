function generateResume(): void {
    // Define required fields
    const requiredFields: string[] = [
      'name',
      'email',
      'phone',
      'address',
      'education',
      'experience',
      'skills',
    ];
  
    let allFieldsFilled = true;
  
    requiredFields.forEach((field) => {
      const input = document.getElementById(field) as HTMLInputElement | null;
      if (input && !input.value.trim()) {
        allFieldsFilled = false;
      }
    });
  
    const errorMessage = document.getElementById('error-message');
    if (!errorMessage) return;
  
    if (!allFieldsFilled) {
      errorMessage.style.display = 'block';
      return;
    }
  
    errorMessage.style.display = 'none';
  
    // Update preview with form values
    requiredFields.forEach((field) => {
      const input = document.getElementById(field) as HTMLInputElement | null;
      const previewElement = document.getElementById(`preview-${field}`);
      if (input && previewElement) {
        previewElement.innerText = input.value;
      }
    });
  
    // Show preview and hide form
    const formElement = document.getElementById('resume-form');
    const previewElement = document.getElementById('resume-preview');
  
    if (formElement) formElement.style.display = 'none';
    if (previewElement) previewElement.style.display = 'block';
  }
  
  function editResume(): void {
    // Show form and hide preview
    const formElement = document.getElementById('resume-form');
    const previewElement = document.getElementById('resume-preview');
  
    if (formElement) formElement.style.display = 'block';
    if (previewElement) previewElement.style.display = 'none';
  }
  