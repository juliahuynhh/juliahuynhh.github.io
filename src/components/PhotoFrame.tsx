import './PhotoFrame.css'

type PhotoFrameProps = {
  label?: string
  className?: string
}

export default function PhotoFrame({
  label = 'Photo placeholder',
  className = '',
}: PhotoFrameProps) {
  return (
    <div className={`photo-frame-wrapper ${className}`.trim()}>
      <div className="photo-frame">
        <img
          src="/icons/sticky-note-headshot.png"
          alt=""
          className="photo-frame-image"
          aria-hidden="true"
        />
        <div className="photo-placeholder" aria-label={label}>
          {/* Photo will go here */}
        </div>
      </div>
    </div>
  )
}
