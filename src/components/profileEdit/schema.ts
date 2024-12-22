import * as Yup from "yup";

interface FormValues {
  fullname: string;
  phone: string;
  dateOfBirth: Date | string | null;
}
const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
const validationSchema = (t: (key: string) => string): Yup.Schema<FormValues> => {
  return Yup.object().shape({
    fullname: Yup.string().required(t("reqquired.err01")),
    phone: Yup.string()
    .matches(phoneRegex, 'Số điện thoại không đúng')
    .required(t("reqquired.err02")),
    dateOfBirth: Yup.string().required(t("reqquired.err03")),
  });
};

export default validationSchema;
