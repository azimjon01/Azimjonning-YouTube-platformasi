// AIzaSyAo0MwOOeu8_SDkgSrQAhgimCWOk6njy3Q
export const API_KEY = "AIzaSyAo0MwOOeu8_SDkgSrQAhgimCWOk6njy3Q";

export const value_converter = (value: string): string => {
  const val = Number(value);
  if (val >= 1000000) {
    return Math.floor(val / 10_00_000) + "M";
  } else if (val >= 1000) {
    return Math.floor(val / 1_000) + "K";
  } else {
    return String(val);
  }
};
