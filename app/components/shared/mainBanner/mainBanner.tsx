'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);
export default function MainBanner() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const mainRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const video = videoRef.current;
      const main = mainRef.current;
      const section = sectionRef.current;

      if (!video || !main || !section) return;

      // Создаем timeline с pinned scroll trigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=600', // короткая длина "виртуального" скролла для быстрой анимации
          scrub: 0.1, // очень плавный и отзывчивый скролл (меньшее значение = быстрее реакция)
          pin: true, // фиксируем секцию
        },
      });

      // Анимация: сначала видео и контент трансформируются
      tl.to(video, {
        borderRadius: '23px',
        width: 'calc(100% - 50px)',
        marginLeft: '25px',
        ease: 'linear' // линейная анимация для более плавного скролла
      })
      .to(main, {
        maxWidth: 'calc(100% - 248px)',
        height: '90%',
        ease: 'linear' // линейная анимация для более плавного скролла
      }, '<'); // '<' означает, что анимация начинается одновременно с предыдущей
  
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, []);
  return (
    <section ref={sectionRef} className="relative w-full h-screen flex justify-center items-center">
      <video 
        ref={videoRef}
        src="/mainBanner.mp4" 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
        className="duration-300 w-full h-full object-cover absolute top-0 left-0 -z-10"
      />
      <div ref={mainRef} className="duration-300 py-[200px] shadow-[inset_0px_0px_5.2px_0px_rgba(0,0,0,0.07),0px_0px_12.5px_0px_rgba(0,0,0,0.11)] flex items-center justify-center gap-[] flex-col max-w-[1081px] w-full rounded-[20px]">
        <div className="mb-[25px] text-[#222222] text-[64px]">
          digital <span className="bg-[#FF3C0029] border border-[#FF3C00] dev_icon ">бизнес,</span> с <span className="bg-[#0D33AF29] border border-[#0D33AF] design_icon">нами</span> - это просто
        </div>
        <div className="mb-[28px]">
          <p className="text-[#515151] text-[24px]">
            мы помогаем <span className="underline italic">автоматизировать</span> вашему бизнесу
          </p>
        </div>
        <div className="flex items-center justify-center gap-[7px]">
          <button className="rounded-[46px] pb-[13px] py-[11px] px-[23.5px] text-[#FFFFFF] text-[24px] bg-[#242424] outline-none cursor-pointer">заполнить бриф</button>
          <button className="rounded-[46px] py-[11px] px-[23.5px] text-[#222222] text-[24px] border border-[#222222] outline-none cursor-pointer">позвоните мне</button>
        </div>
      </div>
    </section>
  );
}
