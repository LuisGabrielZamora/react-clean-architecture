export const handleStatusColor = (status: string) => {
  switch (status) {
    case 'Pendiente':
      return 'yellow';
    case 'Concluida':
      return 'green';
    case 'Parcialmente':
      return 'geekblue';
    default:
      return 'geekblue';
  }
};
