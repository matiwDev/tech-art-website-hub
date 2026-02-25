import { Zap, Layers, RefreshCw, Bookmark, DraftingCompass, FileImage, LucideIcon, Code2 } from 'lucide-react';

export interface ContentBlock {
  layout: 'image-left' | 'image-right';
  visual: string; // URL for Image or Video
  title?: string;
  bodyType: 'paragraphs' | 'bullets' | 'technical-list';
  text: string[];
}

export interface ToolSpec {
  label: string;
  value: string;
}

export interface Tool {
  id: string;
  name: string;
  version: string;
  category: 'Lite' | 'Pro' | 'Utility';
  description: string;
  icon: LucideIcon;
  status: 'Active' | 'Development';
  specs: ToolSpec[];
  contentBlocks: ContentBlock[];
  storeLink: string;
}

export const toolsData: Tool[] = [
  {
    id: 'tween-vfx-lite',
    name: 'Tween VFX (Lite)',
    version: '1.2.4',
    category: 'Lite',
    description: 'An ultra-lightweight tweening framework designed for high-performance flexible UI animations.',
    icon: Zap,
    status: 'Active',
    specs: [
      { label: 'Size', value: '14KB' },
      { label: 'Platform', value: 'Unity 2021+' },
      { label: 'Allocations', value: 'Zero (Runtime)' },
      { label: 'License', value: 'MIT' }
    ],
    contentBlocks: [
        {
            layout: 'image-left',
            visual: 'https://lh3.googleusercontent.com/u/0/d/1wMyjI5QKIzAaMoVEJ9qmHuzKWKLPkn8n',
            title: 'Decoupled Animation Architecture',
            bodyType: 'paragraphs',
            text: [
                'The Creatush Tween System introduces a "Plug-and-Play" workflow that finally separates your game logic from your visual polish. Instead of burying animation code inside your gameplay scripts, our system uses a modular behavior-based approach. This ensures a cleaner codebase and a faster iteration cycle.',
                'Unlike rigid animation systems, our behaviors are hierarchy-aware. By utilizing a "Smart Controller" logic, the system automatically detects whether a behavior lives on a parent or a child object. This allows for complex, multi-layered animations—like a menu panel popping in while its buttons pulse independently—all managed by a single controller without a single line of extra code.'
            ]
        },
        {
            layout: 'image-right',
            visual: 'https://lh3.googleusercontent.com/u/0/d/1vh8frPEq2omMmcKjFDnMilHrRmVFDYbZ',
            title: 'Designer-First Workflow Tools',
            bodyType: 'paragraphs',
            text: [
                'To keep your project healthy, our custom Editor suite acts as a silent partner in your development. If a behavior is added to an object without a controller, the Inspector provides an immediate visual warning and a one-click "Quick-Fix" button to inject the correct controller automatically. This eliminates common setup errors and makes the tool instantly accessible to artists and designers.',
                'The Creatush controllers are designed for clarity at a glance. By utilizing custom Inspector layouts, the system allows you to manage delays, join-logic, and target overrides without the clutter of a standard Unity list. Whether you are managing a single button hover or a complex treasure chest sequence, the workflow remains clean, visual, and highly organized.',
            ]
        }
    ],
    storeLink: 'https://assetstore.unity.com/'
  },
  {
    id: 'tween-vfx-pro',
    name: 'Tween VFX (Pro)',
    version: '2.1.0',
    category: 'Pro',
    description: 'The complete motion toolkit. Includes visual sequencing, spline editors, and complex physics-based easing capabilities.',
    icon: Layers,
    status: 'Development',
    specs: [
        { label: 'Size', value: '85KB' },
        { label: 'Platform', value: 'Unity 2021+' },
        { label: 'Editor', value: 'Visual Timeline' },
        { label: 'Support', value: 'Priority' }
    ],
    contentBlocks: [
        {
            layout: 'image-left',
            visual: 'https://picsum.photos/800/600?random=103',
            title: 'Visual Timeline Editor',
            bodyType: 'paragraphs',
            text: [
                'Orchestrate complex cutscenes and UI sequences with a drag-and-drop timeline editor. Scrub through animations in real-time directly within the Unity Editor.',
                'Support for nested sequences allows you to build complex composite animations from simple building blocks.'
            ]
        },
        {
            layout: 'image-right',
            visual: 'https://picsum.photos/800/600?random=104',
            title: 'Physics-Based Easing',
            bodyType: 'paragraphs',
            text: [
                'Go beyond standard ease-in/out curves. Our physics-based spring simulations provide natural, organic motion that reacts to user input velocity.',
                'Adjust mass, stiffness, and damping in real-time to find the perfect feel for your UI elements.'
            ]
        },
        {
            layout: 'image-left',
            visual: 'https://picsum.photos/800/600?random=107',
            title: 'Advanced Features',
            bodyType: 'bullets',
            text: [
                'Multi-track Sequencing with layer support.',
                'Event Triggers for audio and particle synchronization.',
                'Real-time Preview in Edit Mode.'
            ]
        },
        {
            layout: 'image-right',
            visual: 'https://picsum.photos/800/600?random=108',
            title: 'Spline Path Editor',
            bodyType: 'paragraphs',
            text: [
                'Design complex movement paths using our node-based Bezier spline editor. Visualize velocity and timing directly on the path curve.',
                'Perfect for camera fly-throughs, item pickups, and complex UI transitions.'
            ]
        },
        {
            layout: 'image-left',
            visual: 'https://picsum.photos/800/600?random=109',
            title: 'Technical Implementation',
            bodyType: 'technical-list',
            text: [
                'using Creatush.Tween.Pro;',
                'var seq = new Sequence();',
                'seq.Append(transform.DOMove(target, 1f));',
                'seq.Join(renderer.DOFade(0, 0.5f));',
                'seq.Play();'
            ]
        }
    ],
    storeLink: 'https://assetstore.unity.com/'
  },
  {
    id: 'anim-sync',
    name: 'Animation Synchronizer',
    version: '0.9.8',
    category: 'Utility',
    description: 'Seamlessly synchronize animator states across networked clients. Supports Photon, Mirror, and Netcode for GameObjects.',
    icon: RefreshCw,
    status: 'Development',
    specs: [
        { label: 'Network', value: 'Agnostic' },
        { label: 'Compression', value: 'Bit-packing' },
        { label: 'Setup', value: 'Component-based' }
    ],
    contentBlocks: [
        {
            layout: 'image-left',
            visual: 'https://picsum.photos/800/600?random=105',
            title: 'Deterministic Sync',
            bodyType: 'paragraphs',
            text: [
                'Ensures that animation playback is frame-perfect across all connected clients, compensating for latency and packet loss using predictive algorithms.'
            ]
        }
    ],
    storeLink: 'https://assetstore.unity.com/'
  },
  {
    id: 'bookmarks',
    name: 'The Bookmarks',
    version: '1.0.2',
    category: 'Utility',
    description: 'A productivity booster for level designers. Save and recall Scene View camera positions with customizable hotkeys.',
    icon: Bookmark,
    status: 'Development',
    specs: [
        { label: 'Type', value: 'Editor Extension' },
        { label: 'Storage', value: 'Local/Shared' }
    ],
    contentBlocks: [
        {
            layout: 'image-right',
            visual: 'https://picsum.photos/800/600?random=106',
            title: 'Workflow Acceleration',
            bodyType: 'paragraphs',
            text: [
                'Navigate massive open worlds instantly. Share interesting camera angles with your team via git-friendly config files.'
            ]
        }
    ],
    storeLink: 'https://assetstore.unity.com/'
  },
  {
    id: 'project-architect',
    name: 'Project Architect',
    version: '0.1.0',
    category: 'Pro',
    description: 'Automated project scaffolding tool. Enforce directory structures and naming conventions across your team.',
    icon: DraftingCompass,
    status: 'Development',
    specs: [],
    contentBlocks: [],
    storeLink: 'https://assetstore.unity.com/'
  },
  {
    id: 'psd-importer',
    name: 'PSD Importer',
    version: '0.5.0',
    category: 'Utility',
    description: 'The ultimate bridge between Photoshop and Unity. Preserves layer hierarchy, pivot points, and blend modes.',
    icon: FileImage,
    status: 'Development',
    specs: [],
    contentBlocks: [],
    storeLink: 'https://assetstore.unity.com/'
  }
];