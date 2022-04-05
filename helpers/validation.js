import moment from 'moment';

export const VALIDATION_ERRORS = {
  EMAIL_OR_MOBILE: 'Please enter a valid mobile number or email address',
  MOBILE: 'Please enter a valid mobile number',
  FIRSTNAME: 'Please enter first name',
  LASTNAME: 'Please enter last name',
  COUNTRY: 'Please select Country of Residence',
};

export const validateEmail = (email: any) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const formatePhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/[^0-9+]/g, '');
};

export const validateOnlyNumbers = (value: string) => {
  const regex = /^[0-9 +()-]+$/g;
  return regex.test(value);
};

export const validatePhoneNumber = (phoneNumber: string[]) => {
  let phoneNumberWithPlus = phoneNumber;
  if (phoneNumber[0] !== '+') {
    phoneNumberWithPlus = `+${phoneNumber}`;
  }
  const re = /^\+[().\-_\d\s]{6,30}$/;
  if (re.test(String(phoneNumberWithPlus))) {
    const formattedPhoneNumber = formatePhoneNumber(phoneNumber);
    if (formattedPhoneNumber.substr(0, 3) === '+65') {
      if (formattedPhoneNumber.length === 11) {
        return true;
      } else {
        return false;
      }
    }
    if (formattedPhoneNumber.length > 5 && formattedPhoneNumber.length < 17) {
      return true;
    }
    return false;
  }
  return false;
};

const AmexCardnumber = (cardNumber: string) => {
  const re = /^(?:3[47][0-9]{13})$/;
  return re.test(cardNumber);
};

const VisaCardnumber = (cardNumber: string) => {
  const re = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  return re.test(cardNumber);
};

const MasterCardnumber = (cardNumber: string) => {
  const re = /^(?:5[1-5][0-9]{14})$/;
  return re.test(cardNumber);
};

const DiscoverCardnumber = (cardNumber: string) => {
  const re = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
  return re.test(cardNumber);
};

const DinerClubCardnumber = (cardNumber: string) => {
  const re = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
  return re.test(cardNumber);
};

const JCBCardnumber = (cardNumber: string) => {
  const re = /^(?:(?:2131|1800|35\d{3})\d{11})$/;
  return re.test(cardNumber);
};

export const validateCardNumber = (cardNumber: any) => {
  if (
    AmexCardnumber(cardNumber) ||
    VisaCardnumber(cardNumber) ||
    MasterCardnumber(cardNumber) ||
    DiscoverCardnumber(cardNumber) ||
    DinerClubCardnumber(cardNumber) ||
    JCBCardnumber(cardNumber)
  ) {
    return true;
  }
  return false;
};

export const validateExpiryDate = (expiryDate: string) => {
  const check = moment(moment(), 'YYYY/MM/DD');
  const month = check.format('M');
  const year = check.format('YY');
  if (
    +expiryDate.substring(3) < year ||
    (+expiryDate.substring(3) === year && +expiryDate.substring(0, 2) < month)
  ) {
    return false;
  }
  const re = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
  return re.test(expiryDate);
};

export const validateCVV = (cvv: string) => {
  const re = /^\d{3,4}$/;
  return re.test(cvv);
};
