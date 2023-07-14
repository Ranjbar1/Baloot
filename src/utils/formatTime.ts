export default function formatTime(timeStamp: number) {
  const now = Math.floor(Date.now());
  const formatedDate = new Intl.DateTimeFormat("fa-IR");
  return formatedDate.format(now - timeStamp);
}
