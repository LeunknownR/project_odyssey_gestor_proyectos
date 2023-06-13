export const dayMonthFormat = (milliseconds: number): string => {
    const date = new Date(milliseconds);
    const day = date.getDate();
    const month = date.toLocaleString('es', { month: 'long' });
  
    return `${day} ${month}`;
  };