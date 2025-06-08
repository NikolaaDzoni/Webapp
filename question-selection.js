document.addEventListener('DOMContentLoaded', () => {
    const areaSelect = document.querySelector('select[id="areaSelect"]');
    const subAreaSelect = document.querySelector('select[id="subAreaSelect"]');
    const languageSelect = document.querySelector('.styled-select');
    const numberInput = document.querySelector('input[type="text"]');
    const displayBtn = document.querySelector('.display-btn');
    const byAreaRadio = document.getElementById('byArea');
    const byNumberRadio = document.getElementById('byNumber');
    const areaFields = document.getElementById('areaFields');
    const numberFields = document.getElementById('numberFields');
    const selectionOptions = document.querySelectorAll('.selection-group .selection-option');

    const subAreas = {
        'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C': [
            // Ovde možeš dodati podlekcije ako ih imaš za C, ili ostaviti prazno
        ]
    };

    areaSelect.addEventListener('change', (e) => {
        const selectedArea = e.target.value;
        const currentSubAreas = subAreas[selectedArea] || [];
        
        // Clear and update subareas
        subAreaSelect.innerHTML = currentSubAreas
            .map(subArea => `<option>${subArea}</option>`)
            .join('');
    });

    // Handle radio button changes
    byAreaRadio.addEventListener('change', () => {
        // Update active class for styling
        selectionOptions.forEach(option => option.classList.remove('active'));
        byAreaRadio.closest('.selection-option').classList.add('active');

        // Enable area selection
        numberInput.disabled = true;
        areaSelect.disabled = false;
        
        areaFields.style.opacity = '1';
        numberFields.style.opacity = '0.5';
    });

    byNumberRadio.addEventListener('change', () => {
        // Update active class for styling
        selectionOptions.forEach(option => option.classList.remove('active'));
        byNumberRadio.closest('.selection-option').classList.add('active');

        // Enable number input
        numberInput.disabled = false;
        areaSelect.disabled = true;
        
        areaFields.style.opacity = '0.5';
        numberFields.style.opacity = '1';
    });

    // Add a single click listener for the display button
    displayBtn.addEventListener('click', () => {
        if (byAreaRadio.checked) {
            const selectedArea = areaSelect.value;
            window.location.href = `index.html?area=${encodeURIComponent(selectedArea)}`;
        } else if (byNumberRadio.checked) {
            const questionNumber = numberInput.value;
            if (questionNumber) {
                window.location.href = `index.html?question=${questionNumber}`;
            }
        }
    });

    // Add input validation for numbers only (max 6 digits)
    numberInput.addEventListener('input', (e) => {
        // Remove any non-digit characters
        e.target.value = e.target.value.replace(/\D/g, '');
        // Limit to 6 digits
        if (e.target.value.length > 6) {
            e.target.value = e.target.value.slice(0, 6);
        }
    });

    // Prevent paste of non-numbers and limit to 6 digits
    numberInput.addEventListener('paste', (e) => {
        e.preventDefault();
        const pastedText = (e.clipboardData || window.clipboardData).getData('text');
        if (/^\d+$/.test(pastedText)) {
            numberInput.value = pastedText.slice(0, 6);
        }
    });

    // Optional: Prevent special keys and check length
    numberInput.addEventListener('keypress', (e) => {
        if (!/^\d$/.test(e.key) || (numberInput.value.length >= 6 && e.key !== 'Backspace')) {
            e.preventDefault();
        }
    });

    // Initialize state
    numberInput.disabled = true;
    areaSelect.disabled = false;
    areaFields.style.opacity = '1';
    numberFields.style.opacity = '0.5';

    // Set initial active class
    if (byAreaRadio.checked) {
        byAreaRadio.closest('.selection-option').classList.add('active');
    } else if (byNumberRadio.checked) {
        byNumberRadio.closest('.selection-option').classList.add('active');
    }
}); 