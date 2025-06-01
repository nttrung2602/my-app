import { Font, StyleSheet } from "@react-pdf/renderer";
import type { Style } from "@react-pdf/types";
import type { FlexDirection, AlignItems } from "@react-pdf/stylesheet";
// ================================== REGISTER FONT ==================================
Font.register({
  family: "Manrope",
  fonts: [
    { src: "/src/fonts/Manrope-Regular.ttf", fontWeight: "normal" },
    { src: "/src/fonts/Manrope-Bold.ttf", fontWeight: "bold" },
  ],
});

export const columnStyles: Style[] = [
  { width: "35%", textAlign: "left" }, // Service Package column
  { width: "15%", textAlign: "center" }, // Quantity column
  { width: "29%", textAlign: "center" }, // Package Price column
  { width: "8%", textAlign: "center" }, // Discount column
  { width: "13%", textAlign: "center" }, // Amount column
];

export const flexRowCenterGap = (
  gap: number,
  flexDirection: FlexDirection = "row",
  alignItems: AlignItems = "center"
): Style => ({
  flexDirection: flexDirection,
  alignItems: alignItems,
  columnGap: gap,
});

// Hàm tạo thuộc tính style từ key và value
const styleProp = (key: any) => (value: any) => ({ [key]: value });

// Flexbox
export const flexbox = {
  alignItems: styleProp("alignItems"),
  flex: styleProp("flex"),
  flexDirection: styleProp("flexDirection"),
  justifyContent: styleProp("justifyContent"),
  rowGap: styleProp("rowGap"),
  columnGap: styleProp("columnGap"),
};

// Dimension
export const dimension = {
  width: styleProp("width"),
  height: styleProp("height"),
};

// Text
export const text = {
  fontSize: styleProp("fontSize"),
  fontStyle: styleProp("fontStyle"),
  fontWeight: styleProp("fontWeight"),
  textAlign: styleProp("textAlign"),
};

// Spacing
export const spacing = {
  margin: styleProp("margin"),
  marginTop: styleProp("marginTop"),
  marginRight: styleProp("marginRight"),
  marginBottom: styleProp("marginBottom"),
  marginLeft: styleProp("marginLeft"),
  padding: styleProp("padding"),
  paddingTop: styleProp("paddingTop"),
  paddingRight: styleProp("paddingRight"),
  paddingBottom: styleProp("paddingBottom"),
  paddingLeft: styleProp("paddingLeft"),
};

const colors = {
  primary: "#000000",
  secondary: "#666666",
  gray: "#999999",
  accent: "#0055cc",
  darkGray: "##000000",
  mossGreen: "#6f7a6d", // xanh rêu
};

export const styles = StyleSheet.create({
  // ====================================== GENERAL ======================================
  // + Colors (nếu cần)
  textPrimary: { color: colors.primary },
  textSecondary: { color: colors.secondary },
  textAccent: { color: colors.accent },
  textGray: { color: colors.gray },
  textDarkGray: { color: colors.darkGray },
  textMossGreen: { color: colors.mossGreen },

  // ====================================== LAYOUT ======================================
  page: {
    fontFamily: "Manrope",
    padding: 0,
    display: "flex",
    justifyContent: "center", // căn giữa chiều dọc
    height: "100%", // cần thiết để justifyContent hoạt động
  },
  outerWrapper: {
    padding: 30, // khoảng cách từ mép trang đến viền
  },
  innerWrapper: {
    position: "relative",
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 30,
    paddingVertical: 10,
    minHeight: 200,
  },
});

// ====================================== CONTENT ======================================
export const content = StyleSheet.create({
  normalTextTableHead: {
    fontSize: 6,
  },
  boldTextTableHead: {
    fontSize: 5.9,
    fontWeight: "bold",
  },
  normalText: {
    fontSize: 7.7,
  },
  boldText: {
    fontSize: 7.6,
    fontWeight: "bold",
  },
  invoiceNumber: {
    position: "absolute",
    top: 30,
    left: 270,
    fontSize: 8,
  },

  absoluteWrapper: {
    position: "relative",
    height: 60, // chiếm không gian để tránh đè nội dung bên dưới
  },

  // table
  tableWrapper: {
    marginTop: 5,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableHeaderRow: {
    backgroundColor: "#e8ece5", // xanh rêu
    borderBottomWidth: 1,
    borderBottomColor: "#2E462E",
  },
  tableDataRow: {
    fontSize: 7.7,
  },
  tableCol: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    textAlign: "center",
  },
  // end-table
});

// ====================================== HEADER ======================================
export const header = StyleSheet.create({
  normalText: {
    fontSize: 5.9,
  },
  boldText: {
    fontSize: 6.4,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  leftColumn: {
    width: "60%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  rightColumn: {
    width: "40%",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  logo: {
    width: 50,
    height: 20,
    marginBottom: 5,
  },
  // Address
  addressText: {
    width: 140,
  },
});

// ====================================== FOOTER ======================================
export const footer = StyleSheet.create({
  footer: {
    marginBottom: 10,
    paddingHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 20,
  },
  normalText: {
    fontSize: 6.6,
  },
  boldText: {
    fontSize: 6.4,
    fontWeight: "bold",
  },
  leftColumn: {
    width: "60%",
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 5,
  },
  rightColumn: {
    width: "40%",
    flexDirection: "column",
  },
  qrImage: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
});
