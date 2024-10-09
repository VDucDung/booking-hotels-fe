import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  search: Yup.string().nullable(),
  minPrice: Yup.number()
    .positive("Giá tối thiểu phải là số dương")
    .nullable(),
  maxPrice: Yup.number()
    .positive("Giá tối đa phải là số dương")
    .nullable(),
  brand: Yup.string().nullable(),
  rating: Yup.number()
    .min(1, "Đánh giá ít nhất là 1 sao")
    .max(5, "Đánh giá tối đa là 5 sao")
    .nullable(),
});

export default validationSchema;