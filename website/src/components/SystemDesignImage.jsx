import { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from '../App.module.css';

export default function SystemDesignImage({ src, alt, caption }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const resolvedSrc = src.startsWith('/') ? import.meta.env.BASE_URL + src.slice(1) : src;

  return (
    <>
      <div
        className={styles.diagramImageWide}
        style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1.5px solid #dde7f3', background: '#f8fafc', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', cursor: 'zoom-in', margin: '2rem auto 1.2rem auto', maxWidth: '100%' }}
        onClick={() => setOpen(true)}
        tabIndex={0}
        aria-label={caption || alt}
        title={caption || alt}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <img src={resolvedSrc} alt={alt || caption} style={{ width: '100%', display: 'block', borderRadius: '12px' }} />
        {caption && (
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '0.6rem 0.8rem',
            background: 'rgba(0,0,0,0.55)',
            color: '#fff',
            fontSize: '0.95rem',
            textAlign: 'center',
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.2s',
            pointerEvents: 'none',
          }}>
            {caption}
          </div>
        )}
      </div>

      {open && createPortal(
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-out', padding: '2rem',
          }}
        >
          <img
            src={resolvedSrc}
            alt={alt || caption}
            style={{ maxWidth: '95vw', maxHeight: '85vh', borderRadius: '14px', boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}
          />
          {caption && (
            <p style={{ marginTop: '1.2rem', color: '#fff', fontSize: '1.05rem', opacity: 0.92, textAlign: 'center' }}>
              {caption}
            </p>
          )}
          <p style={{ marginTop: '0.5rem', color: '#aaa', fontSize: '0.85rem', textAlign: 'center' }}>Click anywhere to close</p>
        </div>,
        document.body
      )}
    </>
  );
}