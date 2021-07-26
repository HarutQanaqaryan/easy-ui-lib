export const getStyle = (placeholder, inputValue, variant) => placeholder || inputValue ? {
  transform: isOutLined(variant),
  fontSize: "0.90em"
} : {};
export const isOutLined = variant => variant === "outlined" ? "translateY(-4.3em)" : "translateY(-3.3em)";
export const getClass = (variant, error) => error ? `${variant} error` : `${variant}`;
export const getHelperClass = error => error ? "helper-text error" : "helper-text";