import { Image, Text, View } from "@react-pdf/renderer";
import { footer, flexbox, spacing, styles, dimension } from "../style";
import type { BankInfo } from "../types";

interface InvoiceFooterProps {
  qrImage: string;
  bankInfo: BankInfo;
}

/**
 * Component hiển thị phần footer của hóa đơn
 * Bao gồm QR code, thông tin chuyển khoản và các chính sách
 */
export default function InvoiceFooter({ qrImage, bankInfo }: InvoiceFooterProps) {
  return (
    <View style={[footer.footer]}>
      <View
        style={[
          flexbox.flexDirection("row"),
          flexbox.justifyContent("space-between"),
        ]}
      >
        {/* Cột trái - QR & Thông tin ngân hàng */}
        <View style={footer.leftColumn}>
          <Image src={qrImage} style={footer.qrImage} />
          <View style={[flexbox.flexDirection("column"), flexbox.rowGap(5)]}>
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
                <Text style={[footer.boldText]}>{bankInfo.bankName}</Text>
              </Text>
              <Text style={[footer.boldText]}>{bankInfo.accountName}</Text>
              <Text style={[footer.boldText]}>{bankInfo.accountNumber}</Text>
            </View>
          </View>
        </View>

        {/* Cột phải - Chính sách */}
        <View style={footer.rightColumn}>
          <PolicyItem
            number={1}
            titleEn="If you need the VAT invoice within 14 days of payment, please contact our Customer Services department for assistance."
            titleVi="Trong vòng 14 ngày kể từ ngày thanh toán, nếu Quý Khách Hàng có nhu cầu xuất hóa đơn doanh nghiệp, vui lòng liên hệ bộ phận Chăm Sóc Khách Hàng để được hỗ trợ."
          />
          <PolicyItem
            number={2}
            titleEn="No refund policy."
            titleVi="Không áp dụng hoàn trả theo chính sách của STEEL."
          />
        </View>
      </View>
    </View>
  );
}

// ================================== SUB COMPONENTS ==================================

interface PolicyItemProps {
  number: number;
  titleEn: string;
  titleVi: string;
}

/**
 * Component hiển thị một mục chính sách
 */
function PolicyItem({ number, titleEn, titleVi }: PolicyItemProps) {
  return (
    <View>
      <Text
        style={[
          footer.boldText,
          spacing.marginTop(2),
          styles.textDarkGray,
          dimension.width("80%"),
        ]}
      >
        {number}. {titleEn}
      </Text>
      <Text style={[footer.normalText]}>{titleVi}</Text>
    </View>
  );
}
