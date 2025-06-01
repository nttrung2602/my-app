import {
  Document,
  Image,
  Page,
  PDFViewer,
  Text,
  View,
} from "@react-pdf/renderer";
import {
  styles,
  text,
  spacing,
  flexRowCenterGap,
  columnStyles,
  flexbox,
  footer,
  header,
  content,
  dimension,
} from "./style";
import logo from "../../assets/Steel.png";
import qrSteel from "../../assets/QR_steel.png";

export default function Invoice2() {
  const invoiceData = {
    invoiceNumber: "302 177",
    invoiceDate: "2025-06-01",

    customer: {
      name: "Nguyễn Văn A",
    },

    paymentMethod: "Chuyển khoản ngân hàng",

    companyInfo: {
      name: "STEEL SAI GON JOINT STOCK COMPANY",
      address: "123 Đường ABC, Quận 1, TP.HCM",
      phone: "(028) 1234 5678",
      taxCode: "0312345678",
    },
  };
  const totalAmount = 50000;
  const serviceRows = [
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
  ];

  // Create Document Component
  const InvoicePDF = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* View bao ngoài tạo khoảng cách cách mép trang */}
        <View style={styles.outerWrapper}>
          {/* View có viền, nằm bên trong tạo border */}
          <View style={styles.innerWrapper}>
            {/* SECTION 1: Tiêu đề đầu trang*/}
            <View style={header.header}>
              {/* Cột trái */}
              <View style={header.leftColumn}>
                <Image src={logo} style={header.logo} />
                <Text style={[header.boldText, spacing.marginBottom(2)]}>
                  STEEL SAI GON JOINT STOCK COMPANY
                </Text>
                <Text
                  style={[
                    header.addressText,
                    header.normalText,
                    spacing.marginBottom(2),
                  ]}
                >
                  B2-2A, No. 01 - 104 - BTT Street, Binh Trung Tay Ward, Thu Duc
                  City, Ho Chi Minh City
                </Text>
              </View>

              {/* Cột phải */}
              <View style={header.rightColumn}>
                <Text
                  style={[
                    header.normalText,
                    text.fontWeight("bold"),
                    styles.textDarkGray,
                    spacing.marginTop(2),
                    spacing.marginBottom(2),
                  ]}
                >
                  www.steelsaigon.com
                </Text>
                <Text
                  style={[
                    header.normalText,
                    spacing.marginBottom(2),
                    spacing.marginTop(2),
                  ]}
                >
                  (+84) 931 302 177
                </Text>
                <Text style={[header.normalText, spacing.marginTop(2)]}>
                  hello@steelsaigon.com
                </Text>
              </View>
            </View>

            {/* SECTION 2:  Nội dung */}
            <View style={[spacing.paddingBottom(70), { borderBottom: 1 }]}>
              {/* Tiêu đề */}
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

              {/* Số hóa đơn */}
              <View style={content.absoluteWrapper}>
                <View style={[content.invoiceNumber, flexRowCenterGap(15)]}>
                  <View style={[content.normalText, flexRowCenterGap(2)]}>
                    <Text style={[content.boldText]}>Invoice No.</Text>
                    <Text>|</Text>
                    <Text>Hóa đơn số:</Text>
                  </View>
                  <Text style={[text.fontSize(7.6)]}>302 177</Text>
                </View>
              </View>

              {/* Thông tin khách hàng */}
              <View style={spacing.marginBottom(10)}>
                {/* Dòng Date */}
                <View style={flexRowCenterGap(63)}>
                  <Text style={[content.boldText]}>Date | Ngày mua hàng:</Text>
                  <Text style={content.normalText}>
                    {invoiceData.invoiceDate}
                  </Text>
                </View>

                {/* Dòng Customer’s Name và Người mua hàng + Tên khách hàng */}
                <View style={flexRowCenterGap(80)}>
                  <View>
                    <Text style={[content.boldText]}>Customer’s Name</Text>
                    <Text style={[content.normalText]}>Người mua hàng:</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                    }}
                  >
                    <Text style={text.fontSize(7.6)}>
                      {invoiceData.customer.name}
                    </Text>
                  </View>
                </View>

                {/* Dòng Payment Method và Phương thức thanh toán + Hình thức thanh toán */}
                <View style={flexRowCenterGap(57)}>
                  <View>
                    <Text style={[content.boldText]}>Payment Method</Text>
                    <Text style={content.normalText}>
                      Phương thức thanh toán:
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                    }}
                  >
                    <Text style={text.fontSize(7.6)}>
                      {invoiceData.paymentMethod}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Bảng thông tin */}
              <View style={content.tableWrapper}>
                {/* Header row */}
                <View style={[content.tableRow, content.tableHeaderRow]}>
                  <View style={[content.tableCol, columnStyles[0]]}>
                    <Text style={[content.boldTextTableHead]}>
                      Service Package
                    </Text>
                    <Text style={[content.normalTextTableHead]}>
                      Gói dịch vụ
                    </Text>
                  </View>
                  <View style={[content.tableCol, columnStyles[1]]}>
                    <Text style={[content.boldTextTableHead]}>Quantity</Text>
                    <Text style={[content.normalTextTableHead]}>Số lượng</Text>
                  </View>
                  <View style={[content.tableCol, columnStyles[2]]}>
                    <Text style={[content.boldTextTableHead]}>
                      Package Price
                    </Text>
                    <Text style={content.normalTextTableHead}>Giá gói</Text>
                  </View>
                  <View style={[content.tableCol, columnStyles[3]]}>
                    <Text style={[content.boldTextTableHead]}>Discount</Text>
                    <Text style={[content.normalTextTableHead]}>Giảm giá</Text>
                  </View>
                  <View style={[content.tableCol, columnStyles[4]]}>
                    <Text style={[content.boldTextTableHead]}>Amount</Text>
                    <Text style={[content.normalTextTableHead]}>
                      Thành tiền
                    </Text>
                  </View>
                </View>

                {/* Các dòng dữ liệu trong bảng */}
                <View style={{ backgroundColor: "#f7f8f6", paddingBottom: 30 }}>
                  {serviceRows.map((row, index) => {
                    if (row.type === "full") {
                      return (
                        <View
                          key={index}
                          style={[content.tableRow, content.tableDataRow]}
                        >
                          <Text
                            style={[
                              content.tableCol,
                              columnStyles[0],
                              content.boldText,
                            ]}
                          >
                            {row.package}
                          </Text>
                          <Text style={[content.tableCol, columnStyles[1]]}>
                            {row.quantity}
                          </Text>
                          <Text style={[content.tableCol, columnStyles[2]]}>
                            ${row.packagePrice?.toFixed(2)}
                          </Text>
                          <Text style={[content.tableCol, columnStyles[3]]}>
                            {row.discount}%
                          </Text>
                          <Text style={[content.tableCol, columnStyles[4]]}>
                            ${row.amount?.toFixed(2)}
                          </Text>
                        </View>
                      );
                    }

                    // Dòng phụ info: chỉ 3 cột đầu
                    return (
                      <View
                        key={index}
                        style={[content.tableRow, content.tableDataRow]}
                      >
                        <View style={[content.tableCol, columnStyles[0]]}>
                          <View style={flexRowCenterGap(2)}>
                            <Text style={[content.boldText]}>
                              {row.labelEn}
                            </Text>
                            <Text style={[content.normalText]}>|</Text>
                            <Text>{row.labelVi}</Text>
                          </View>
                        </View>
                        <Text style={[content.tableCol, columnStyles[1]]}>
                          {row.value}
                        </Text>
                        <Text>
                          {row.unitEn} | {row.unitVi}
                        </Text>
                      </View>
                    );
                  })}
                </View>

                {/* Tổng thanh toán */}
                <View
                  style={[flexbox.flexDirection("row"), spacing.marginTop(20)]}
                >
                  {/* Tổng 4 cột đầu: 35% + 15% + 29% + 8% = 87% */}
                  <View style={{ width: "87%", paddingRight: 4 }}>
                    <View
                      style={[
                        flexRowCenterGap(2),
                        flexbox.justifyContent("flex-end"),
                      ]}
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

                {/* Chữ ký khách hàng */}
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
              </View>
            </View>

            {/* SECTION 3: Cuối trang */}
            <View style={[footer.footer]}>
              <View
                style={[
                  flexbox.flexDirection("row"),
                  flexbox.justifyContent("space-between"),
                ]}
              >
                {/* Cột trái */}
                <View style={footer.leftColumn}>
                  <Image src={qrSteel} style={footer.qrImage} />
                  <View
                    style={[flexbox.flexDirection("column"), flexbox.rowGap(5)]}
                  >
                    <View>
                      <Text style={[footer.boldText]}>
                        BANK TRANSFER INFORMATION
                      </Text>
                      <Text style={[footer.normalText]}>
                        THÔNG TIN CHUYỂN KHOẢN
                      </Text>
                    </View>

                    <View>
                      <Text>
                        <Text style={[footer.boldText]}>Ngân hàng/</Text>
                        <Text style={footer.normalText}>Bank name:</Text>
                        <Text style={[footer.boldText]}>Vietcombank</Text>
                      </Text>
                      <Text style={[footer.boldText]}>TRUONG THU NGAN</Text>
                      <Text style={[footer.boldText]}>9903 3314 02</Text>
                    </View>
                  </View>
                </View>

                {/* Cột phải */}
                <View style={footer.rightColumn}>
                  <View>
                    <Text
                      style={[
                        footer.boldText,
                        spacing.marginTop(2),
                        styles.textDarkGray,
                        dimension.width("80%"),
                      ]}
                    >
                      1. If you need the VAT invoice within 14 days of payment,
                      please contact our Customer Services department for
                      assistance.
                    </Text>
                    <Text style={[footer.normalText]}>
                      Trong vòng 14 ngày kể từ ngày thanh toán, nếu Quý Khách
                      Hàng có nhu cầu xuất hóa đơn doanh nghiệp, vui lòng liên
                      hệ bộ phận Chăm Sóc Khách Hàng để được hỗ trợ.
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        footer.boldText,
                        spacing.marginTop(2),
                        styles.textDarkGray,
                      ]}
                    >
                      2. No refund policy.
                    </Text>
                    <Text style={[footer.normalText]}>
                      Không áp dụng hoàn trả theo chính sách của STEEL.
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* SECTION 4: Brand */}
            <View
              style={[
                {
                  position: "absolute",
                  bottom: 10, // hoặc 0 nếu muốn sát luôn
                  left: 0,
                  right: 0,
                  textAlign: "center",
                },
              ]}
            >
              <Text style={[text.fontSize(6.4)]}>
                STEEL . Discover What’s Real
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="h-[100vh]">
      <PDFViewer width="100%" height="100%">
        <InvoicePDF />
      </PDFViewer>
    </div>
  );
}
