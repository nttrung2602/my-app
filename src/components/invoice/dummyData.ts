import type { InvoiceData } from "./types";

// ================================== DUMMY INVOICE DATA ==================================

export const dummyInvoiceData: InvoiceData = {
  invoiceNumber: "302 177",
  invoiceDate: "2025-06-01",

  customer: {
    name: "Nguyễn Văn A",
  },

  paymentMethod: "Chuyển khoản ngân hàng",

  companyInfo: {
    name: "STEEL SAI GON JOINT STOCK COMPANY",
    address:
      "B2-2A, No. 01 - 104 - BTT Street, Binh Trung Tay Ward, Thu Duc City, Ho Chi Minh City",
    phone: "(+84) 931 302 177",
    taxCode: "0312345678",
    website: "www.steelsaigon.com",
    email: "hello@steelsaigon.com",
  },

  bankInfo: {
    bankName: "Vietcombank",
    accountName: "TRUONG THU NGAN",
    accountNumber: "9903 3314 02",
  },

  serviceRows: [
    {
      type: "full",
      package: "Premium Fitness Package",
      quantity: 1,
      packagePrice: 500,
      discount: 0,
      amount: 500,
    },
    {
      type: "info",
      labelEn: "No. of PT session",
      labelVi: "Số buổi PT",
      value: 10,
      unitEn: "session(s)",
      unitVi: "buổi",
    },
    {
      type: "info",
      labelEn: "No. of Massage session",
      labelVi: "Số buổi massage",
      value: 5,
      unitEn: "session(s)",
      unitVi: "buổi",
    },
    {
      type: "info",
      labelEn: "No. of Stretching session",
      labelVi: "Số buổi giãn cơ",
      value: 3,
      unitEn: "session(s)",
      unitVi: "buổi",
    },
    {
      type: "info",
      labelEn: "Membership duration",
      labelVi: "Thời hạn hội viên",
      value: 6,
      unitEn: "month(s)",
      unitVi: "tháng",
    },
    {
      type: "info",
      labelEn: "Package duration",
      labelVi: "Thời hạn gói dịch vụ",
      value: 6,
      unitEn: "month(s)",
      unitVi: "tháng",
    },
    {
      type: "info",
      labelEn: "Freeze days",
      labelVi: "Thời gian bảo lưu",
      value: 15,
      unitEn: "day(s)",
      unitVi: "ngày",
    },
  ],

  totalAmount: 50000,
};

// ================================== ADDITIONAL SAMPLE DATA ==================================

/**
 * Dữ liệu mẫu thứ 2 - Gói cơ bản
 */
export const sampleInvoiceBasic: InvoiceData = {
  invoiceNumber: "302 178",
  invoiceDate: "2025-06-15",

  customer: {
    name: "Trần Thị B",
  },

  paymentMethod: "Tiền mặt",

  companyInfo: {
    name: "STEEL SAI GON JOINT STOCK COMPANY",
    address:
      "B2-2A, No. 01 - 104 - BTT Street, Binh Trung Tay Ward, Thu Duc City, Ho Chi Minh City",
    phone: "(+84) 931 302 177",
    taxCode: "0312345678",
    website: "www.steelsaigon.com",
    email: "hello@steelsaigon.com",
  },

  bankInfo: {
    bankName: "Vietcombank",
    accountName: "TRUONG THU NGAN",
    accountNumber: "9903 3314 02",
  },

  serviceRows: [
    {
      type: "full",
      package: "Basic Fitness Package",
      quantity: 1,
      packagePrice: 200,
      discount: 10,
      amount: 180,
    },
    {
      type: "info",
      labelEn: "No. of PT session",
      labelVi: "Số buổi PT",
      value: 5,
      unitEn: "session(s)",
      unitVi: "buổi",
    },
    {
      type: "info",
      labelEn: "Membership duration",
      labelVi: "Thời hạn hội viên",
      value: 3,
      unitEn: "month(s)",
      unitVi: "tháng",
    },
  ],

  totalAmount: 180,
};

/**
 * Dữ liệu mẫu thứ 3 - Gói VIP
 */
export const sampleInvoiceVIP: InvoiceData = {
  invoiceNumber: "302 179",
  invoiceDate: "2025-07-01",

  customer: {
    name: "Lê Văn C",
  },

  paymentMethod: "Thẻ tín dụng",

  companyInfo: {
    name: "STEEL SAI GON JOINT STOCK COMPANY",
    address:
      "B2-2A, No. 01 - 104 - BTT Street, Binh Trung Tay Ward, Thu Duc City, Ho Chi Minh City",
    phone: "(+84) 931 302 177",
    taxCode: "0312345678",
    website: "www.steelsaigon.com",
    email: "hello@steelsaigon.com",
  },

  bankInfo: {
    bankName: "Vietcombank",
    accountName: "TRUONG THU NGAN",
    accountNumber: "9903 3314 02",
  },

  serviceRows: [
    {
      type: "full",
      package: "VIP Fitness Package",
      quantity: 1,
      packagePrice: 1000,
      discount: 15,
      amount: 850,
    },
    {
      type: "info",
      labelEn: "No. of PT session",
      labelVi: "Số buổi PT",
      value: 30,
      unitEn: "session(s)",
      unitVi: "buổi",
    },
    {
      type: "info",
      labelEn: "No. of Massage session",
      labelVi: "Số buổi massage",
      value: 15,
      unitEn: "session(s)",
      unitVi: "buổi",
    },
    {
      type: "info",
      labelEn: "No. of Stretching session",
      labelVi: "Số buổi giãn cơ",
      value: 10,
      unitEn: "session(s)",
      unitVi: "buổi",
    },
    {
      type: "info",
      labelEn: "Membership duration",
      labelVi: "Thời hạn hội viên",
      value: 12,
      unitEn: "month(s)",
      unitVi: "tháng",
    },
    {
      type: "info",
      labelEn: "Package duration",
      labelVi: "Thời hạn gói dịch vụ",
      value: 12,
      unitEn: "month(s)",
      unitVi: "tháng",
    },
    {
      type: "info",
      labelEn: "Freeze days",
      labelVi: "Thời gian bảo lưu",
      value: 30,
      unitEn: "day(s)",
      unitVi: "ngày",
    },
  ],

  totalAmount: 850,
};
