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

export const updateFieldInLocalStorage = (fieldName: string, fieldValueName: string, newValue: any): void => {
  try {
    // Lấy đối tượng từ localStorage
    const storedData = JSON.parse(localStorage.getItem(fieldName) as string);
    
    // Kiểm tra xem đối tượng có tồn tại và có chứa trường fieldValueName không
    if (!storedData || typeof storedData !== "object" || !storedData.hasOwnProperty(fieldValueName)) {
      console.error(`Đối tượng ${fieldName} không hợp lệ hoặc thiếu trường "${fieldValueName}"`);
      return;
    }

    // Cập nhật giá trị cho trường fieldValueName
    storedData[fieldValueName] = newValue;

    // Lưu lại đối tượng đã được cập nhật vào localStorage
    localStorage.setItem(fieldName, JSON.stringify(storedData));
  } catch (error) {
    console.error(`Lỗi khi cập nhật giá trị ${fieldValueName} của ${fieldName} trong localStorage:`, error);
  }
};

export const addOrUpdateFieldInLocalStorage = (fieldName: string, newField: string | null, newValue: any): void => {
  try {
    let storedData: Record<string, any> = {};

    if (fieldName) {
      // Lấy đối tượng từ localStorage hoặc tạo mới nếu chưa tồn tại
      storedData = JSON.parse(localStorage.getItem(fieldName) as string) || {};

      if (newField) {
        // Thêm hoặc cập nhật trường mới với giá trị được cung cấp
        storedData[newField] = newValue;
      } else {
        // Tạo một item mới với tên là newField và giá trị là newValue
        storedData[newField] = newValue;
      }

      // Lưu lại đối tượng đã được cập nhật vào localStorage
      localStorage.setItem(fieldName, JSON.stringify(storedData));
    } else {
      // Tạo một item mới với tên là newField và giá trị là newValue
      localStorage.setItem(newField as string, JSON.stringify(newValue));
    }
  } catch (error) {
    console.error(`Lỗi khi thêm hoặc cập nhật trường trong localStorage:`, error);
  }
};
