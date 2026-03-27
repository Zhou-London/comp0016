import { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from '../App.module.css';

/**
 * AppendixImage - For appendix images with consistent styling, hover caption, and click-to-expand.
 *
 * Props:
 *   src: string (image source)
 *   alt: string (alt text, also used as caption if caption not provided)
 *   caption?: string (caption text)
 *   style?: object (optional extra styles)
 */
export default function AppendixImage({ src, alt, caption, style }) {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const cap = caption || alt;
  const resolvedSrc = src.startsWith('/') ? import.meta.env.BASE_URL + src.slice(1) : src;

  return (
    <>
      <div
        className={styles.appendicesImage}
        style={{ position: 'relative', cursor: 'zoom-in', ...style }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setOpen(true)}
        tabIndex={0}
        aria-label={cap}
        role="button"
      >
        <img
          src={resolvedSrc}
          alt={alt}
          style={{ width: '100%', display: 'block', borderRadius: 'inherit', objectFit: 'contain' }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '0.6rem 0.8rem',
            background: 'rgba(0,0,0,0.55)',
            color: '#fff',
            fontSize: '0.95rem',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.25s',
            borderBottomLeftRadius: 'inherit',
            borderBottomRightRadius: 'inherit',
            pointerEvents: 'none',
          }}
        >
          {cap}
        </div>
      </div>

      {open && createPortal(
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            padding: '2rem',
          }}
        >
          <img
            src={resolvedSrc}
            alt={alt}
            style={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              borderRadius: '12px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
              background: '#fff',
            }}
          />
          {cap && (
            <p style={{ marginTop: '1rem', color: '#fff', fontSize: '1.05rem', opacity: 0.92, textAlign: 'center' }}>{cap}</p>
          )}
          <p style={{ marginTop: '0.5rem', color: '#aaa', fontSize: '0.85rem' }}>Click anywhere to close</p>
        </div>,
        document.body
      )}
    </>
  );
}
