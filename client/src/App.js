import React from 'react';
import './App.css';
import Nav from './components/Nav';
import ParallaxContainer from './components/ParallaxContainer';
import ScrapeContainer from './components/ScrapeContainer';
import PageFooter from './components/PageFooter';
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data) }

  console.log(watch('email_address')) // watch input value by passing the name of it

  return (
    <>
      <Nav register={register} errors={errors} handleSubmit={handleSubmit} onSubmit={onSubmit} />
      <ParallaxContainer />
      <ScrapeContainer />
      <PageFooter />
    </>
  );
}

export default App;
