import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MapWithIcons from '../Component/FarEastMap';
import TestimonialsSlider from '../Component/TestimonialsSlider';
import video from "../FotoSite/field3.mp4";
import CardEquipment from "../Component/SliderFoto";
import AOS from "aos";


const About = () => {
  const navigate = useNavigate();
 useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
<div>
    <div>
            <video className="vid" autoPlay loop muted playsInline>
               <source src={video} type="video/mp4"/>
            </video>
           </div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ maxWidth: 1100, margin: 'auto' }}>
     <section style={{ marginTop: 30 }}>
        <h2>О компании</h2>
        <div className='aboutText'>
        <p>  ООО «ПБР-ГИДРО» — лидер по бурению водных скважин в Республике Саха (Якутия). Компания образована в 2007 году и
           является обособленным подразделением ООО «Предприятие буровых работ»,специализирующееся на выполнение работ по
            бурению гидрогеологических скважин в труднодоступных местах.</p>
            <p>   Основная база предприятия расположена в Ленском
            районе Республики Саха (Якутия), что закалило персонал при ведении работ в тяжёлых климатических условиях. </p>
            <p>  Многолетний опыт и квалифицированные персонал позволят выполнять работы по полному комплексу обустройства месторождений
           водозаборными сооружениями, включая этапы проектирования, бурения, подсчёт запасав подземных вод, а так же постановка скважин на учёт. </p>
           <p>  Квалификация буровых мастеров и разнообразие техники позволят выполнять любые буровые работ (кроме бурения скважин на нефть и газ).</p>
      </div>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>Преимущества нашей компании</h2>
        
        <div className='advantages'>
         <div className='advantagesStep'>
           <h3 className='step'>93 241</h3>
           <h4> метров пробурено до 2025 года</h4>
         </div>
         <div>
           <h3 className='step'>11</h3>
           <h4>буровых установок в использовании</h4>
         </div>
         <div>
           <h3 className='step'>10</h3>
           <h4>укомплектованных буровых бригад</h4>
         </div>
         <div>
           <h3 className='step'>25</h3>
           <h4>гидрогеологических скважин в год</h4>
         </div>
        </div>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>Наши проекты на карте</h2>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-40">
      <MapWithIcons />
    </div> 
      </section>

      <section style={{ marginTop: 30, cursor: 'pointer' }} onClick={() => navigate('/equipment')}>
        <h2>Наша техника</h2>
<div style={{ display: "flex", gap: "40px", justifyContent: "center", padding: "20px" }}>
      <CardEquipment
        image="/images/urbZaz1.png"
        text={[
          <p>Буровой станок модели ЗИФ-1200,</p>,
          <p>Буровая установка УРБ-2АМ,</p>,
          <p>Буровая установка УРБ-2А2,</p>,
          <p>Буровая установка УБВ-218,</p>,
          <p>Буровая установка УРБ-210,</p>,
          <p>Буровая установка УРБ-25,</p>,
          <p>Буровая установка УРБ-ЗАЗ.</p>
        ]}
        link="/equipment"
      />
      <CardEquipment
        image="/images/kamaz.png"
       text={[
          <p>КАМАЗы 43118 с КМУ</p>,
          <p>Ёмкости для подвоза воды</p>,
          <p>Компрессорные установки Airman</p>
        ]}
        link="/equipment"
      />
    </div>
      </section>

      <section style={{ marginTop: 30, cursor: 'pointer' }} onClick={() => navigate('/services')}>
        <h2>Наши услуги</h2>
        <ul className='scrol'>
          <li>Бурение водозаборных скважин с сопутствующим обустройством павильона для отбора воды.</li>
          <li>Постановка водозаборных скважин в соответствующих государственных органах контроля отросли.</li>
          <li>Диагностика и ремонт водозаборных скважин.</li>
          <li>Бурение скважин под анодное заземление (глубинное анодное заземление).</li>
          <li>Бурение скважин для экологического мониторинга.</li>
          <li>Инженерно-геологические изыскания (бурение скважин с отбором проб грунта).</li>
        </ul>
        <p className='textService' style={{ color: '#0066cc', textDecoration: 'underline' }}>Перейти к услугам</p>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>Благодарственные письма</h2>
        <TestimonialsSlider />
      </section>

     
    </motion.div>
   </div>
  );
};

export default About;
