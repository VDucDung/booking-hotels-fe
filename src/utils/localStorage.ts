/* eslint-disable @typescript-eslint/no-explicit-any */
export const getLocalStorageItem = <T>(itemName: string): T | null => {
  try {
    const item = JSON.parse(localStorage.getItem(itemName) as string);
    return item as T;
  } catch (error) {
    console.error(`Lỗi khi lấy thông tin từ localStorage cho item ${itemName}:`, error);
    return null;
  }
};

export const updateFieldInLocalStorage = (fieldName: any, fieldValueName: any, newValue: any): void => {
  try {
    const storedData = JSON.parse(localStorage.getItem(fieldName) as string);
    
    if (!storedData || typeof storedData !== "object" || !storedData.hasOwnProperty(fieldValueName)) {
      console.error(`Đối tượng ${fieldName} không hợp lệ hoặc thiếu trường "${fieldValueName}"`);
      return;
    }

    storedData[fieldValueName] = newValue;

    localStorage.setItem(fieldName, JSON.stringify(storedData));
  } catch (error) {
    console.error(`Lỗi khi cập nhật giá trị ${fieldValueName} của ${fieldName} trong localStorage:`, error);
  }
};

export const addOrUpdateFieldInLocalStorage = (fieldName: any, newField: any, newValue: any): void => {
  try {
    let storedData: Record<string, any> = {};

    if (fieldName) {
      storedData = JSON.parse(localStorage.getItem(fieldName) as string) || {};

      if (newField) {
        storedData[newField] = newValue;
      } else {
        storedData[newField] = newValue;
      }

      localStorage.setItem(fieldName, JSON.stringify(storedData));
    } else {
      localStorage.setItem(newField as string, JSON.stringify(newValue));
    }
  } catch (error) {
    console.error(`Lỗi khi thêm hoặc cập nhật trường trong localStorage:`, error);
  }
};
