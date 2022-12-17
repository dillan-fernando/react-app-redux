import styles from "./styles.module.css";
import React from "react";
import { useForm, Resolver } from "react-hook-form";

type LoginForm = {
  email: string;
  password: string;
};

// const resolver: Resolver<LoginForm> = async (values) => {
//   return {
//     values: values.email ? values : {},
//     errors: !values.email
//       ? {
//           email: {
//             type: "required",
//             message: "This is required.",
//           },
//         }
//       : {},
//   };
// };
export interface ILoginProps {
  login: Function;
}

const Login: React.FunctionComponent<ILoginProps> = ({ login }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const onSubmit = handleSubmit((data) => {
    console.log(errors);
    Object.keys(errors).length === 0 && login();
  });

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.loginCntr}>
        <div>
          <input
            className={`${styles.inputBox} ${
              errors?.email ? styles.noMargin : ""
            }`}
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors?.email && errors.email.type === "required" && (
            <p className={styles.errorMsg}>This is required.</p>
          )}
        </div>

        <div>
          <input
            className={`${styles.inputBox} ${
              errors?.password ? styles.noMargin : ""
            }`}
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          {errors?.password && errors.password.type === "required" && (
            <p className={styles.errorMsg}>This is required.</p>
          )}
        </div>

        <input type="submit" className={styles.loginBtn} />
      </div>
    </form>
  );
};

export default Login;
