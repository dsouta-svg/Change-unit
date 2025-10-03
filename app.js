// Unit conversion data
const conversionData = {
  "length": {
    "name": "Length/Distance",
    "icon": "📏",
    "units": {
      "mm": {"name": "Millimeter", "factor": 0.001},
      "cm": {"name": "Centimeter", "factor": 0.01},
      "m": {"name": "Meter", "factor": 1},
      "km": {"name": "Kilometer", "factor": 1000},
      "in": {"name": "Inch", "factor": 0.0254},
      "ft": {"name": "Foot", "factor": 0.3048},
      "yd": {"name": "Yard", "factor": 0.9144},
      "mi": {"name": "Mile", "factor": 1609.34}
    }
  },
  "weight": {
    "name": "Weight/Mass",
    "icon": "⚖️",
    "units": {
      "mg": {"name": "Milligram", "factor": 0.000001},
      "g": {"name": "Gram", "factor": 0.001},
      "kg": {"name": "Kilogram", "factor": 1},
      "t": {"name": "Metric Ton", "factor": 1000},
      "oz": {"name": "Ounce", "factor": 0.0283495},
      "lb": {"name": "Pound", "factor": 0.453592},
      "st": {"name": "Stone", "factor": 6.35029}
    }
  },
  "temperature": {
    "name": "Temperature",
    "icon": "🌡️",
    "units": {
      "c": {"name": "Celsius"},
      "f": {"name": "Fahrenheit"},
      "k": {"name": "Kelvin"}
    }
  },
  "volume": {
    "name": "Volume/Capacity",
    "icon": "🥤",
    "units": {
      "ml": {"name": "Milliliter", "factor": 0.001},
      "l": {"name": "Liter", "factor": 1},
      "m3": {"name": "Cubic Meter", "factor": 1000},
      "floz": {"name": "Fluid Ounce", "factor": 0.0295735},
      "cup": {"name": "Cup", "factor": 0.236588},
      "pt": {"name": "Pint", "factor": 0.473176},
      "qt": {"name": "Quart", "factor": 0.946353},
      "gal": {"name": "Gallon", "factor": 3.78541}
    }
  },
  "area": {
    "name": "Area",
    "icon": "⬜",
    "units": {
      "mm2": {"name": "Square Millimeter", "factor": 0.000001},
      "cm2": {"name": "Square Centimeter", "factor": 0.0001},
      "m2": {"name": "Square Meter", "factor": 1},
      "ha": {"name": "Hectare", "factor": 10000},
      "km2": {"name": "Square Kilometer", "factor": 1000000},
      "in2": {"name": "Square Inch", "factor": 0.00064516},
      "ft2": {"name": "Square Foot", "factor": 0.092903},
      "yd2": {"name": "Square Yard", "factor": 0.836127},
      "ac": {"name": "Acre", "factor": 4046.86},
      "mi2": {"name": "Square Mile", "factor": 2590000}
    }
  },
  "time": {
    "name": "Time",
    "icon": "⏰",
    "units": {
      "ms": {"name": "Millisecond", "factor": 0.001},
      "s": {"name": "Second", "factor": 1},
      "min": {"name": "Minute", "factor": 60},
      "hr": {"name": "Hour", "factor": 3600},
      "day": {"name": "Day", "factor": 86400},
      "wk": {"name": "Week", "factor": 604800},
      "mo": {"name": "Month", "factor": 2629746},
      "yr": {"name": "Year", "factor": 31556952}
    }
  },
  "speed": {
    "name": "Speed/Velocity",
    "icon": "🏃",
    "units": {
      "ms": {"name": "Meter/Second", "factor": 1},
      "kmh": {"name": "Kilometer/Hour", "factor": 0.277778},
      "mph": {"name": "Mile/Hour", "factor": 0.44704},
      "fts": {"name": "Foot/Second", "factor": 0.3048},
      "kn": {"name": "Knot", "factor": 0.514444}
    }
  },
  "pressure": {
    "name": "Pressure",
    "icon": "🔴",
    "units": {
      "pa": {"name": "Pascal", "factor": 1},
      "kpa": {"name": "Kilopascal", "factor": 1000},
      "bar": {"name": "Bar", "factor": 100000},
      "atm": {"name": "Atmosphere", "factor": 101325},
      "psi": {"name": "PSI", "factor": 6894.76}
    }
  },
  "energy": {
    "name": "Energy",
    "icon": "⚡",
    "units": {
      "j": {"name": "Joule", "factor": 1},
      "kj": {"name": "Kilojoule", "factor": 1000},
      "cal": {"name": "Calorie", "factor": 4.184},
      "kcal": {"name": "Kilocalorie", "factor": 4184},
      "btu": {"name": "BTU", "factor": 1055.06},
      "wh": {"name": "Watt-hour", "factor": 3600},
      "kwh": {"name": "Kilowatt-hour", "factor": 3600000}
    }
  },
  "power": {
    "name": "Power",
    "icon": "💡",
    "units": {
      "w": {"name": "Watt", "factor": 1},
      "kw": {"name": "Kilowatt", "factor": 1000},
      "mw": {"name": "Megawatt", "factor": 1000000},
      "hp": {"name": "Horsepower", "factor": 745.7},
      "btuh": {"name": "BTU/Hour", "factor": 0.293071}
    }
  },
  "data": {
    "name": "Data Storage",
    "icon": "💾",
    "units": {
      "bit": {"name": "Bit", "factor": 1},
      "byte": {"name": "Byte", "factor": 8},
      "kb": {"name": "Kilobyte", "factor": 8192},
      "mb": {"name": "Megabyte", "factor": 8388608},
      "gb": {"name": "Gigabyte", "factor": 8589934592},
      "tb": {"name": "Terabyte", "factor": 8796093022208}
    }
  },
  "currency": {
    "name": "Currency",
    "icon": "💰",
    "units": {
      "usd": {"name": "US Dollar", "factor": 1},
      "eur": {"name": "Euro", "factor": 0.85},
      "gbp": {"name": "British Pound", "factor": 0.73},
      "jpy": {"name": "Japanese Yen", "factor": 110},
      "cny": {"name": "Chinese Yuan", "factor": 6.45},
      "inr": {"name": "Indian Rupee", "factor": 74.5},
      "cad": {"name": "Canadian Dollar", "factor": 1.25},
      "aud": {"name": "Australian Dollar", "factor": 1.35}
    }
  }
};

// Application state
let currentCategory = null;

// DOM elements - initialized after DOM loads
let categoryView, conversionView, categoryGrid, backBtn, conversionTitle;
let fromUnit, toUnit, inputValue, outputValue, swapBtn, clearBtn, formulaInfo;

// Initialize the application
function init() {
    // Get DOM elements
    categoryView = document.getElementById('categoryView');
    conversionView = document.getElementById('conversionView');
    categoryGrid = document.getElementById('categoryGrid');
    backBtn = document.getElementById('backBtn');
    conversionTitle = document.getElementById('conversionTitle');
    fromUnit = document.getElementById('fromUnit');
    toUnit = document.getElementById('toUnit');
    inputValue = document.getElementById('inputValue');
    outputValue = document.getElementById('outputValue');
    swapBtn = document.getElementById('swapBtn');
    clearBtn = document.getElementById('clearBtn');
    formulaInfo = document.getElementById('formulaInfo');

    renderCategories();
    setupEventListeners();
}

// Render category grid
function renderCategories() {
    categoryGrid.innerHTML = '';
    
    Object.entries(conversionData).forEach(([key, category]) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.addEventListener('click', () => selectCategory(key));
        
        categoryCard.innerHTML = `
            <span class="category-card__icon">${category.icon}</span>
            <h3 class="category-card__name">${category.name}</h3>
        `;
        
        categoryGrid.appendChild(categoryCard);
    });
}

// Set up event listeners
function setupEventListeners() {
    backBtn.addEventListener('click', showCategoryView);
    swapBtn.addEventListener('click', swapUnits);
    clearBtn.addEventListener('click', clearInputs);
    inputValue.addEventListener('input', performConversion);
    fromUnit.addEventListener('change', performConversion);
    toUnit.addEventListener('change', performConversion);
}

// Select a category and show conversion interface
function selectCategory(categoryKey) {
    currentCategory = categoryKey;
    const category = conversionData[categoryKey];
    
    conversionTitle.textContent = category.name + ' Converter';
    populateUnitDropdowns(category.units);
    showConversionView();
    clearInputs();
}

// Populate unit dropdowns
function populateUnitDropdowns(units) {
    // Build options HTML for From dropdown
    let fromOptionsHTML = '<option value="">Select unit</option>';
    let toOptionsHTML = '<option value="">Select unit</option>';
    
    Object.entries(units).forEach(([key, unit]) => {
        const optionHTML = `<option value="${key}">${unit.name}</option>`;
        fromOptionsHTML += optionHTML;
        toOptionsHTML += optionHTML;
    });
    
    // Set the HTML directly
    fromUnit.innerHTML = fromOptionsHTML;
    toUnit.innerHTML = toOptionsHTML;
}

// Show category view
function showCategoryView() {
    categoryView.classList.remove('hidden');
    conversionView.classList.add('hidden');
    currentCategory = null;
}

// Show conversion view
function showConversionView() {
    categoryView.classList.add('hidden');
    conversionView.classList.remove('hidden');
}

// Swap units
function swapUnits() {
    const fromValue = fromUnit.value;
    const toValue = toUnit.value;
    
    if (fromValue && toValue) {
        fromUnit.value = toValue;
        toUnit.value = fromValue;
        performConversion();
    }
}

// Clear inputs
function clearInputs() {
    inputValue.value = '';
    outputValue.textContent = '0';
    formulaInfo.innerHTML = '';
}

// Perform conversion
function performConversion() {
    const fromUnitValue = fromUnit.value;
    const toUnitValue = toUnit.value;
    const inputVal = parseFloat(inputValue.value);
    
    if (!fromUnitValue || !toUnitValue || isNaN(inputVal) || inputValue.value === '') {
        outputValue.textContent = inputValue.value === '' ? '0' : 'Select units';
        formulaInfo.innerHTML = '';
        return;
    }
    
    const category = conversionData[currentCategory];
    let result;
    
    try {
        if (currentCategory === 'temperature') {
            result = convertTemperature(inputVal, fromUnitValue, toUnitValue);
        } else {
            result = convertStandardUnits(inputVal, fromUnitValue, toUnitValue, category.units);
        }
        
        // Format result
        const formattedResult = formatNumber(result);
        outputValue.textContent = formattedResult;
        
        // Show conversion info
        showConversionInfo(inputVal, result, fromUnitValue, toUnitValue);
    } catch (error) {
        outputValue.textContent = 'Error';
        formulaInfo.innerHTML = '';
    }
}

// Convert temperature units
function convertTemperature(value, from, to) {
    if (from === to) return value;
    
    // Convert to Celsius first
    let celsius;
    switch (from) {
        case 'c':
            celsius = value;
            break;
        case 'f':
            celsius = (value - 32) * 5/9;
            break;
        case 'k':
            celsius = value - 273.15;
            break;
        default:
            throw new Error('Invalid temperature unit');
    }
    
    // Convert from Celsius to target
    switch (to) {
        case 'c':
            return celsius;
        case 'f':
            return celsius * 9/5 + 32;
        case 'k':
            return celsius + 273.15;
        default:
            throw new Error('Invalid temperature unit');
    }
}

// Convert standard units using factors
function convertStandardUnits(value, from, to, units) {
    if (from === to) return value;
    
    const fromFactor = units[from].factor;
    const toFactor = units[to].factor;
    
    if (!fromFactor || !toFactor) {
        throw new Error('Invalid unit factors');
    }
    
    // Convert to base unit first, then to target unit
    const baseValue = value * fromFactor;
    return baseValue / toFactor;
}

// Format number for display
function formatNumber(num) {
    if (isNaN(num) || !isFinite(num)) return '0';
    
    // For very large or very small numbers, use scientific notation
    if (Math.abs(num) >= 1e10 || (Math.abs(num) < 1e-6 && num !== 0)) {
        return num.toExponential(6);
    }
    
    // For normal numbers, limit decimal places
    if (num % 1 === 0) {
        return num.toString();
    }
    
    // Determine decimal places based on magnitude
    let decimals;
    if (Math.abs(num) >= 1000) {
        decimals = 2;
    } else if (Math.abs(num) >= 1) {
        decimals = 6;
    } else {
        decimals = 8;
    }
    
    const result = parseFloat(num.toFixed(decimals));
    return result.toString();
}

// Show conversion information
function showConversionInfo(inputVal, outputVal, fromUnitKey, toUnitKey) {
    if (!currentCategory) return;
    
    const category = conversionData[currentCategory];
    const fromUnitName = category.units[fromUnitKey].name;
    const toUnitName = category.units[toUnitKey].name;
    
    let formula = '';
    
    if (currentCategory === 'temperature') {
        formula = getTemperatureFormula(fromUnitKey, toUnitKey);
    } else {
        const fromFactor = category.units[fromUnitKey].factor;
        const toFactor = category.units[toUnitKey].factor;
        const conversionFactor = fromFactor / toFactor;
        
        if (Math.abs(conversionFactor - 1) < 1e-10) {
            formula = `1 ${fromUnitName} = 1 ${toUnitName}`;
        } else if (conversionFactor > 1) {
            formula = `1 ${fromUnitName} = ${formatNumber(conversionFactor)} ${toUnitName}`;
        } else {
            formula = `1 ${toUnitName} = ${formatNumber(1/conversionFactor)} ${fromUnitName}`;
        }
    }
    
    formulaInfo.innerHTML = `
        <strong>Conversion:</strong> ${formatNumber(inputVal)} ${fromUnitName} = ${formatNumber(outputVal)} ${toUnitName}<br>
        <strong>Formula:</strong> ${formula}
    `;
}

// Get temperature conversion formula
function getTemperatureFormula(from, to) {
    const formulas = {
        'c-f': '°F = (°C × 9/5) + 32',
        'f-c': '°C = (°F - 32) × 5/9',
        'c-k': 'K = °C + 273.15',
        'k-c': '°C = K - 273.15',
        'f-k': 'K = (°F - 32) × 5/9 + 273.15',
        'k-f': '°F = (K - 273.15) × 9/5 + 32'
    };
    
    if (from === to) {
        return 'Same unit - no conversion needed';
    }
    
    return formulas[`${from}-${to}`] || 'Multi-step conversion';
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);