// ================================== INVOICE TYPES ==================================

/**
 * Thông tin khách hàng
 */
export interface Customer {
  name: string;
}

/**
 * Thông tin công ty
 */
export interface CompanyInfo {
  name: string;
  address: string;
  phone: string;
  taxCode: string;
  website?: string;
  email?: string;
}

/**
 * Thông tin ngân hàng
 */
export interface BankInfo {
  bankName: string;
  accountName: string;
  accountNumber: string;
}

/**
 * Dòng dịch vụ đầy đủ (gói chính)
 */
export interface FullServiceRow {
  type: "full";
  package: string;
  quantity: number;
  packagePrice: number;
  discount: number;
  amount: number;
}

/**
 * Dòng thông tin phụ (chi tiết về gói)
 */
export interface InfoServiceRow {
  type: "info";
  labelEn: string;
  labelVi: string;
  value: number;
  unitEn: string;
  unitVi: string;
}

/**
 * Union type cho các dòng dịch vụ
 */
export type ServiceRow = FullServiceRow | InfoServiceRow;

/**
 * Dữ liệu hóa đơn đầy đủ
 */
export interface InvoiceData {
  invoiceNumber: string;
  invoiceDate: string;
  customer: Customer;
  paymentMethod: string;
  companyInfo: CompanyInfo;
  bankInfo: BankInfo;
  serviceRows: ServiceRow[];
  totalAmount: number;
}
