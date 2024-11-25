export function formatDate(date: Date): string {
  date = new Date(date)
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
  const year = date.getFullYear().toString();
  
  return `${day}/${month}/${year}`;
}

export const formatDateBooking = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("vi-VN", {
    weekday: "long", 
    day: "2-digit",  
    month: "2-digit", 
    year: "numeric",  
  }).format(date);
};
