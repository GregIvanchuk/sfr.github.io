import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from './Plea.module.css';
import LanguageContext from "../../../LanguageContext"
function Plea() {
  const { language, setLanguage, t } = useContext(LanguageContext);
  const { register, handleSubmit, reset , formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const sendinblueApiKey = process.env.REACT_APP_API_KEY;
    axios({
      method: 'post',
      url: 'https://api.sendinblue.com/v3/smtp/email',
      headers: {
        'Content-Type': 'application/json',
        'api-key': sendinblueApiKey,
      },
      data: {
        sender: { name: data.name, email: data.email },
        to: [{ email:'gregiv99@gmail.com'}],
        subject: data.category,
        htmlContent: `Місто:${data.city}
        <br>Номер телефону: ${data.phone}
        <br>Прізвище та ініціали: ${data.name}
        <br>Електронна адреса: ${data.email}<br>Послуга яку потребує клієнт: ${data.category}`,
      },
    })
      .then(function (response) {
        reset();
        alert(t("alert1"));
      })
      .catch(function (error) {
        alert(t("alert2"));
      });
  };

  return (
    <>
    <h1 className={styles.h1}>{t("AplicationsTitle")}</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.item}>
  <label htmlFor="category"></label>
  <select id="category" {...register('category', { required: true })}>
    <option className={styles.option1} value="">{t("option1")}</option>
    <option className={styles.option} value="Шукаю житло">{t("option2")}</option>
    <option className={styles.option} value="Потрібна їжа">{t("option3")}</option>
    <option className={styles.option} value="Потрібно оформити документи">{t("option4")}</option>
    <option className={styles.option} value="Потрібен психолог">{t("option5")}</option>
    <option className={styles.option} value="Шукаю школу для дітей">{t("option6")}</option>
  </select>
  {errors.category && <span style={{color:"red"}}>{t("errorMess")}</span>}
</div>
      <div className={styles.item}>
        <label htmlFor="name"></label>
        <input placeholder={t("name")} type="text" id="name" {...register('name', { required: true })} />
        {errors.name && <span style={{color:"red"}} >{t("errorMess")}</span>}
      </div>
      <div className={styles.item}>
        <label htmlFor="email"></label>
        <input placeholder={t("email")} type="email" id="email" {...register('email', { required: true })} />
        {errors.email && <span style={{color:"red"}} >{t("errorMess")}</span>}
      </div>
      <div className={styles.item}>
        <label htmlFor="phone"></label>
        <input placeholder={t("phone")}  type="phone" id="phone" {...register('phone', { required: true })} />
        {errors.phone && <span style={{color:"red"}} >{t("errorMess")}</span>}
      </div>
      <div className={styles.item}>
        <label htmlFor="city"></label>
        <input placeholder={t("city")}  type="city" id="city" {...register('city', { required: true })} />
        {errors.city && <span style={{color:"red"}} >{t("errorMess")}</span>}
      </div>
      <button type="submit">{t("send")}</button>
    </form>
    </>
  );
}

export default Plea;