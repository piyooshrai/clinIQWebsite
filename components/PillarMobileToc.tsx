'use client'

import { useState } from 'react'
import css from './templates/PillarSpecialtyPage.module.css'

interface Props {
  items: readonly { id: string; title: string }[]
}

export default function PillarMobileToc({ items }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <nav className={css.mobileToc} aria-label="Page contents">
      <button
        type="button"
        className={css.mobileTocButton}
        aria-expanded={open}
        aria-controls="mobile-toc-list"
        onClick={() => setOpen((value) => !value)}
      >
        In this guide
        <span className={open ? css.mobileTocChevronOpen : css.mobileTocChevron} aria-hidden="true" />
      </button>
      <ul id="mobile-toc-list" className={css.mobileTocList} hidden={!open}>
        {items.map(({ id, title }) => (
          <li key={id}>
            <a href={`#${id}`} className={css.mobileTocLink} onClick={() => setOpen(false)}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
