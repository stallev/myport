import React from 'react';
import { useForm } from "react-hook-form";
import cx from 'classnames';
import Input from '../Input';
import Textarea from '../Textarea';
import Button from '../Button';

import styles from './styles/_contactsForm.module.scss';

const ContactsForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className={styles.contactsForm}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.landing__form}>
        <Input
          inputType="text"
          placeholder="Your name"
          validation={register("firstName", { required: true, maxLength: 30 })}
        />
        <Input
          inputType="email"
          placeholder="Your email"
          validation={register("user_email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i })}
        />
        <Textarea
          placeholder="Your message"
          validation={register("user_message", { required: true, minLength: 6 })}
        />
        <Button
          label="Submit"
          isSubmit
        />
      </form>
    </div>
  );
};

export default ContactsForm;