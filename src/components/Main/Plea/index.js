import styles from "./Plea.module.css";
import React from "react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
function Plea({ openCart,itemsCart,setItemsCart,sum }) {
    let [onSub, setOnSub] = useState(false);
    const {register,handleSubmit,formState: { errors },reset,} = useForm();
    const onSubmit = (data) => {
    //     async function fetchData() {
    //   await axios.post("http://localhost:3001/users",ord);
    //   await  itemsCart.forEach((item) => {
    //      axios.delete(`http://localhost:3001/cart/${item.id}`);
    //     }});
        // let ord = {data,itemsCart,sum:sum}
        // setItemsCart([]);
        
        // setOnSub(!onSub);
    // fetchData() 
    };
    return  (
        <div className={styles.cont}>
        <h1 className={styles.h1}>Для оформлення заявки заповніть всі поля</h1>
        <div className={styles.drawer}>
            <div className={styles.cart_Items}>
                <div className={styles.form}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <select name="service" id="">
                        <option value="1">Шукаю житло</option>
                        <option value="2">Потрібна їжа</option>
                        <option value="3">Потрібно оформити документи</option>
                        <option value="4">Потрібен психолог</option>
                        <option value="5">Шукаю школу для дітей</option>
                    </select>
                        <input 
                            {...register("firstName", { 
                                required: "Field is required",
                                minLength: 2,
                                maxLength: 20,
                            })}
                            name="firstName"
                            type="text"
                            placeholder=" Ім'я"
                        />
                        {errors.firstName && <p style={{color:"red",height:'-20px',marginTop:"-15px",marginBottom:"-15px"}}>{errors.firstName.message}</p>}
                        <input
                            {...register("lastName", { 
                                required: "Field is required",
                                minLength: 2,
                                maxLength: 20,
                            })}
                            name="lastName"
                            type="text"
                            placeholder=" Прізвище"
                        />
                        {errors.firstName && <p style={{color:"red",height:'-20px',marginTop:"-15px",marginBottom:"-15px"}}>{errors.firstName.message}</p>}
                        <input 
                            {...register("phoneNumber",{ 
                                required: "Field is required",
                            })}
                            name="phoneNumber"
                            type="tel"
                            placeholder=" Номер телефону"
                        />
                        {errors.phoneNumber && <p style={{color:"red",height:'-20px',marginTop:"-15px",marginBottom:"-15px"}}>{errors.firstName.message}</p>}
                        <input
                            {...register("city",{ 
                                required: "Field is required",
                                minLength: 2,
                                maxLength: 20,
                            })}
                            name="city"
                            type="text"
                            placeholder=" Місто"
                        />
                        {errors.phoneNumber && <p style={{color:"red",height:'-20px',marginTop:"-15px",marginBottom:"-15px"}}>{errors.firstName.message}</p>}
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Plea;
