(function() {
  const nameElement = document.getElementById('name-display');
  
  // Only run on pages that have the name element
  if (!nameElement) return;
  
  // Get names from data attributes
  const bengaliName = nameElement.getAttribute('data-bengali-name');
  const englishName = nameElement.getAttribute('data-english-name');
  
  let isAnimating = false;
  let showingBengali = false;
  
  // Calculate and set the height to accommodate both names
  function setFixedHeight() {
    const currentText = nameElement.textContent;
    
    // Measure English name height
    nameElement.textContent = englishName;
    const englishHeight = nameElement.offsetHeight;
    
    // Measure Bengali name height
    nameElement.textContent = bengaliName;
    const bengaliHeight = nameElement.offsetHeight;
    
    // Set height to the larger of the two
    const maxHeight = Math.max(englishHeight, bengaliHeight);
    nameElement.style.height = maxHeight + 'px';
    nameElement.style.lineHeight = maxHeight + 'px';
    
    // Restore original text
    nameElement.textContent = currentText;
  }
  
  // Set fixed height on load
  setFixedHeight();
  
  function flipToName(newName) {
    if (isAnimating) return;
    isAnimating = true;
    
    nameElement.classList.add('flipping');
    
    setTimeout(() => {
      nameElement.textContent = newName;
    }, 150); // Change text halfway through animation
    
    setTimeout(() => {
      nameElement.classList.remove('flipping');
      isAnimating = false;
    }, 300); // Match animation duration
  }
  
  nameElement.addEventListener('click', function() {
    if (showingBengali) {
      flipToName(englishName);
      showingBengali = false;
    } else {
      flipToName(bengaliName);
      showingBengali = true;
    }
  });
})();
