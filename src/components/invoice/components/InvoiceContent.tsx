import { Text, View } from "@react-pdf/renderer";
import {
  content,
  spacing,
  text,
  styles,
  flexRowCenterGap,
  columnStyles,
  flexbox,
} from "../style";
import type { ServiceRow, FullServiceRow, InfoServiceRow } from "../types";

interface InvoiceContentProps {
  invoiceNumber: string;
  invoiceDate: string;
  customerName: string;
  paymentMethod: string;
  serviceRows: ServiceRow[];
  totalAmount: number;
}

/**
 * Component hiển thị phần nội dung chính của hóa đơn
 * Bao gồm tiêu đề, thông tin khách hàng, bảng dịch vụ và tổng tiền
 */
export default function InvoiceContent({
  invoiceNumber,
  invoiceDate,
  customerName,
  paymentMethod,
  serviceRows,
  totalAmount,
}: InvoiceContentProps) {
  return (
    <View style={[spacing.paddingBottom(70), { borderBottom: 1 }]}>
      {/* Tiêu đề */}
      <InvoiceTitle />

      {/* Số hóa đơn */}
      <InvoiceNumber invoiceNumber={invoiceNumber} />

      {/* Thông tin khách hàng */}
      <CustomerInfo
        invoiceDate={invoiceDate}
        customerName={customerName}
        paymentMethod={paymentMethod}
      />

      {/* Bảng thông tin dịch vụ */}
      <ServiceTable serviceRows={serviceRows} totalAmount={totalAmount} />
    </View>
  );
}

// ================================== SUB COMPONENTS ==================================

/**
 * Tiêu đề hóa đơn
 */
function InvoiceTitle() {
  return (
    <Text
      style={[
        text.textAlign("center"),
        text.fontSize(12.8),
        text.fontWeight("bold"),
        styles.textMossGreen,
        spacing.marginBottom(2),
        spacing.marginTop(2),
      ]}
    >
      SERVICE INVOICE | HÓA ĐƠN DỊCH VỤ
    </Text>
  );
}

/**
 * Số hóa đơn (hiển thị với position absolute)
 */
function InvoiceNumber({ invoiceNumber }: { invoiceNumber: string }) {
  return (
    <View style={content.absoluteWrapper}>
      <View style={[content.invoiceNumber, flexRowCenterGap(15)]}>
        <View style={[content.normalText, flexRowCenterGap(2)]}>
          <Text style={[content.boldText]}>Invoice No.</Text>
          <Text>|</Text>
          <Text>Hóa đơn số:</Text>
        </View>
        <Text style={[text.fontSize(7.6)]}>{invoiceNumber}</Text>
      </View>
    </View>
  );
}

/**
 * Thông tin khách hàng
 */
interface CustomerInfoProps {
  invoiceDate: string;
  customerName: string;
  paymentMethod: string;
}

function CustomerInfo({
  invoiceDate,
  customerName,
  paymentMethod,
}: CustomerInfoProps) {
  return (
    <View style={spacing.marginBottom(10)}>
      {/* Dòng Date */}
      <View style={flexRowCenterGap(63)}>
        <Text style={[content.boldText]}>Date | Ngày mua hàng:</Text>
        <Text style={content.normalText}>{invoiceDate}</Text>
      </View>

      {/* Dòng Customer's Name */}
      <View style={flexRowCenterGap(80)}>
        <View>
          <Text style={[content.boldText]}>Customer's Name</Text>
          <Text style={[content.normalText]}>Người mua hàng:</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Text style={text.fontSize(7.6)}>{customerName}</Text>
        </View>
      </View>

      {/* Dòng Payment Method */}
      <View style={flexRowCenterGap(57)}>
        <View>
          <Text style={[content.boldText]}>Payment Method</Text>
          <Text style={content.normalText}>Phương thức thanh toán:</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Text style={text.fontSize(7.6)}>{paymentMethod}</Text>
        </View>
      </View>
    </View>
  );
}

/**
 * Bảng dịch vụ
 */
interface ServiceTableProps {
  serviceRows: ServiceRow[];
  totalAmount: number;
}

function ServiceTable({ serviceRows, totalAmount }: ServiceTableProps) {
  return (
    <View style={content.tableWrapper}>
      {/* Header row */}
      <TableHeader />

      {/* Các dòng dữ liệu */}
      <View style={{ backgroundColor: "#f7f8f6", paddingBottom: 30 }}>
        {serviceRows.map((row, index) => (
          <TableRow key={index} row={row} />
        ))}
      </View>

      {/* Tổng thanh toán */}
      <TotalAmount totalAmount={totalAmount} />

      {/* Chữ ký khách hàng */}
      <ClientSignature />
    </View>
  );
}

/**
 * Header của bảng dịch vụ
 */
function TableHeader() {
  const headers = [
    { en: "Service Package", vi: "Gói dịch vụ" },
    { en: "Quantity", vi: "Số lượng" },
    { en: "Package Price", vi: "Giá gói" },
    { en: "Discount", vi: "Giảm giá" },
    { en: "Amount", vi: "Thành tiền" },
  ];

  return (
    <View style={[content.tableRow, content.tableHeaderRow]}>
      {headers.map((header, index) => (
        <View key={index} style={[content.tableCol, columnStyles[index]]}>
          <Text style={[content.boldTextTableHead]}>{header.en}</Text>
          <Text style={[content.normalTextTableHead]}>{header.vi}</Text>
        </View>
      ))}
    </View>
  );
}

/**
 * Dòng dữ liệu trong bảng
 */
function TableRow({ row }: { row: ServiceRow }) {
  if (row.type === "full") {
    return <FullServiceRowComponent row={row} />;
  }
  return <InfoServiceRowComponent row={row} />;
}

/**
 * Dòng dịch vụ đầy đủ (gói chính)
 */
function FullServiceRowComponent({ row }: { row: FullServiceRow }) {
  return (
    <View style={[content.tableRow, content.tableDataRow]}>
      <Text style={[content.tableCol, columnStyles[0], content.boldText]}>
        {row.package}
      </Text>
      <Text style={[content.tableCol, columnStyles[1]]}>{row.quantity}</Text>
      <Text style={[content.tableCol, columnStyles[2]]}>
        ${row.packagePrice?.toFixed(2)}
      </Text>
      <Text style={[content.tableCol, columnStyles[3]]}>{row.discount}%</Text>
      <Text style={[content.tableCol, columnStyles[4]]}>
        ${row.amount?.toFixed(2)}
      </Text>
    </View>
  );
}

/**
 * Dòng thông tin phụ
 */
function InfoServiceRowComponent({ row }: { row: InfoServiceRow }) {
  return (
    <View style={[content.tableRow, content.tableDataRow]}>
      <View style={[content.tableCol, columnStyles[0]]}>
        <View style={flexRowCenterGap(2)}>
          <Text style={[content.boldText]}>{row.labelEn}</Text>
          <Text style={[content.normalText]}>|</Text>
          <Text>{row.labelVi}</Text>
        </View>
      </View>
      <Text style={[content.tableCol, columnStyles[1]]}>{row.value}</Text>
      <Text>
        {row.unitEn} | {row.unitVi}
      </Text>
    </View>
  );
}

/**
 * Tổng thanh toán
 */
function TotalAmount({ totalAmount }: { totalAmount: number }) {
  return (
    <View style={[flexbox.flexDirection("row"), spacing.marginTop(20)]}>
      {/* Tổng 4 cột đầu: 35% + 15% + 29% + 8% = 87% */}
      <View style={{ width: "87%", paddingRight: 4 }}>
        <View
          style={[flexRowCenterGap(2), flexbox.justifyContent("flex-end")]}
        >
          <Text style={[text.fontSize(7), text.fontWeight("bold")]}>
            TOTAL AMOUNT
          </Text>
          <Text style={[text.fontSize(7)]}>|</Text>
          <Text style={[text.fontSize(7.2)]}>TỔNG THANH TOÁN</Text>
        </View>
      </View>

      {/* Cột cuối: 13% */}
      <View style={{ width: "13%" }}>
        <Text
          style={[
            text.fontSize(7),
            text.fontWeight("bold"),
            text.textAlign("center"),
          ]}
        >
          ${totalAmount.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

/**
 * Chữ ký khách hàng
 */
function ClientSignature() {
  return (
    <View
      style={[
        flexbox.flexDirection("row"),
        flexbox.justifyContent("flex-end"),
        spacing.marginTop(15),
      ]}
    >
      <View style={[flexRowCenterGap(2)]}>
        <Text style={[text.fontSize(7), text.fontWeight("bold")]}>
          CLIENT SIGNATURE
        </Text>
        <Text style={[text.fontSize(7)]}>|</Text>
        <Text style={[text.fontSize(7.2)]}>CHỮ KÝ KHÁCH HÀNG</Text>
      </View>
    </View>
  );
}
