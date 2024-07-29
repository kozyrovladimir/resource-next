export const normaliseSubscriptionDate = (dateTimeString: string) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const date = new Date(dateTimeString);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const month = months[monthIndex];

  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
}
