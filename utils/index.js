const sortNumber = (a, b) => a.data.order - b.data.order;

const filteredAndSortedMembers = speakers => speakers.filter(({ data }) => data.is_member === 'Yes').sort(sortNumber);

const getFormatedDate = (date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const newDate = new Date(date);
  return `${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()}`;
};

const sortEvents = arr => arr.sort((a, b) => new Date(b.data.event_date) - new Date(a.data.event_date));

export {
  sortNumber, filteredAndSortedMembers, getFormatedDate, sortEvents,
};
