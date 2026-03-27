import { useState } from 'react'
import { createPortal } from 'react-dom'

export default function ImageWithCaption({ src, alt, caption, imgStyle }) {
    const [hovered, setHovered] = useState(false)
    const [open, setOpen] = useState(false)
    const resolvedSrc = src.startsWith('/') ? import.meta.env.BASE_URL + src.slice(1) : src

    return (
        <>
            <div
                style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #dde7f3', cursor: 'zoom-in' }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => setOpen(true)}
            >
                <img src={resolvedSrc} alt={alt || caption} style={{ width: '100%', display: 'block', ...imgStyle }} />
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '0.6rem 0.8rem',
                    background: 'rgba(0,0,0,0.55)',
                    color: '#fff',
                    fontSize: '0.85rem',
                    opacity: hovered ? 1 : 0,
                    transition: 'opacity 0.25s ease',
                }}>
                    {caption}
                </div>
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
                        style={{ maxWidth: '90vw', maxHeight: '80vh', borderRadius: '10px', boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}
                    />
                    {caption && (
                        <p style={{ marginTop: '1rem', color: '#fff', fontSize: '0.95rem', opacity: 0.85 }}>
                            {caption}
                        </p>
                    )}
                    <p style={{ marginTop: '0.5rem', color: '#aaa', fontSize: '0.8rem' }}>Click anywhere to close</p>
                </div>,
                document.body
            )}
        </>
    )
}