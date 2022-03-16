export const PLATFORMS = {
  IOS: 'ios',
  ANDROID: 'android',
};

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'accessToken',
  USER_TYPE: 'userType',
  EMAIL: 'email',
  PHONE_NUMBER: 'phoneNumber',
  PREV_SCREEN: 'prevScreen',
  IS_PASSCODE: 'isPasscode',
  FETCHED_CODE: 'fetchedCode',
  PUSH_NOTIFICATION_STATE: 'pushEnabled',
  VERIFY_IDENTITY_COMPLETED: 'verifyIdentityCompleted',
  TOPPED_UP: 'toppedUp',
  APPSFLYER_DATA: 'appsflyerData',
  FIRST_TOP_UP: 'firstTopUp',
};

export const PRICE = {
  CURRENCY_SYMBOL: '$',
};

export const PUSH_NOTIFICATION_TYPES = {
  HELPER_CONNECTED: 'helper_connected',
  KYC_COMPLETE: 'kyc_complete',
  SUBSCRIPTION_PAYMENT_FAILED: 'subscription_payment_failed',
  EXPENSE_CARD_TRANSACTION: 'expense_card_transaction',
  LOW_BALANCE_EMPLOYER: 'low_balance_employer',
  LOW_BALANCE_HELPER: 'low_balance_helper',
  RAPYD_BLOCKED_CARD: 'rapyd_blocked_card',
  EXPENSE_CARD_TOP_UP: 'expense_card_top_up',
  WEEKLY_SPENDING: 'weekly_spending',
  KYC_REMINDER: 'kyc-reminder',
  TOP_UP_REMINDER: 'top-up-reminder',
  REVERSED_CARD_TRANSACTION: 'reversed-card-transaction',
  REVERSED_PAYMENT: 'reversed-payment',
};

export const WEBHOOK_TYPES = {
  NO_DOCUMENT_UPLOADED: 'NO_DOCUMENT_UPLOADED',
  NOT_READABLE_DOCUMENT: 'NOT_READABLE_DOCUMENT',
  REJECTED: 'REJECTED',
  UNSUPPORTED_COUNTRY: 'UNSUPPORTED_COUNTRY',
  UNSUPPORTED_TYPE: 'UNSUPPORTED_TYPE',
  APPROVED: 'APPROVED',
  NOT_APPROVED: 'NOT_APPROVED',
  ERROR_DOCUMENT_VERIFICATION: 'ERROR_DOCUMENT_VERIFICATION',
};

export const CARD_STATUSES = {
  PROCESSING: 'processing',
  ARRIVING: 'arriving',
  ACTIVE: 'active',
  FROZEN: 'frozen',
  DELETED: 'deleted',
};

export const TOP_UP_FAILED_REASONS = {
  CREDIT_CARD: 'CREDIT_CARD',
  OTHER: 'OTHER',
};

export const PAYMENT_METHOD_TYPES = {
  SUBSCRIPTION: 'subscription',
  TOP_UP: 'top_up',
};

export const CODE_TYPES = {
  SIGN_UP: 'sign_up',
  RESET_PASSCODE: 'reset_passcode',
  INVITE_HELPER: 'invite_helper',
  ASSIGN_EMPLOYERS: 'assign_employers',
  SUBSCRIPTION_DISCOUNTS: 'subscription_discounts',
  GET_STARTED: 'get_started',
};
