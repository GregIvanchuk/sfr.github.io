import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from './Plea.module.css';
function Plea() {
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
        alert('Ваша заявка успішно відправлена!');
      })
      .catch(function (error) {
        alert('Під час відправлення вашої заявки сталася помилка. Будь ласка спробуйте пізніше.');
      });
  };

  return (
    <>
    <h1 className={styles.h1}>Для оформлення заявки введіть необхідні дані:</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.item}>
  <label htmlFor="category"></label>
  <select id="category" {...register('category', { required: true })}>
    <option className={styles.option1} value="">Виберіть необхідну вам послугу</option>
    <option className={styles.option} value="Шукаю житло">Шукаю житло</option>
    <option className={styles.option} value="Потрібна їжа">Потрібна їжа</option>
    <option className={styles.option} value="Потрібно оформити документи">Потрібно оформити документи</option>
    <option className={styles.option} value="Потрібен психолог">Потрібен психолог</option>
    <option className={styles.option} value="Шукаю школу для дітей">Шукаю школу для дітей</option>
  </select>
  {errors.category && <span style={{color:"red"}}>поле повинне бути заповнено</span>}
</div>
      <div className={styles.item}>
        <label htmlFor="name"></label>
        <input placeholder=" прізвище та ініціали" type="text" id="name" {...register('name', { required: true })} />
        {errors.name && <span style={{color:"red"}} >поле повинне бути заповнено</span>}
      </div>
      <div className={styles.item}>
        <label htmlFor="email"></label>
        <input placeholder=" електронна адреса" type="email" id="email" {...register('email', { required: true })} />
        {errors.email && <span style={{color:"red"}} >поле повинне бути заповнено</span>}
      </div>
      <div className={styles.item}>
        <label htmlFor="phone"></label>
        <input placeholder=" номер телефону" type="phone" id="phone" {...register('phone', { required: true })} />
        {errors.phone && <span style={{color:"red"}} >поле повинне бути заповнено</span>}
      </div>
      <div className={styles.item}>
        <label htmlFor="city"></label>
        <input placeholder=" місто" type="city" id="city" {...register('city', { required: true })} />
        {errors.city && <span style={{color:"red"}} >поле повинне бути заповнено</span>}
      </div>
      <button type="submit">Send</button>
    </form>
    </>
  );
}

export default Plea;