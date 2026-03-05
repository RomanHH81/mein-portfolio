'use client';

import { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.scss';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top  = `${e.clientY}px`;
    };

    const onEnter = () => {
      cursor.style.width  = '20px';
      cursor.style.height = '20px';
    };

    const onLeave = () => {
      cursor.style.width  = '10px';
      cursor.style.height = '10px';
    };

    document.addEventListener('mousemove', onMove);

    const hoverEls = document.querySelectorAll('a, button, [data-cursor-hover]');
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className={styles.cursor} />;
}
