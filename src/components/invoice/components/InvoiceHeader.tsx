import { Image, Text, View } from "@react-pdf/renderer";
import { header, spacing, text, styles } from "../style";
import type { CompanyInfo } from "../types";

interface InvoiceHeaderProps {
  logo: string;
  companyInfo: CompanyInfo;
}

/**
 * Component hiển thị phần header của hóa đơn
 * Bao gồm logo, tên công ty, địa chỉ và thông tin liên hệ
 */
export default function InvoiceHeader({ logo, companyInfo }: InvoiceHeaderProps) {
  return (
    <View style={header.header}>
      {/* Cột trái - Logo & Thông tin công ty */}
      <View style={header.leftColumn}>
        <Image src={logo} style={header.logo} />
        <Text style={[header.boldText, spacing.marginBottom(2)]}>
          {companyInfo.name}
        </Text>
        <Text
          style={[
            header.addressText,
            header.normalText,
            spacing.marginBottom(2),
          ]}
        >
          {companyInfo.address}
        </Text>
      </View>

      {/* Cột phải - Thông tin liên hệ */}
      <View style={header.rightColumn}>
        {companyInfo.website && (
          <Text
            style={[
              header.normalText,
              text.fontWeight("bold"),
              styles.textDarkGray,
              spacing.marginTop(2),
              spacing.marginBottom(2),
            ]}
          >
            {companyInfo.website}
          </Text>
        )}
        <Text
          style={[
            header.normalText,
            spacing.marginBottom(2),
            spacing.marginTop(2),
          ]}
        >
          {companyInfo.phone}
        </Text>
        {companyInfo.email && (
          <Text style={[header.normalText, spacing.marginTop(2)]}>
            {companyInfo.email}
          </Text>
        )}
      </View>
    </View>
  );
}
