import { Font, StyleSheet } from "@react-pdf/renderer";
import type { Style } from "@react-pdf/types";
import type { FlexDirection, AlignItems } from "@react-pdf/stylesheet";

// ================================== FONT REGISTRATION ==================================

Font.register({
  family: "Manrope",
  fonts: [
    { src: "/src/fonts/Manrope-Regular.ttf", fontWeight: "normal" },
    { src: "/src/fonts/Manrope-Bold.ttf", fontWeight: "bold" },
  ],
});

// ================================== DESIGN TOKENS ==================================

/**
 * Bảng màu sử dụng trong invoice
 */
export const colors = {
  // Neutral colors
  black: "#000000",
  white: "#FFFFFF",
  
  // Gray scale
  gray: {
    50: "#f7f8f6",
    100: "#e8ece5",
    400: "#999999",
    600: "#666666",
    900: "#000000",
  },
  
  // Brand colors
  brand: {
    mossGreen: "#6f7a6d",
    darkGreen: "#2E462E",
    accent: "#0055cc",
  },
} as const;

/**
 * Typography scale
 */
export const typography = {
  fontSize: {
    xs: 5.9,
    sm: 6,
    md: 6.4,
    lg: 7,
    xl: 7.6,
    "2xl": 7.7,
    "3xl": 8,
    title: 12.8,
  },
} as const;

/**
 * Spacing scale
 */
export const spacingScale = {
  0: 0,
  1: 2,
  2: 4,
  3: 5,
  4: 10,
  5: 15,
  6: 20,
  7: 30,
  8: 60,
  9: 70,
} as const;

// ================================== STYLE UTILITIES ==================================

/**
 * Tạo style property từ key và value
 */
const createStyleProp = (key: string) => (value: unknown): Style => ({ [key]: value } as Style);

/**
 * Flexbox utilities
 */
export const flexbox = {
  alignItems: createStyleProp("alignItems"),
  flex: createStyleProp("flex"),
  flexDirection: createStyleProp("flexDirection"),
  justifyContent: createStyleProp("justifyContent"),
  rowGap: createStyleProp("rowGap"),
  columnGap: createStyleProp("columnGap"),
} as const;

/**
 * Dimension utilities
 */
export const dimension = {
  width: createStyleProp("width"),
  height: createStyleProp("height"),
  minHeight: createStyleProp("minHeight"),
  maxWidth: createStyleProp("maxWidth"),
} as const;

/**
 * Text utilities
 */
export const text = {
  fontSize: createStyleProp("fontSize"),
  fontStyle: createStyleProp("fontStyle"),
  fontWeight: createStyleProp("fontWeight"),
  textAlign: createStyleProp("textAlign"),
  color: createStyleProp("color"),
  lineHeight: createStyleProp("lineHeight"),
} as const;

/**
 * Spacing utilities
 */
export const spacing = {
  // Margin
  margin: createStyleProp("margin"),
  marginTop: createStyleProp("marginTop"),
  marginRight: createStyleProp("marginRight"),
  marginBottom: createStyleProp("marginBottom"),
  marginLeft: createStyleProp("marginLeft"),
  marginHorizontal: createStyleProp("marginHorizontal"),
  marginVertical: createStyleProp("marginVertical"),
  // Padding
  padding: createStyleProp("padding"),
  paddingTop: createStyleProp("paddingTop"),
  paddingRight: createStyleProp("paddingRight"),
  paddingBottom: createStyleProp("paddingBottom"),
  paddingLeft: createStyleProp("paddingLeft"),
  paddingHorizontal: createStyleProp("paddingHorizontal"),
  paddingVertical: createStyleProp("paddingVertical"),
} as const;

/**
 * Helper function để tạo flex row với gap và alignment
 */
export const flexRowCenterGap = (
  gap: number,
  flexDirection: FlexDirection = "row",
  alignItems: AlignItems = "center"
): Style => ({
  flexDirection,
  alignItems,
  columnGap: gap,
});

// ================================== TABLE COLUMN STYLES ==================================

/**
 * Column widths cho bảng dịch vụ
 */
export const columnStyles: Style[] = [
  { width: "35%", textAlign: "left" },    // Service Package
  { width: "15%", textAlign: "center" },  // Quantity
  { width: "29%", textAlign: "center" },  // Package Price
  { width: "8%", textAlign: "center" },   // Discount
  { width: "13%", textAlign: "center" },  // Amount
];

// ================================== BASE STYLES ==================================

export const styles = StyleSheet.create({
  // === TEXT COLORS ===
  textPrimary: { color: colors.black },
  textSecondary: { color: colors.gray[600] },
  textGray: { color: colors.gray[400] },
  textDarkGray: { color: colors.gray[900] },
  textMossGreen: { color: colors.brand.mossGreen },
  textAccent: { color: colors.brand.accent },

  // === PAGE LAYOUT ===
  page: {
    fontFamily: "Manrope",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    height: "100%",
  },
  
  outerWrapper: {
    padding: spacingScale[7],
  },
  
  innerWrapper: {
    position: "relative",
    borderWidth: 1,
    borderColor: colors.black,
    paddingHorizontal: spacingScale[7],
    paddingVertical: spacingScale[4],
    minHeight: 200,
  },
});

// ================================== HEADER STYLES ==================================

export const header = StyleSheet.create({
  // === TEXT ===
  normalText: {
    fontSize: typography.fontSize.xs,
  },
  boldText: {
    fontSize: typography.fontSize.md,
    fontWeight: "bold",
  },
  
  // === LAYOUT ===
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacingScale[4],
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
  
  // === ELEMENTS ===
  logo: {
    width: 50,
    height: 20,
    marginBottom: spacingScale[3],
  },
  addressText: {
    width: 140,
  },
});

// ================================== CONTENT STYLES ==================================

export const content = StyleSheet.create({
  // === TEXT ===
  normalText: {
    fontSize: typography.fontSize["2xl"],
  },
  boldText: {
    fontSize: typography.fontSize.xl,
    fontWeight: "bold",
  },
  normalTextTableHead: {
    fontSize: typography.fontSize.sm,
  },
  boldTextTableHead: {
    fontSize: typography.fontSize.xs,
    fontWeight: "bold",
  },

  // === INVOICE NUMBER ===
  absoluteWrapper: {
    position: "relative",
    height: spacingScale[8],
  },
  invoiceNumber: {
    position: "absolute",
    top: spacingScale[7],
    left: 270,
    fontSize: typography.fontSize["3xl"],
  },

  // === TABLE ===
  tableWrapper: {
    marginTop: spacingScale[3],
  },
  tableRow: {
    flexDirection: "row",
  },
  tableHeaderRow: {
    backgroundColor: colors.gray[100],
    borderBottomWidth: 1,
    borderBottomColor: colors.brand.darkGreen,
  },
  tableDataRow: {
    fontSize: typography.fontSize["2xl"],
  },
  tableCol: {
    paddingVertical: spacingScale[1],
    paddingHorizontal: spacingScale[2],
    textAlign: "center",
  },
});

// ================================== FOOTER STYLES ==================================

export const footer = StyleSheet.create({
  // === TEXT ===
  normalText: {
    fontSize: 6.6,
  },
  boldText: {
    fontSize: typography.fontSize.md,
    fontWeight: "bold",
  },

  // === LAYOUT ===
  footer: {
    marginBottom: spacingScale[4],
    paddingHorizontal: spacingScale[3],
    paddingTop: spacingScale[4],
    paddingBottom: spacingScale[6],
  },
  leftColumn: {
    width: "60%",
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: spacingScale[3],
  },
  rightColumn: {
    width: "40%",
    flexDirection: "column",
  },

  // === ELEMENTS ===
  qrImage: {
    width: 60,
    height: 60,
    marginBottom: spacingScale[3],
  },
});
