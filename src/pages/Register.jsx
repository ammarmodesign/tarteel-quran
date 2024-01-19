import { Link } from "react-router-dom";
import { MdOutlineEmail, MdPassword } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const schema = yup.object().shape({
    username: yup
      .string("يجب أنك يكون إسمك من حروف فقط")
      .required("الرجاء ملئ إسمك"),
    email: yup
      .string()
      .email("الرجاء ملئ بريدك الألكتروني بشكل صحيح")
      .required("الرجاء ملئ بريدك الألكتروني"),
    password: yup
      .string()
      .min(6, "يجب أن تتكون كلمة المرور من 6 أحرف علي الأقل")
      .required("الرجاء ملئ كلمة المرور"),
    confirmPassword: yup
      .string()
      .min(6, "يجب أن تتكون كلمة المرور من 6 أحرف علي الأقل")
      .oneOf([yup.ref("password"), null], "كلمتا المرور غير متطابقتين")
      .required("الرجاء ملئ كلمة المرور مرة آخري"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="my-32">
      <div className="wrapper mx-auto">
        <h1 className="register text-3xl font-bold mb-8">أنشاء حساب جديد</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 items-center justify-center gap-4"
        >
          <div>
            <label
              htmlFor={"username"}
              className="block mb-2 text-sm font-medium text-gray-200"
            >
              {"أدخل إسمك"} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                {...register("username")}
                dir="ltr"
                type={"text"}
                id={"username"}
                className="px-4 py-2 rounded-lg bg-blacky outline outline-2 outline-light-blacky focus-within:outline-none w-full md:w-3/5 lg:w-2/5 transition-all duration-300 focus:bg-greeny-gradient"
              />

              <BiUser className="absolute top-3 right-2" />
            </div>
            <p className="text-red-500 mt-2">{errors.username?.message}</p>
          </div>
          <div>
            <label
              htmlFor={"email"}
              className="block mb-2 text-sm font-medium text-gray-200"
            >
              {"أدخل بريدك الألكتروني"} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                {...register("email")}
                dir="ltr"
                type={"text"}
                id={"email"}
                className="px-4 py-2 rounded-lg bg-blacky outline outline-2 outline-light-blacky focus-within:outline-none w-full md:w-3/5 lg:w-2/5 transition-all duration-300 focus:bg-greeny-gradient"
              />

              <MdOutlineEmail className="absolute top-3 right-2" />
            </div>
            <p className="text-red-500 mt-2">{errors.email?.message}</p>
          </div>
          <div>
            <label
              htmlFor={"password"}
              className="block mb-2 text-sm font-medium text-gray-200"
            >
              {"أدخل كلمة المرور"} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                {...register("password")}
                dir="ltr"
                type={"password"}
                id={"password"}
                className="px-4 py-2 rounded-lg bg-blacky outline outline-2 outline-light-blacky focus-within:outline-none w-full md:w-3/5 lg:w-2/5 transition-all duration-300 focus:bg-greeny-gradient"
              />

              <MdPassword className="absolute top-3 right-2" />
            </div>
            <p className="text-red-500 mt-2">{errors.password?.message}</p>
          </div>
          <div>
            <label
              htmlFor={"confirmPassword"}
              className="block mb-2 text-sm font-medium text-gray-200"
            >
              {"أدخل كلمة المرور مرة آخري"}{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                {...register("confirmPassword")}
                dir="ltr"
                type={"password"}
                id={"confirmPassword"}
                className="px-4 py-2 rounded-lg bg-blacky outline outline-2 outline-light-blacky focus-within:outline-none w-full md:w-3/5 lg:w-2/5 transition-all duration-300 focus:bg-greeny-gradient"
              />

              <MdPassword className="absolute top-3 right-2" />
            </div>
            <p className="text-red-500 mt-2">
              {errors.confirmPassword?.message}
            </p>
          </div>

          <button
            className="btn-secondary w-full md:w-3/5 lg:w-2/5"
            type="submit"
          >
            إنضم إلينا
          </button>
        </form>
        <p className="text-white opacity-80 mt-8">
          هل لديك حساب بالفعل؟{" "}
          <Link to={"/login"} className="underline font-bold">
            سجل الدخول الآن
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
