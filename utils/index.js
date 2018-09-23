const sortNumber = (a, b) => a.data.order - b.data.order;

const filteredAndSortedMembers = speakers => speakers.filter(({ data }) => data.is_member === 'Yes').sort(sortNumber);

export { sortNumber, filteredAndSortedMembers };
