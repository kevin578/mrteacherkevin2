export const months = [
  "Month",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const years = ()=> {
    let years = ["Year"];
    let year = new Date().getFullYear() - 4;
    const earliestYear = year - 120;
    for (year; year > earliestYear; year--) {
        years.push(year);
    }
    return years;
};