function isMobilePhone(number) {
  if (number.length !== 10) {
    return false;
  }
  for(let i = 0; i < number.length; i++) {
    if (isNaN(parseInt(number[i]))) {
      return false;
    }
  }
  return true;
}
console.log('1234567890', isMobilePhone('1234567890'));
console.log('123456789', isMobilePhone('123456789'));
console.log('12345678901', isMobilePhone('12345678901'));
console.log('12345678A0', isMobilePhone('12345678A0'));

function isCreditCard(number, validMonth, validYear) {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  
  if (number.length !== 16 || isNaN(parseInt(number))) {
    return false;
  }
  
  if (validMonth < 1 || validMonth > 12) {
    return false;
  }
  
  if (validYear < currentYear || (validYear === currentYear && validMonth < currentMonth)) {
    return false;
  }
  
  return true;
}

console.log('1234567812345678', 12, 2025, isCreditCard('1234567812345678', 12, 2025));
console.log('1234567812345678', 12, 2023, isCreditCard('1234567812345678', 12, 2023));
console.log('1234567812345678', 13, 2025, isCreditCard('1234567812345678', 13, 2025));
console.log('12345678O123456', 12, 2026, isCreditCard('12345678O123456', 12, 2026));
