/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Form, Formik, FormikHelpers } from "formik";
import useBreakpoint from "@/hooks/useBreakpoint";
import FormikTextField from "@/components/formik/FormikTextField";
import CustomButton from "@/components/button/CustomButton";
import { ChangePasswordValues } from "@/interfaces";
import { changePassword } from "@/api/userService";
import { useClientTranslation } from "@/i18n/client";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/redux";
import validationSchema from "./schema";

function ChangePassword() {
  const isLargerThanSm = useBreakpoint("sm");
  const { t } = useClientTranslation('Common');
  const dispatch = useAppDispatch();

  const initialValues: ChangePasswordValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const handleSubmit = async (
    values: ChangePasswordValues,
    { setSubmitting }: FormikHelpers<ChangePasswordValues>
  ) => {
    try {
      if(values.newPassword !== values.confirmPassword) {
        toast.error(t("toast.errorConfirmPassword"));
        return;
      }
      const userData: ChangePasswordValues = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      }
      await dispatch(changePassword(userData)).then(({ payload }: { payload: any }) => {
        if (payload.statusCode === 200) {
          toast.success(t("toast.successUpdate"));
        }
      })
    } catch (error) {
      console.error("Lỗi khi cập nhật người dùng:", error);
      toast.error(t("toast.errorUpdate")); 
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="xl:p-4">
      <h2 className="text-2xl font-semibold text-dark shadow-md p-4">
        {t("profile.passwordChange")}
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
                name="oldPassword"
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
                  {t('button.btn18')}
                </CustomButton>

                <CustomButton type="submit" className="">
                {t('button.btn17')}
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
