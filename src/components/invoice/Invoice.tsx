import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { styles, text } from "./style";
import { InvoiceHeader, InvoiceContent, InvoiceFooter } from "./components";
import { dummyInvoiceData } from "./dummyData";
import type { InvoiceData } from "./types";

// Assets
import logo from "../../assets/Steel.png";
import qrSteel from "../../assets/QR_steel.png";

// ================================== TYPES ==================================

interface InvoiceProps {
  data?: InvoiceData;
}

// ================================== MAIN COMPONENT ==================================

/**
 * Component chính hiển thị trang hóa đơn
 * @param data - Dữ liệu hóa đơn (mặc định sử dụng dummyInvoiceData)
 */
export default function Invoice({ data = dummyInvoiceData }: InvoiceProps) {
  return (
    <div className="h-[100vh]">
      <PDFViewer width="100%" height="100%">
        <InvoicePDF data={data} />
      </PDFViewer>
    </div>
  );
}

// ================================== PDF DOCUMENT ==================================

interface InvoicePDFProps {
  data: InvoiceData;
}

/**
 * Component tạo PDF Document cho hóa đơn
 */
function InvoicePDF({ data }: InvoicePDFProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* View bao ngoài tạo khoảng cách cách mép trang */}
        <View style={styles.outerWrapper}>
          {/* View có viền, nằm bên trong tạo border */}
          <View style={styles.innerWrapper}>
            {/* SECTION 1: Header */}
            <InvoiceHeader logo={logo} companyInfo={data.companyInfo} />

            {/* SECTION 2: Nội dung chính */}
            <InvoiceContent
              invoiceNumber={data.invoiceNumber}
              invoiceDate={data.invoiceDate}
              customerName={data.customer.name}
              paymentMethod={data.paymentMethod}
              serviceRows={data.serviceRows}
              totalAmount={data.totalAmount}
            />

            {/* SECTION 3: Footer */}
            <InvoiceFooter qrImage={qrSteel} bankInfo={data.bankInfo} />

            {/* SECTION 4: Brand */}
            <BrandFooter />
          </View>
        </View>
      </Page>
    </Document>
  );
}

// ================================== SUB COMPONENTS ==================================

/**
 * Component hiển thị brand ở cuối trang
 */
function BrandFooter() {
  return (
    <View
      style={[
        {
          position: "absolute",
          bottom: 10,
          left: 0,
          right: 0,
          textAlign: "center",
        },
      ]}
    >
      <Text style={[text.fontSize(6.4)]}>STEEL . Discover What's Real</Text>
    </View>
  );
}
