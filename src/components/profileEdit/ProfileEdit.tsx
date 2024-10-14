/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { toast } from "react-toastify";
import moment from 'moment-timezone';
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
import Loading from '../loading';


const ProfileEdit = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users);
  const isLargerThanSm = useBreakpoint("sm");
  const { t } = useClientTranslation('Common');

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user: GetUserResponse = JSON.parse(storedUser);
        dispatch(setSelectedUser(user as any));
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        dispatch(getUser());
      }
    } else {
      dispatch(getUser());
    }
  }, [dispatch]);

  if (loading && !users) {
    return <div className="text-center mt-10">{t('loading')}</div>;
  }

  const initialValues: ProfileFormValues = {
    fullname: users[0]?.fullname || "",
    email: users[0]?.email || "",
    phone: users[0]?.phone || "",
    dateOfBirth: users[0]?.dateOfBirth
      ? moment.tz(users[0].dateOfBirth, 'Asia/Ho_Chi_Minh').format('YYYY-MM-DD')
      : "",
  };

  const handleSubmit = async (
    values: ProfileFormValues,
    { setSubmitting }: FormikHelpers<ProfileFormValues>
  ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { email, ...profileDataWithoutEmail } = values;
      await dispatch(updateUser({ profileData: profileDataWithoutEmail, avatar: null })).then(({ payload }) => {
        if (payload) {
          dispatch(setSelectedUser(payload as any));
          toast.success(t("toast.successUpdate"));
        }
      });
    } catch (error) {
      console.error("Lỗi khi cập nhật người dùng:", error);
      toast.error(t("toast.errorUpdate")); 
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <div className="xl:p-4">
      <h2 className="text-2xl font-semibold text-black shadow-md p-4">
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
                  {t('button.btn18')}
                </CustomButton>
                <CustomButton type="submit" disabled={loading}>
                  {loading ? <Loading/> : t('button.btn17')}
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
