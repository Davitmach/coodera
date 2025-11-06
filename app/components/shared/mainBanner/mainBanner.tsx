'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);
export default function MainBanner() {
    const videoRef = useRef<HTMLVideoElement>(null);
 const mainRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const video = videoRef.current;
      const main = mainRef.current;

      if (!video || !main) return;
  
      ScrollTrigger.create({
        trigger: 'body',
        start: 'top top',
        end: 'max',
        onEnter: () => {
          gsap.set(video, {
       

            borderRadius: '23px',

width: 'calc(100% - 50px)',
marginLeft:'25px',


          });
          gsap.to(video, {
          
            duration: 0.3,
            ease: 'power2.out'
          });
          gsap.set(main,{
maxWidth:'calc(100% - 248px)',
height:'90%'
          })
          gsap.to(main, {
          
            duration: 0.3,
            ease: 'power2.out'
          });
    
        },
        onLeaveBack: () => {
          gsap.set(video, {
  
            borderRadius: '0',
            marginLeft:'0', 
            width:'100%',
            top:'0',
            height:'100%'
          });
          gsap.to(video, {
           
            duration: 0.3,
            ease: 'power2.out'
          });
          gsap.set(main,{
            maxWidth:'1081px',
            height:'auto'
          })
        }
      });
  
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, []);
  return (
    <div  className="w-full h-screen flex justify-center items-center">
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
    </div>
  );
}
