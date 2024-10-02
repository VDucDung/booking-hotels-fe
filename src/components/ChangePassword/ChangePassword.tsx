"use client";
import { Form, Formik } from "formik";
import validationSchema from "./schema";
import { useTranslation } from "react-i18next";
import useBreakpoint from "@/hooks/useBreakpoint";
import FormikTextField from "@/components/formik/FormikTextField";
import CustomButton from "@/components/button/CustomButton";

interface ChangePasswordValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

function ChangePassword() {
  const isLargerThanSm = useBreakpoint("sm");
  const { t } = useTranslation();

  const initialValues: ChangePasswordValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const handleSubmit = (values: ChangePasswordValues) => {
    console.log("Form values:", values);
  };

  return (
    <div className="xl:p-4">
      <h2 className="text-2xl font-semibold text-dark shadow-md p-4">
        Đổi Mật Khẩu
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema(t)}
        onSubmit={handleSubmit}
      >
        {({ resetForm }) => (
          <Form>
            <div className="flex flex-col gap-6 sm:gap-y-6 gap-y-14 sm:mt-7 mt-14">
              <FormikTextField
                name="currentPassword"
                label="Mật khẩu hiện tại:"
                type="password"
                orientation={isLargerThanSm ? "horizontal" : "vertical"}
                labelWidth="200px"
                labelClassName="font-medium"
                rightIconClassName="text-gray-500"
                required
              />

              <FormikTextField
                name="newPassword"
                label="Mật khẩu mới:"
                type="password"
                orientation={isLargerThanSm ? "horizontal" : "vertical"}
                labelWidth="200px"
                labelClassName="font-medium"
                rightIconClassName="text-gray-500"
                required
              />

              <FormikTextField
                name="confirmPassword"
                label="Xác nhận mật khẩu mới:"
                type="password"
                orientation={isLargerThanSm ? "horizontal" : "vertical"}
                labelWidth="200px"
                labelClassName="font-medium"
                rightIconClassName="text-gray-500"
                required
              />
            </div>
            <div className="flex mt-10">
              <div className="flex gap-4 ml-auto">
                <CustomButton
                  type="button"
                  onClick={() => resetForm()} 
                >
                  Hủy
                </CustomButton>

                <CustomButton type="submit" className="">
                  Lưu Thay Đổi
                </CustomButton>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ChangePassword;
