import jsPDF from "jspdf";

export const downloadPDF = (element, filename) => {
  if (!element) return; // Early return if the element is null

  // Extract text content from the element
  const textContent = element.innerText;

  // Create a new jsPDF instance with custom page size
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    putOnlyUsedFonts: true,
  });

  // Set margins
  const margin = 10;
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  // Set font size and add text to PDF
  pdf.setFontSize(12);
  pdf.text(margin, margin, textContent, { maxWidth: pageWidth - margin * 2 });

  // Save the PDF with the specified filename
  pdf.save(filename);
};
