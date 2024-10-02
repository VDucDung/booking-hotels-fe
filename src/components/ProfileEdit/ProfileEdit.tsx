"use client";

import { useEffect } from "react";
import useBreakpoint from "@/hooks/useBreakpoint";
import { Form, Formik, FormikHelpers } from "formik";
import FormikTextField from "../formik/FormikTextField";
import CustomButton from "../button/CustomButton";
import validationSchema from "./schema";
import { useClientTranslation } from "@/i18n/client";
import { ProfileFormValues } from "@/interfaces/profile";
import { GetUserResponse } from "@/interfaces";
import { setSelectedUser, useAppDispatch, useAppSelector } from "@/redux";
import { getUser, updateUser } from "@/api/userService";

function ProfileEdit() {
  const dispatch = useAppDispatch();
  const { selectedUser, loading, error } = useAppSelector((state) => state.users);
  const isLargerThanSm = useBreakpoint("sm");
  const { t } = useClientTranslation('Common');

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user: GetUserResponse = JSON.parse(storedUser);
        dispatch(setSelectedUser(user));
      } catch {
        dispatch(getUser());
      }
    } else {
      dispatch(getUser());
    }
  }, [dispatch]);

  useEffect(() => {
    if (selectedUser) {
      localStorage.setItem("user", JSON.stringify(selectedUser));
    }
  }, [selectedUser]);

  if (loading && !selectedUser) {
    return <div className="text-center mt-10">{t('loading')}</div>;
  }

  const initialValues: ProfileFormValues = {
    fullname: selectedUser?.fullname || "",
    email: selectedUser?.email || "",
    phone: selectedUser?.phone || "",
    dateOfBirth: selectedUser?.dateOfBirth || new Date("01/01/2000"),
  };

  const handleSubmit = async (
    values: ProfileFormValues,
    { setSubmitting }: FormikHelpers<ProfileFormValues>
  ) => {
    await dispatch(updateUser(values));
    setSubmitting(false);
  };

  return (
    <div className="xl:p-4">
      <h2 className="text-2xl font-semibold text-dark shadow-md p-4">
        {t('profile.info')}
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema(t)}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ resetForm }) => (
          <Form>
            <div className="flex flex-col gap-6 sm:gap-y-6 gap-y-14 sm:mt-7 mt-14">
              <FormikTextField
                name="fullname"
                label={t('profile.fullName')}
                orientation={isLargerThanSm ? "horizontal" : "vertical"}
                labelClassName="font-medium"
                required
              />

              <FormikTextField
                name="email"
                label={t('profile.email')}
                orientation={isLargerThanSm ? "horizontal" : "vertical"}
                labelClassName="font-medium"
                required
                disabled
              />

              <FormikTextField
                name="phone"
                label={t('profile.phoneNumber')}
                orientation={isLargerThanSm ? "horizontal" : "vertical"}
                labelClassName="font-medium"
                required
              />

              <FormikTextField
                name="dateOfBirth"
                label={t('profile.birthDay')}
                type="date"
                orientation={isLargerThanSm ? "horizontal" : "vertical"}
                labelClassName="font-medium"
                required
              />
            </div>
            <div className="flex mt-10">
              <div className="flex gap-4 ml-auto">
                <CustomButton type="button" onClick={() => resetForm()}>
                  {t('button.btn17')}
                </CustomButton>

                <CustomButton type="submit" disabled={loading}>
                  {loading ? t('button.loading') : t('button.btn18')}
                </CustomButton>
              </div>
            </div>
            {error && <div className="text-red-500 mt-4">{error}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProfileEdit;
