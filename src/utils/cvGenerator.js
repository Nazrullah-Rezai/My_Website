import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generateAndDownloadCV = async () => {
  try {
    const element = document.getElementById('cv-content');
    
    if (!element) {
      console.error('CV content element not found');
      return;
    }

    // Create canvas from HTML
    const canvas = await html2canvas(element, {
      scale: 2,
      logging: false,
      backgroundColor: '#ffffff',
    });

    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const imgData = canvas.toDataURL('image/png');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pdfWidth - 20;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 10;

    // Add first page
    pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight - 20;

    // Add additional pages if needed
    while (heightLeft > 0) {
      position = heightLeft - imgHeight + 10;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight - 20;
    }

    // Download PDF
    pdf.save('Nazrullah_Rezai_CV.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};

export const downloadCVSimple = () => {
  const cvData = {
    name: 'Nazrullah Rezai',
    title: 'Full Stack Web Developer',
    email: 'nasrollah.rzi@gmail.com',
    location: 'Darmstadt, Germany',
    phone: '+49 (123) 456-7890',
    
    summary: `Passionate web developer with expertise in modern web technologies. 
              I create responsive, user-friendly applications with focus on performance and clean code.`,
    
    skills: [
      'JavaScript/React',
      'HTML/CSS',
      'Node.js',
      'MongoDB',
      'REST APIs',
      'Git/GitHub',
      'Responsive Design',
      'UI/UX Principles'
    ],
    
    experience: [
      {
        title: 'Full Stack Developer',
        company: 'Web Development Portfolio',
        period: '2023 - Present',
        description: 'Building modern web applications with React and Node.js'
      }
    ],
    
    education: [
      {
        degree: 'Web Development',
        institution: 'Self-Taught & Online Courses',
        year: '2023'
      }
    ]
  };

  const pdf = new jsPDF();
  let yPosition = 20;
  const lineHeight = 7;
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;

  // Helper function to add text with auto page break
  const addText = (text, fontSize = 12, isBold = false, color = '#000000') => {
    if (yPosition > pageHeight - margin) {
      pdf.addPage();
      yPosition = margin;
    }
    pdf.setFontSize(fontSize);
    pdf.setFont(undefined, isBold ? 'bold' : 'normal');
    pdf.setTextColor(color.startsWith('#') ? 
      parseInt(color.slice(1), 16) >> 16 & 255 :
      0,
      color.startsWith('#') ? 
      (parseInt(color.slice(1), 16) >> 8) & 255 :
      0,
      color.startsWith('#') ? 
      parseInt(color.slice(1), 16) & 255 :
      0
    );
    pdf.text(text, margin, yPosition);
    yPosition += lineHeight + 2;
  };

  // Title
  pdf.setFontSize(24);
  pdf.setFont(undefined, 'bold');
  pdf.text(cvData.name, margin, yPosition);
  yPosition += 10;

  // Contact Info
  pdf.setFontSize(10);
  pdf.setFont(undefined, 'normal');
  pdf.text(`${cvData.title} | ${cvData.location}`, margin, yPosition);
  yPosition += 5;
  pdf.text(`Email: ${cvData.email} | Phone: ${cvData.phone}`, margin, yPosition);
  yPosition += 10;

  // Summary
  addText('PROFESSIONAL SUMMARY', 12, true);
  pdf.setFontSize(10);
  const summaryText = pdf.splitTextToSize(cvData.summary, 170);
  pdf.text(summaryText, margin, yPosition);
  yPosition += summaryText.length * (lineHeight - 2) + 5;

  // Skills
  yPosition += 3;
  addText('SKILLS', 12, true);
  const skillsText = cvData.skills.join(' • ');
  const skillsWrapped = pdf.splitTextToSize(skillsText, 170);
  pdf.setFontSize(10);
  pdf.text(skillsWrapped, margin, yPosition);
  yPosition += skillsWrapped.length * (lineHeight - 2) + 5;

  // Experience
  yPosition += 3;
  addText('EXPERIENCE', 12, true);
  cvData.experience.forEach(exp => {
    addText(`${exp.title} - ${exp.company}`, 10, true);
    addText(exp.period, 9);
    addText(exp.description, 10);
    yPosition += 2;
  });

  // Education
  yPosition += 3;
  addText('EDUCATION', 12, true);
  cvData.education.forEach(edu => {
    addText(`${edu.degree}`, 10, true);
    addText(`${edu.institution}, ${edu.year}`, 10);
    yPosition += 2;
  });

  pdf.save('Nazrullah_Rezai_CV.pdf');
};
