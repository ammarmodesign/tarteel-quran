import { Link } from "react-router-dom";
import { MdOutlineEmail, MdPassword } from "react-icons/md";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("الرجاء ملئ بريدك الألكتروني بشكل صحيح")
      .required("الرجاء ملئ بريدك الألكتروني"),
    password: yup
      .string()
      .min(6, "يجب أن تتكون كلمة المرور من 6 أحرف علي الأقل")
      .required("الرجاء ملئ كلمة المرور"),
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

          <button
            className="btn-secondary w-full md:w-3/5 lg:w-2/5"
            type="submit"
          >
            أدخل إلي حسابك
          </button>
        </form>
        <p className="text-white opacity-80 mt-8">
          ليس لديك حساب بعد؟{" "}
          <Link to={"/register"} className="underline font-bold">
            أنشئ حسابك الجديد الآن{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
