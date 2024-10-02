import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  birthday: Date;
}

const validationSchema = (t: (key: string) => string): Yup.Schema<FormValues> => {
  return Yup.object().shape({
    name: Yup.string().required(t("nameRequired")),
    email: Yup.string()
      .email(t("invalidEmail"))
      .required(t("emailRequired")),
    phone: Yup.string().required(t("phoneRequired")),
    birthday: Yup.date().required(t("birthdayRequired")),
  });
};

export default validationSchema;
