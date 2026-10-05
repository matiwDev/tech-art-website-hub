export interface VFXProject {
  id: number;
  title: string;
  category: 'Shaders' | 'VFXs';
  mediaUrl: string; // Direct URL to image or video
  poster?: string;  // Optional thumbnail for videos
  size: 'small' | 'medium' | 'large';
}

export const vfxData: VFXProject[] = [
  { 
    id: 1, 
    title: 'Holographic Glitch', 
    category: 'Shaders', 
    mediaUrl: 'https://res.cloudinary.com/djcksi74n/video/upload/q_auto,f_auto/v1771924791/Web_outline1_zbutuk.mov', 
    size: 'large' 
  },
  { 
    id: 2, 
    title: 'Procedural Sphere', 
    category: 'VFXs', 
    mediaUrl: 'https://res.cloudinary.com/djcksi74n/video/upload/q_auto,f_auto/v1771919945/Web_sphere1_fpf1wl.mov', 
    size: 'medium' 
  },
  { 
    id: 3, 
    title: 'Compute Shader Grass', 
    category: 'Shaders', 
    mediaUrl: 'https://res.cloudinary.com/djcksi74n/image/upload/q_auto,f_auto/v1771915802/Screenshot_2026-02-23_at_18.04.00_jgsptz.png', 
    size: 'medium' 
  },
  { 
    id: 4, 
    title: 'The Vortex Portal', 
    category: 'VFXs', 
    mediaUrl: 'https://res.cloudinary.com/djcksi74n/video/upload/q_auto,f_auto/v1771919932/Web_vortex1_hj9spa.mov', 
    size: 'small' 
  },
  { 
    id: 5, 
    title: 'Raymarched SDFs', 
    category: 'Shaders', 
    mediaUrl: 'https://res.cloudinary.com/djcksi74n/image/upload/q_auto,f_auto/v1771915802/Screenshot_2026-02-23_at_18.03.24_qgej2c.png', 
    size: 'medium' 
  },
  {
    id: 6, 
    title: 'ThrusterFlame', 
    category: 'Shaders', 
    mediaUrl: 'https://res.cloudinary.com/djcksi74n/video/upload/v1791218610/Astrounaut_ey8bqu.mov', 
    size: 'large' 
  },
  { 
    id: 7, 
    title: 'Subsurface Scattering', 
    category: 'Shaders', 
    mediaUrl: 'https://res.cloudinary.com/djcksi74n/image/upload/q_auto,f_auto/v1771915801/Screenshot_2026-02-23_at_15.24.27_rg8os1.png', 
    size: 'small' 
  },
  { 
    id: 8, 
    title: 'Tooltip', 
    category: 'Shaders', 
    mediaUrl: 'https://res.cloudinary.com/djcksi74n/video/upload/v1788698986/Tooltip_p40mac.mov', 
    size: 'medium' 
  },
  {
    id: 9, 
    title: 'Procedural Rays', 
    category: 'Shaders', 
    mediaUrl: 'https://res.cloudinary.com/djcksi74n/video/upload/v1788698996/Procedural_Rays_hs2umu.mov', 
    size: 'medium' 
  },
  { 
    id: 10, 
    title: 'Quest In', 
    category: 'VFXs', 
    mediaUrl: 'https://res.cloudinary.com/djcksi74n/video/upload/v1788698991/SimpleFloatChar_pgy5ky.mov', 
    size: 'large' 
  },
  {
    id: 11, 
    title: 'TMP Laundry', 
    category: 'Shaders', 
    mediaUrl: 'https://res.cloudinary.com/djcksi74n/image/upload/v1789412553/Screenshot_2026-09-08_at_19.09.46_oap3pq.png', 
    size: 'medium' 
  },
  {
    id: 12, 
    title: 'TMP Cookie', 
    category: 'Shaders', 
    mediaUrl: 'https://res.cloudinary.com/djcksi74n/image/upload/v1789412553/Screenshot_2026-09-09_at_10.51.05_khew87.png', 
    size: 'medium' 
  },
  {
    id: 6, 
    title: 'ThrusterFlame', 
    category: 'Shaders', 
    mediaUrl: 'https://res.cloudinary.com/djcksi74n/video/upload/v1791218610/Astrounaut_ey8bqu.mov', 
    size: 'large' 
  },
];