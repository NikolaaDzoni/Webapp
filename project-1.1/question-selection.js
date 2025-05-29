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
        'Uvod': [
            'Šta ćete naučiti',
            'Proces izrade sajta',
            'Šta je Webflow, i zašto on',
            'Zašto učimo Figmu i dizajn',
            'Kako da pratite kurs',
            'Pristup diskord grupi'
        ],
        '[NOVO] Kompletan kurs dizajna (Figma)': [
            'Moj kratak uvod',
            'Šta je to sajt',
            'Šta je to dizajn i zašto je on bitan',
            'Struktura sajta',
            'Tipografija (teorija)',
            'Tipografija (primena)',
            'Boje (teorija)',
            'Boje (primena)',
            'Fotografije i ilustracije (teorija)',
            'Fotografije i ilustracije (primena)',
            'Beli prostor (teorija)',
            'Beli prostor (primena)',
            'Kompozicija uvod',
            'Hijerarhija i kontrast',
            'Balans',
            'Layout',
            'Ritam i pokret',
            'Mini Figma kurs',
            'Proces dizajna',
            'Faza brifinga',
            'Prikupljanje referenci i inspiracija',
            'Wireframing',
            'Dizajniranje Portfolio sajta',
            'Dizajniranje Portfolio sajta [Responsive]',
            'Kraj'
        ],
        'Web dizajn za developere': [
            'Struktura sajta',
            'Kako da odaberemo fotografije za sajt',
            'Kako da odaberemo boje za sajt',
            'Overlays & Gradients',
            'Kako da odaberemo fontove za sajt',
            'Kako da ubacimo ikonice i grafike',
            'Komplet homepage dizajn',
            'Kako poslati dizajn klijentu'
        ],
        'HTML & CSS - Osnove': [
            'Šta su HTML i CSS',
            'Osnove HTML-a',
            'Osnove CSS-a'
        ],
        'Obavezno pogledati': [
            'Objašnjenje update-a kursa'
        ],
        'Webflow Essentials': [
            'Pregled Webflow interfejsa i glavnih elemenata',
            'Pregled Webflow interfejsa [UPDATE]',
            'Pregled Webflow interfejsa i novosti [UPDATE v2]',
            'Pregled Webflow interfejsa [UPDATE v3]',
            'Osnovni Webflow elementi [UPDATE v3]',
            'Webflow klase (classes) [UPDATE v3]',
            'Flex & Grid - Objašnjenje i razlike [UPDATE v3]',
            'Kloniranje figma dizajna da bi mogli da radite edit [UPDATE]',
            'Izrada sajta',
            'Izrada responsiva za sajt',
            'Page preloader animacija',
            'Smooth page animacije',
            'Pravljenje responsive navigacije [dodatak]',
            'Webflow interakcije i hovers',
            'Razlika između PX, EM i REM [UPDATE]',
            'Variables / Aspect Ratio / 3D spline [UPDATE v2]'
        ],
        'Pravimo novi sajt [UPDATE v3]': [
            'Style Guide [UPDATE v3]',
            'Izrada homepage-a [UPDATE v3]',
            'Izrada homepage-a (responsive) [UPDATE v3]'
        ],
        'Webflow dinamički sadržaj (CMS)': [
            'Pravimo blog',
            'Pravimo blog - part 2',
            'Related posts',
            'Blog post author'
        ],
        'Webflow eCommerce': [
            'Webflow eCommerce'
        ],
        'Webflow paketi i client as editor': [
            'Šta se u Webflow-u plaća i kako',
            'Kako dati klijentu mogućnost da edituje sajt'
        ],
        'Users / Logic / Apps / Client-first': [
            'Users - Registracija, login, gated content [UPDATE]',
            'Logic - automatizacija, uslovi, newsletters, slanje emailova [UPDATE]',
            'Apps - advanced filtering, analytics, interaktivne forme [UPDATE]',
            'Šta je Client-first pristup? [UPDATE]'
        ],
        'Izrada portfolio sajta': [
            'Zašto portfolio sajt',
            'Pravimo portfolio sajt',
            'Pravimo portfolio sajt [Responsive]',
            'Osnove On-Page SEO',
            'Domaći',
            'Webflow Hosting i postavljanje domena'
        ],
        'Hosting i transfer sajta': [
            'Kako prebaciti sajt sa vašeg webflow naloga na klijentov [UPDATE]',
            'Šta ako klijent već ima sajt i hosting koji nije od Webflow-a? [UPDATE]',
            'Kako uraditi code export besplatno i hostovati sajt na drugom hostingu? [UPDATE]'
        ],
        'Freelance Business (non-UpWork)': [
            'Kako se primaju uplate od freelance poslova',
            'Šta je to prodaja',
            'Proces pronalaska klijenata',
            'Digitalni aseti',
            'Gde tražimo klijente',
            'Pisanje i slanje emailova',
            'Kako ozbiljno unaprediti slanje emailova [UPDATE]',
            'Razgovor sa klijentom na pozivu',
            'Određivanje cene sajta i slanje ponude',
            'Komunikacija sa klijentom tokom izrade projekta',
            'Kako izvući maksimum od klijenta/projekta'
        ],
        'Kako dobiti klijente na UpWork-u': [
            'Šta je UpWork? Otvaranje profila',
            'Tehničke stvari (Payments, W-8BEN)',
            'UpWork Profil',
            'Kako aplicirati za poslove',
            'UpWork bedževi',
            'Najjači trikovi',
            'UpWork overview / Bidovanje / Filtering / Connects [UPDATE]',
            'Primjeri mojih proposala [UPDATE]',
            'Upwork VAT/TIN [UPDATE]'
        ],
        'Dodatni saveti': [
            'Dodatni saveti - Srećno svima!'
        ],
        '* Bonus lekcije': [
            'Pravimo hero sekciju u Webflow (bez responsive)',
            'Implementiranje JS Slick Slidera'
        ]
        // Add other areas' subareas here as needed
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