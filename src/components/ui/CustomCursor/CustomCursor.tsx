'use client';

import { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.scss';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring   = ringRef.current;
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top  = `${my}px`;
    };

    const animateRing = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.left = `${rx}px`;
      ring.style.top  = `${ry}px`;
      rafId = requestAnimationFrame(animateRing);
    };
    rafId = requestAnimationFrame(animateRing);

    const onEnter = () => {
      cursor.style.width  = '18px';
      cursor.style.height = '18px';
      ring.style.width    = '50px';
      ring.style.height   = '50px';
    };

    const onLeave = () => {
      cursor.style.width  = '10px';
      cursor.style.height = '10px';
      ring.style.width    = '36px';
      ring.style.height   = '36px';
    };

    document.addEventListener('mousemove', onMove);

    const hoverEls = document.querySelectorAll('a, button, [data-cursor-hover]');
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={ringRef}   className={styles.ring}   />
    </>
  );
}
