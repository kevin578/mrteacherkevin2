export function getDayName(date) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
}

export function getTime(date) {
    const suffix = date.getHours() > 11 ? "PM" : "AM";
    const hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
    return `${hour}:${minutes}${suffix}`;
} 

export function filterCreatedAt(createdAt) {
  const date = new Date(createdAt);
  return `${getDayName(date)}, ${date.getMonth() + 1}/${date.getDate()}, ${getTime(date)}`
}

export function getTimeWithYear(timestamp) {
  const date = new Date(timestamp);
  return `${getDayName(date)}, ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substring(2)}, ${getTime(date)}`;
}