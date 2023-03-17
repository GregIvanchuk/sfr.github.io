import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from './Plea.module.css';
function Plea() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const sendinblueApiKey ='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';
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
        console.log(response);
        alert('Your message was sent successfully!');
      })
      .catch(function (error) {
        console.log(error);
        alert('An error occurred while sending your message. Please try again later.');
      });
  };

  return (
    <>
    <h1 className={styles.h1}>Для оформлення заявки введіть необхідні дані:</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.item}>
  <label htmlFor="category"></label>
  <select id="category" {...register('category', { required: true })}>
    <option value="">Виберіть необхідну вам послугу</option>
    <option value="Шукаю житло">Шукаю житло</option>
    <option value="Потрібна їжа">Потрібна їжа</option>
    <option value="Потрібно оформити документи">Потрібно оформити документи</option>
    <option value="Потрібен психолог">Потрібен психолог</option>
    <option value="Шукаю школу для дітей">Шукаю школу для дітей</option>
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