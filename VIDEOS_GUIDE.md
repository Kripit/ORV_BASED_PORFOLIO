# ORV Portfolio - Video Background Guide

## How to Add Live Video Wallpapers

You have these videos ready:
- `aizen-sosuke-bleach-thousand-year-blood-war-moewalls-com.mp4`
- `makima-the-control-devil-chainsaw-man-moewalls-com.mp4`

### Option 1: Background Video on All Pages

Add this to any page component (e.g., Landing.jsx):

```jsx
<video
  autoPlay
  muted
  loop
  className="fixed inset-0 -z-20 object-cover opacity-20"
>
  <source src="/videos/your-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

### Option 2: Add Videos to Public Folder

1. Create `public/videos/` folder
2. Copy your MP4 files there
3. Reference as `/videos/filename.mp4` in components

### Option 3: Use Videos as Hero/Background in Components

```jsx
import { useState } from 'react'

export default function HeroWithVideo() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/videos/makima.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-5xl">Your Content Here</h1>
      </div>
    </div>
  )
}
```

### Option 4: Video with Glitch Effect

```jsx
<div className="group">
  <video
    autoPlay
    muted
    loop
    className="w-full h-full object-cover group-hover:animate-glitch opacity-70"
  >
    <source src="/videos/your-video.mp4" type="video/mp4" />
  </video>
</div>
```

## Recommendations

1. **Landing Page**: Full-screen video background with 20-30% opacity
2. **About Page**: Video accent in the character card
3. **Projects**: Small video preview in project cards
4. **Resume**: Video sidebar or header

## Performance Tips

- Videos can be large. Consider compressing:
  ```bash
  ffmpeg -i input.mp4 -b:v 2M -c:v libx264 -preset medium output.mp4
  ```

- Use `opacity-20` or `opacity-30` to avoid overwhelming content

- Always include `muted` attribute for autoplay to work

- Consider mobile: Disable video on mobile for better performance:
  ```jsx
  const isMobile = window.innerWidth < 768
  return !isMobile && <video>...</video>
  ```

## Adding Background Video to Specific Components

### Example: About Page with Video Background

Edit `src/pages/About.jsx`:

```jsx
return (
  <div className="relative min-h-screen pt-24 pb-12">
    {/* Video Background */}
    <video
      autoPlay
      muted
      loop
      className="fixed inset-0 -z-10 w-full h-full object-cover opacity-10"
    >
      <source src="/videos/makima.mp4" type="video/mp4" />
    </video>

    <ParticleBackground />
    {/* Rest of component */}
  </div>
)
```

## Organizing Videos Structure

```
public/
├── videos/
│   ├── makima.mp4
│   ├── aizen.mp4
│   └── bg-dark.mp4
└── images/
    ├── profile.jpg
    └── projects/
```

Reference:
```jsx
<source src="/videos/makima.mp4" />  // ✅ Correct
<source src="./videos/makima.mp4" /> // ❌ Wrong
```

## CSS Enhancement: Video Overlay Effects

```css
/* Glitch effect on video hover */
.video-glitch:hover {
  animation: glitch 0.3s infinite;
  filter: saturate(1.5);
}

/* Dark overlay for readability */
.video-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(10, 14, 39, 0.7);
  z-index: 1;
}
```

Use in JSX:
```jsx
<div className="relative video-overlay">
  <video autoPlay muted loop>
    <source src="/videos/makima.mp4" />
  </video>
  {/* Content inside overlay */}
</div>
```

---

Ready to turn it up to 11? Add videos to make it absolutely cinematic! 🎬✨
