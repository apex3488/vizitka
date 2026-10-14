import styles from './Monogram.module.css'

type MonogramProps = {
  className?: string
}

export function Monogram({ className }: MonogramProps) {
  const classes = className ? `${styles.svg} ${className}` : styles.svg

  return (
    <svg className={classes} viewBox="0 0 280 280" fill="none" aria-hidden="true">
      <circle cx="140" cy="140" r="128" stroke="rgba(244,246,248,0.18)" strokeWidth="1" />
      <circle
        cx="140"
        cy="140"
        r="104"
        stroke="rgba(244,246,248,0.08)"
        strokeWidth="1"
        strokeDasharray="2 7"
      />
      <g className={styles.orbit}>
        <circle
          cx="140"
          cy="140"
          r="116"
          stroke="#3d7eff"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeDasharray="28 220"
        />
        <rect x="136" y="18" width="8" height="8" fill="#3d7eff" transform="rotate(45 140 22)" />
      </g>
      <path d="M98 64V216" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path
        d="M98 66H142C178 66 178 136 142 136H98"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M98 136H150C192 136 192 214 150 214H98"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}
