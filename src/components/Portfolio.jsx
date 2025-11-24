import React from 'react'
import PortfolioItems from './PortfolioItems'
import { motion } from "framer-motion";
import { useState } from 'react';





const Portfolio = () => {

  const [animated, setAnimated] = useState(false);


  return (
    <section id='portfolio'  className='mt-40  p-2 md:p-10 rounded-2xl  md:w-11/12  m-auto bg-[#FBFBFB]   '
  >
    <div  
     style={{backgroundImage:`url("./images/port2.jpg")`, 
    backgroundSize:"cover",
    backgroundPosition:"center",
  backgroundRepeat:"no-repeat",}} 
  className=' md:p-4 p-2 bg-[#8D5F8C]'>
     
        <motion.h1 
        
          animate={animated ? { rotateY: 360, textShadow: "0px 0px 4px rgb(255,255,255)" } : {}}
        transition={{duration:0.5}}
      onMouseEnter={() => {
        if (!animated) setAnimated(true);
      }}
        className='text-center mt:20 md:mb-20 text-[#FBFBFB] font-bold text-4xl'>Projelerim</motion.h1>
        
        
        <div 
        
        className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 m-16 gap-20'>
        
        <PortfolioItems
        img={"./images/fashion.png"}
        title={"Stil, kombin paylaşma sitesi"}
        paraf={"Bu proje, React.js ile geliştirilen ve Tailwind CSS kullanılarak tasarlanan modern bir web uygulamasıdır.                                "}
        link={"https://style-share-and-vote.vercel.app/"}
        />

         <PortfolioItems
          img={"./images/todo.png"}
        title={"Görev takip uygulaması"}
        paraf={"HTML, CSS ve JavaScript kullanılarak oluşturulmuş basit bir To-Do List uygulamasıdır. " +
         "Kullanıcılar görev ekleyebilir, silebilir ve tamamlanan görevleri işaretleyebilir. " +
         "Uygulama, Tailwind CSS ile responsive ve modern bir tasarıma sahiptir."}
         link={"https://todo-list-app-sandy-delta.vercel.app/"}
        />

         <PortfolioItems
          img={"./images/hava.png"}
        title={"Hava durumu uygulaması"}
        paraf={"Bu proje, herhangi bir şehrin hava durumunu görüntülemek için geliştirilmiş basit bir React uygulamasıdır. " +
  "Kullanıcılar şehir adına göre hava durumu arayabilir, sıcaklık, nem ve rüzgar hızını görüntüleyebilir. " +
  "Hava koşullarına göre simgeler değişir ve arayüz Tailwind CSS ile modern, duyarlı bir tasarıma sahiptir."}
         link={"https://weather-app-qkd4.vercel.app/"}
        />

        <PortfolioItems
         img={"./images/reduxx.png"}
        title={"Redux Gönderiler Uygulaması"}
        paraf={ "Bu proje, Redux Toolkit kullanılarak geliştirilen basit bir React uygulamasıdır. " +
        "Kullanıcıların başlık, içerik ve yazar bilgileriyle yeni gönderiler eklemesine ve mevcut gönderileri görüntülemesine olanak tanır. " +
          "Bu proje, Redux Toolkit ve React-Redux hook’ları ile durum yönetiminin (state management) temel mantığını göstermektedir."}
        link={"https://redux-posts-app-ashen.vercel.app/"}
        />

         <PortfolioItems
          img={"./images/next.png"}
        title={"Restoran web sitesi (Next.js)"}
        paraf={"Bu proje, Next.js ile geliştirilen ve Tailwind CSS kullanılarak tasarlanan " +
           "modern bir web uygulamasıdır. Duyarlı yapısı sayesinde farklı cihazlarda sorunsuz çalışır."}
          link={"https://next-restaurant-lime.vercel.app/"}
        
        />

         <PortfolioItems
          img={"./images/döviz.png"}
        title={"Canlı Döviz Dönüştürücü"}
        paraf={ "React ve Vite kullanılarak yapılmış basit bir döviz çevirici uygulamasıdır. " +
           "Kullanıcılar USD, TRY, EUR ve API’de mevcut diğer dövizler arasında dönüşüm yapabilir. " +
           "Uygulama, API kullanarak güncel döviz kurlarını sağlar."}
          link={"https://doviz-cevirme-uygulamasi.vercel.app/"}
        />

        </div>
               
        <div className='text-white w-11/12 m-auto text-center'>
             <p> <span className='text-2xl font-bold underline text-center'>Not:</span> Bu projeler, yazılım öğrenme sürecimde sürekli olarak üzerine eklemeler yaparak geliştirdiğim çalışmalardır.
           Yeni teknolojiler öğrendikçe projelere entegre ediyor, tasarım ve işlevsellik yönünden güncellemeler yapıyorum.
             İlerleyen zamanda backend tarafını da geliştirip projeleri daha kapsamlı hale getirmeyi planlıyorum. Projelerimin bir diğer kısmı <a className='underline font-semibold font-serif' href="https://github.com/berketgc">Github</a> hesabımdadır. </p>
        </div>
     </div>

    </section>
  )
}

export default Portfolio