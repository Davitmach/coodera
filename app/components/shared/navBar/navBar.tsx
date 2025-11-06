'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: 'max',
      onEnter: () => {
        gsap.set(nav, {
          position: 'fixed',
          top: 0,

          width: 'calc(100% - 34px)',
          maxWidth: '100%',
          zIndex: 100,
          borderRadius: '48px',
          
        });
        gsap.to(nav, {
          backgroundColor: '#FFFFFF1A',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          boxShadow: '0px 0px 5.2px 0px #00000012 inset, 0px 0px 12.5px 0px #0000001C',
          duration: 0.3,
          ease: 'power2.out'
        });
      },
      onLeaveBack: () => {
        gsap.set(nav, {
          position: 'absolute',
          top: 0,
          left: '50%',
          
          width: '100%',
          maxWidth: '1133px',
          zIndex: 50
        });
        gsap.to(nav, {
          backgroundColor: 'transparent',
          backdropFilter: 'none',
          WebkitBackdropFilter: 'none',
          boxShadow: 'none',
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <nav ref={navRef} className="duration-300 max-w-[1133px]  mx-auto mt-[11px] absolute left-[50%] translate-x-[-50%] top-0 w-full h-auto flex justify-between items-center p-4 z-50 px-[18px] py-[11px]">
        <div>
          <Image className="cursor-pointer" src="/logo.svg" alt="Logo" width={196} height={42} priority />
        </div>
        <div>
          <ul className="flex gap-[15px]">
            <li><a href="#" className="outline-none text-[#2A2A2A] text-[20px] cursor-pointer">о нас</a></li>
            <li><a href="#" className="outline-none text-[#2A2A2A] text-[20px] cursor-pointer">проекты</a></li>
            <li><a href="#" className="outline-none text-[#2A2A2A] text-[20px] cursor-pointer">услуги</a></li>
            <li><a href="#" className="outline-none text-[#2A2A2A] text-[20px] cursor-pointer">технологии</a></li>
            <li><a href="#" className="outline-none text-[#2A2A2A] text-[20px] cursor-pointer">контакты</a></li>
          </ul>
        </div>
        <div>
          <button className="outline-none cursor-pointer bg-[#2A2A2A00] py-[11px] px-[19.5px] rounded-[34px] border border-[#2A2A2A] text-[#2A2A2A] text-[20px]">обсудим проект?</button>
        </div>
      </nav>
    </>
  );
}
