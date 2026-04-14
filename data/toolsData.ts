import { Zap, Layers, RefreshCw, Bookmark, DraftingCompass, FileImage, LucideIcon, Code2 } from 'lucide-react';

export interface ContentBlock {
  layout: 'image-left' | 'image-right' | 'float-left' | 'float-right';
  imageLayout?: 'full' | 'portrait' | 'side-by-side';
  visual: string | string[]; // URL for Image or Video
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
  gitUrl: string;
  downloadUrl: string;
  isPro: boolean;
  price: string;
  purchaseUrl: string;
  videoUrl?: string;
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
      { label: 'Size', value: '126.2 KB' },
      { label: 'Platform', value: 'Unity 2021+' },
      { label: 'Updated', value: '03-03-2026' },
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
    gitUrl: 'https://github.com/matiwDev/TweenVFXsBase.git',
    downloadUrl: 'https://drive.google.com/drive/folders/15uiZzpnhqNRhDYDAphvFLCwhSEZxWwTp',
    isPro: false,
    price: '$0',
    purchaseUrl: '',
    videoUrl: 'https://www.youtube.com/watch?v=jowabFCIzqI'
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
    gitUrl: 'INSERT_GIT_URL_HERE',
    downloadUrl: 'INSERT_DOWNLOAD_URL_HERE',
    isPro: true,
    price: '$25',
    purchaseUrl: 'https://polar.sh/creatush/tween-vfx-pro',
    videoUrl: ''
  },
  {
    id: 'anim-sync',
    name: 'Animation Synchronizer',
    version: '1.0.0',
    category: 'Utility',
    description: 'Animation Synchronizer is an Editor tool built for Technical Artists and Animators who need to fine-tune the timing of complex sequences without constantly entering Play mode.',
    icon: RefreshCw,
    status: 'Active',
    specs: [
        { label: 'Size', value: '3.4 MB' },
        { label: 'Platform', value: 'Unity 2021+' },
        { label: 'Render Pipelines', value: 'All' },
        { label: 'Dependencies', value: 'None' }
    ],
    contentBlocks: [
        {
            layout: 'image-left',
            visual: 'https://lh3.googleusercontent.com/u/0/d/1An7xXe5w0iUIS_LPMEqsiaWZpienz8VW',
            title: 'What it does',
            bodyType: 'paragraphs',
            text: [
                'Drive any number of Animators simultaneously from a single shared timeline. Each clip has an independent start offset (delay) so you can stagger them across the sequence. Looping clips wrap seamlessly for as long as the sequence runs. Non-looping clips hold their last frame. Clips waiting for their offset to be reached hold frame zero, no T-pose surprises.',
                'Particle Systems can be added to the timeline with one click. The tool scrubs them deterministically to any frame and advances them in real-time lockstep with your animations during playback.',
                'No Play mode. No baked data. No scene pollution. When you close the tool, your scene is exactly as you left it.'
            ]
        },
        {
            layout: 'float-right',
            visual: 'https://lh3.googleusercontent.com/u/0/d/1iOl_udNt65IfoDNdGluFkewqF06xdqWi',
            title: 'Transport & Timeline',
            bodyType: 'bullets',
            text: [
                'Visual timeline with colour-coded clip bars and a draggable playhead',
                'Full transport bar: Go to Start, Step Back, Play/Pause, Step Forward, Go to End',
                'Frame-accurate scrubbing —> click or drag anywhere on the timeline',
                'Loop toggle for the full sequence',
                'Variable playback speed from −4× to +4× (reverse included)',
                'Live status badge: PLAYING / PAUSED / STOPPED'
            ]
        },
        {
            layout: 'float-right',
            visual: 'https://lh3.googleusercontent.com/u/0/d/1EE3hh1ew91FGn_7Ewyb_dW2jyF2NVDZo',
            title: 'Features at Glance',
            bodyType: 'bullets',
            text: [
                'Synchronize unlimited Animator components on a shared frame timeline',
                'Per-clip start offset (delay) in frames',
                'Correct looping —> clips flagged isLooping wrap for the full sequence duration',
                'Clips hold frame 0 before their offset is reached (no T-pose artifacts)',
                'Optional Particle System synchronization with auto scene scan',
                'Deterministic particle scrubbing to any frame',
                'Real-time particle advancement during playback',
                'Reverse playback for animators (particles show a warning)',
                'Domain-reload safe —> survives script compilation without losing state',
                'Zero scene pollution —> AnimationMode API, nothing baked or saved',
                'No runtime footprint —> excluded from builds automatically'
            ]
        }
    ],
    gitUrl: 'INSERT_GIT_URL_HERE',
    downloadUrl: 'INSERT_DOWNLOAD_URL_HERE',
    isPro: true,
    price: '$25',
    purchaseUrl: 'https://buy.polar.sh/polar_cl_eZYXO6b65FXPCLQIzS6utjHSDe7MiFlQ3ct4r18bG5T',
    videoUrl: 'https://www.youtube.com/watch?v=StZCMQUxK-4'
  },
  {
    id: 'bookmarks',
    name: 'The Bookmarks',
    version: '1.0.2',
    category: 'Utility',
    description: 'Stop hunting through your project. Bookmark any asset in one drag — organized, color-coded, and always one click away.',
    icon: Bookmark,
    status: 'Active',
    specs: [
        { label: 'Size', value: '236.1 KB' },
        { label: 'Platform', value: 'Unity 2021+' },
        { label: 'Dependencies', value: 'None' },
        { label: 'License', value: 'MIT' }

    ],
    contentBlocks: [
        {
            layout: 'float-right',
            visual: 'https://lh3.googleusercontent.com/u/0/d/1OqI6SkBo3B5_FVDtp39XqD6LnXQcr2jd',
            title: 'Professional-grade Unity Editor tool',
            bodyType: 'paragraphs',
            text: [
                'The Asset Bookmarks brings order to large, complex projects. Instead of endlessly scrolling the Project window or relying on search to find assets you use every day, you bookmark them once and have them permanently at your fingertips in a clean, dockable window.',
                'Drop any asset onto the window and it is instantly sorted into the right category — Scenes, Prefabs, Scripts, Materials, Textures, and more — or choose your own. Color-label assets to signal priority or ownership. Pin your most critical files to a dedicated panel that is always visible at the top. Add inline notes to leave context for yourself or your team. Search across every category simultaneously as you type.'
            ]
        },
        {
            layout: 'float-right',
            visual: 'https://lh3.googleusercontent.com/u/0/d/1Cl5ZByI7It9_Ycyt7kehGrXdKQtHaO8q',
            title: 'Your Asset Command Center',
            bodyType: 'paragraphs',
            text: [
                'Profiles let you maintain completely separate bookmark sets for different disciplines or workflow phases — switch between Art, Gameplay, and Audio contexts in a single click, each backed by its own JSON file. A rolling Recent Assets panel passively tracks the last 15 assets you selected in the Project window, so anything you have touched recently is one click away from becoming a permanent bookmark. Press Ctrl+Shift+B at any time to bookmark your current Project selection without even opening the window. And your bookmarks are automatically saved to JSON every time you enter Play Mode, so nothing is ever lost mid-session.',
                'When an asset is deleted, Asset Bookmarks shows a named red warning row instead of silently removing it — so you always know when something disappears from your workflow. Clean it up on your own terms with a single Purge command.',
                'Built entirely on Unity\'s native Editor APIs with no external dependencies, a dedicated assembly definition, and a clean Creatush.AssetBookmarks namespace — ready to drop into any project without conflicts.',
                'Auto mode is where most people will spend the majority of their time, and for good reason — it simply works. The moment you drop an asset onto the window, the tool reads its file extension and routes it to the correct category without you having to think about it. A .unity file goes straight to Scenes, a .prefab to Prefabs, a .cs to Scripts, and so on across thirty-plus supported extensions. For developers who are in a flow state and just want to bookmark things quickly without breaking their concentration, Auto mode is completely frictionless — drag, drop, done.',
                'Manual mode is where the tool reveals a different kind of power, the power of intent. When you drop assets in Manual mode, the tool pauses and presents a category picker, letting you route a prefab to a custom \"Level Pieces\" category instead of the generic Prefabs bucket, or create a brand new category on the spot without leaving your flow. Beyond how assets arrive, you also control how they sit once they\'re there — drag items up and down within a category to establish your own priority order, or hit \"Sort All Alphabetically\" from the Settings menu to sweep through every category at once. Between the two modes and these sorting options, the tool adapts to however your brain prefers to organize, whether that\'s structured and deliberate or fast and instinctive.'
            ]
        }
    ],
    gitUrl: 'https://github.com/matiwDev/Bookmarks.git',
    downloadUrl: 'https://drive.google.com/drive/folders/1fUUPhAiVtz98vkUFB8ddfFpQSR2HCOBb?usp=sharing',
    isPro: false,
    price: '$0',
    purchaseUrl: '',
    videoUrl: 'https://www.youtube.com/watch?v=ryHC16DHF10'
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
    gitUrl: 'INSERT_GIT_URL_HERE',
    downloadUrl: 'INSERT_DOWNLOAD_URL_HERE',
    isPro: true,
    price: '$15',
    purchaseUrl: 'https://polar.sh/creatush/project-architect',
    videoUrl: ''
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
    gitUrl: 'INSERT_GIT_URL_HERE',
    downloadUrl: 'INSERT_DOWNLOAD_URL_HERE',
    isPro: false,
    price: '$0',
    purchaseUrl: '',
    videoUrl: ''
  }
];