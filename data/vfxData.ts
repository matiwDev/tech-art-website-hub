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
    title: 'Particle Chaos', 
    category: 'VFXs', 
    mediaUrl: 'https://IntentionalBroken/UntilIGet/SomeContent', 
    size: 'large' 
  },
  { 
    id: 7, 
    title: 'Subsurface Scattering', 
    category: 'Shaders', 
    mediaUrl: 'https://res.cloudinary.com/djcksi74n/image/upload/q_auto,f_auto/v1771915801/Screenshot_2026-02-23_at_15.24.27_rg8os1.png', 
    size: 'small' 
  }
];