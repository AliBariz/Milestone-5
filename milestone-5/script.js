function generateResume() {
  // Check if any fields are empty
  const requiredFields = ['name', 'email', 'phone', 'address', 'education', 'experience', 'skills'];
  let allFieldsFilled = true;

  requiredFields.forEach(field => {
    const input = document.getElementById(field);
    if (!input.value.trim()) {
      allFieldsFilled = false;
    }
  });

  if (!allFieldsFilled) {
    document.getElementById('error-message').style.display = 'block';
    return;
  }

  document.getElementById('error-message').style.display = 'none';

  // Update preview with form values
  document.getElementById('preview-name').innerText = document.getElementById('name').value;
  document.getElementById('preview-email').innerText = document.getElementById('email').value;
  document.getElementById('preview-phone').innerText = document.getElementById('phone').value;
  document.getElementById('preview-address').innerText = document.getElementById('address').value;
  document.getElementById('preview-education').innerText = document.getElementById('education').value;
  document.getElementById('preview-experience').innerText = document.getElementById('experience').value;
  document.getElementById('preview-skills').innerText = document.getElementById('skills').value;

  // Show preview and hide form
  document.getElementById('resume-form').style.display = 'none';
  document.getElementById('resume-preview').style.display = 'block';
}

function editResume() {
  // Show form and hide preview
  document.getElementById('resume-form').style.display = 'block';
  document.getElementById('resume-preview').style.display = 'none';
}

function exportPDF() {
  const element = document.getElementById('resume-preview');
  html2pdf()
    .from(element)
    .save('resume.pdf');
}