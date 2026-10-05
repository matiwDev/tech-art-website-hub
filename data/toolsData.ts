import {
  Zap,
  Layers,
  RefreshCw,
  Bookmark,
  DraftingCompass,
  FileImage,
  LucideIcon,
  Code2,
  Activity,
  Type,
  LayoutDashboard,
} from "lucide-react";

export interface ContentBlock {
  layout:
    | "image-left"
    | "image-right"
    | "image-top"
    | "image-bottom"
    | "float-left"
    | "float-right";
  imageLayout?: "full" | "portrait" | "side-by-side";
  visual: string | string[]; // URL for Image or Video
  mediaType?: "image" | "video"; // Explicitly set media type
  videoUrl?: string; // Optional video URL for block
  title?: string;
  bodyType: "paragraphs" | "bullets" | "technical-list";
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
  category: "Lite" | "Pro" | "Utility";
  description: string;
  icon: LucideIcon;
  status: "Active" | "Development";
  specs: ToolSpec[];
  contentBlocks: ContentBlock[];
  gitUrl: string;
  downloadUrl: string;
  isPro: boolean;
  price: string;
  purchaseUrl: string;
  videoUrl?: string;
  imageUrl?: string;
}

export const toolsData: Tool[] = [
  {
    id: "tween-vfx-lite",
    name: "Tween VFX (Lite)",
    version: "1.2.4",
    category: "Lite",
    description:
      "An ultra-lightweight tweening framework designed for high-performance flexible UI animations.",
    icon: Zap,
    status: "Active",
    specs: [
      { label: "Size", value: "126.2 KB" },
      { label: "Platform", value: "Unity 2021+" },
      { label: "Updated", value: "03-03-2026" },
      { label: "License", value: "MIT" },
    ],
    contentBlocks: [
      {
        layout: "image-left",
        visual:
          "https://lh3.googleusercontent.com/u/0/d/1wMyjI5QKIzAaMoVEJ9qmHuzKWKLPkn8n",
        title: "Decoupled Animation Architecture",
        bodyType: "paragraphs",
        text: [
          'The Creatush Tween System introduces a "Plug-and-Play" workflow that finally separates your game logic from your visual polish. Instead of burying animation code inside your gameplay scripts, our system uses a modular behavior-based approach. This ensures a cleaner codebase and a faster iteration cycle.',
          'Unlike rigid animation systems, our behaviors are hierarchy-aware. By utilizing a "Smart Controller" logic, the system automatically detects whether a behavior lives on a parent or a child object. This allows for complex, multi-layered animations—like a menu panel popping in while its buttons pulse independently—all managed by a single controller without a single line of extra code.',
        ],
      },
      {
        layout: "image-right",
        visual:
          "https://lh3.googleusercontent.com/u/0/d/1vh8frPEq2omMmcKjFDnMilHrRmVFDYbZ",
        title: "Designer-First Workflow Tools",
        bodyType: "paragraphs",
        text: [
          'To keep your project healthy, our custom Editor suite acts as a silent partner in your development. If a behavior is added to an object without a controller, the Inspector provides an immediate visual warning and a one-click "Quick-Fix" button to inject the correct controller automatically. This eliminates common setup errors and makes the tool instantly accessible to artists and designers.',
          "The Creatush controllers are designed for clarity at a glance. By utilizing custom Inspector layouts, the system allows you to manage delays, join-logic, and target overrides without the clutter of a standard Unity list. Whether you are managing a single button hover or a complex treasure chest sequence, the workflow remains clean, visual, and highly organized.",
        ],
      },
    ],
    gitUrl: "https://github.com/matiwDev/TweenVFXsBase.git",
    downloadUrl:
      "https://drive.google.com/drive/folders/15uiZzpnhqNRhDYDAphvFLCwhSEZxWwTp",
    isPro: false,
    price: "$0",
    purchaseUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=jowabFCIzqI",
  },
  {
    id: "tween-vfx-pro",
    name: "Tween VFX (Pro)",
    version: "2.1.0",
    category: "Pro",
    description:
      "Built on top of DOTween, TweenEffects Pro turns animation work in Unity into something you assemble instead of something you code. Every polish pass a project needs, a button that punches on hover, a card that slides and fades into place, a reward that pops out of a chest and flies to the player's inventory. There's no animation-specific scripting to write and no tangle of coroutines to maintain. Effects are lightweight, reusable, and fully data-driven.",
    icon: Layers,
    status: "Active",
    specs: [
      { label: "Size", value: "10.1 MB" },
      { label: "Platform", value: "Unity 2021+" },
      { label: "Updated", value: "05-09-2026" },
      { label: "Dependencies", value: "DOTween library" },
    ],
    contentBlocks: [
      {
        layout: "float-left",
        visual: "https://res.cloudinary.com/djcksi74n/image/upload/v1789419032/TweenMasterController_ct0tte.png",
        title: "The Master Controller",
        bodyType: "paragraphs",
        text: [
          "Everything runs through one component: the Master Sequence Controller. You add a step, assign it an effect, and choose how it starts. Right after the previous step, with a deliberate pause, or overlapping it by a set amount. Point that same step at one object, an explicit list of objects, or every child of a container, and it staggers across all of them automatically. Sequential chains, parallel bursts, and staggered cascades aren't different systems to learn, they're just settings on a step.",
          'The controller plans and previews the whole timeline before anything plays. A built-in preview lays out every step visually, so the timing of a complex animation is obvious at a glance rather than something you have to run the game to feel out. Auto-play triggers, looping (including restart, ping-pong, and incremental loop styles), and reverse playback are all handled centrally, and Play/Stop/Reverse controls are available right in the editor for fast iteration without entering Play Mode. For teams that reuse the same animation across many prefabs (a shared hover effect, a common popup transition) individual effects can be saved as standalone presets and organized into a named catalogue, so any object in the project can trigger "MenuSlideIn" or "CoinPop" by name instead of re-authoring it from scratch.',
        ],
      },
      {
        layout: "float-right",
        visual: "",
        title: "The Master Controller",
        bodyType: "paragraphs",
        text: [
          "TweenEffects Pro ships with a broad library covering the moves most games actually reach for: position and transform moves, scale pops with springy overshoot, punch and bounce impacts with configurable squash and stretch, shake with independent position, rotation, and scale control, and smooth orbiting around a pivot point. On the visual side, it covers fades, color tints, crossfades between two states, fill-amount reveals for radial or linear bars, and sprite swapping or full sprite-sheet animation. Every one of these is configurable in the same way, with a consistent set of duration and easing controls — including the option to draw a fully custom easing curve when a built-in ease preset isn't quite the right feel.",
        ],
      },
      {
        layout: "float-right",
        visual: "https://res.cloudinary.com/djcksi74n/image/upload/v1789412567/ChatGPT_Image_Sep_8_2026_12_47_38_PM_a5xikd.png",
        title: "Spline Path: Motion That Follows a Real Curve",
        bodyType: "paragraphs",
        text: [
          "Not every animation is a straight line, and Spline Path is TweenEffects Pro's answer to motion that needs to bend, arc, or wind through a scene with real, painterly control. Rather than approximating a curve with a chain of straight moves, this effect drives an object smoothly along a proper spline path, a series of editable knots placed directly in the Scene view, complete with on-canvas handles for adjusting the shape without touching a single number in the inspector. The result reads as genuinely fluid motion rather than a mechanical multi-step tween, which makes it a natural fit for anything that needs to feel hand-crafted: a UI panel that sweeps into place along a graceful arc, a camera move that glides through a scene, a collectible that spirals in toward the player, or a patrol path for an enemy or companion that needs to loop cleanly and predictably.",
        ],
      },
      {
        layout: "float-left",
        visual: "https://res.cloudinary.com/djcksi74n/image/upload/v1789412566/ChatGPT_Image_Sep_9_2026_11_30_50_AM_qnz0w5.png",
        title: "Flying Rewards: The Reward Moment, Solved",
        bodyType: "paragraphs",
        text: [
          "Few animations matter as much to how a game feels as the reward burst. Coins spilling out of a chest and racing to the wallet, cards flying into a hand, XP orbs streaming toward a bar. TweenEffects Pro builds this exact moment into a single effect, Flying Rewards, that would otherwise take real engineering time to get right: object pooling, staggered spawning, arc trajectories, and cleanup, all wired together correctly.",
          "Trigger it once and it spawns a full burst of pooled items from a source point, scattering them outward with configurable randomness so the burst never looks mechanically uniform. Each item can pop in with a springy scale animation, hover and drift for a moment with its own gentle floating motion, and then launch along a true parabolic arc toward a destination with per-item variance in arc height so a burst of ten items never traces the exact same path twice. Items can optionally cycle through a sprite sheet as they fly, for a shimmering coin-spin or animated icon effect, and the whole burst is staggered on both the way out and the way in, so it reads as a shower of rewards rather than a single object being cloned. Events fire as each item arrives and once the entire burst has landed, ready to hook into a sound cue, a counter tick-up, or a UI flourish the moment the reward actually lands.",
          "Under the hood, every item comes from a managed object pool rather than being instantiated and destroyed on the fly, so a burst effect that fires constantly (coins on every kill, XP on every match) stays fast and garbage-free even during the busiest moments of play. It's the kind of effect that's genuinely tedious to build well from scratch, available here as a component you configure once and reuse everywhere a reward needs to feel satisfying.",
        ],
      },
      {
        layout: "image-left",
        visual: "",
        title: "Why TweenEffects Pro",
        bodyType: "technical-list",
        text: [
          "One controller, a full effects library.",
          "Effects are data, not scripts.",
          "See the timeline before you play it.",
          "Build once, reuse everywhere.",
          "Precise, expressive easing.",
          "Real curved motion with Spline Path.",
          "A production-ready reward system out of the box.",
        ],
      },
    ],
    gitUrl: "https://github.com/matiwDev/TweenVFXsPro.git",
    downloadUrl: "https://drive.google.com/drive/folders/1rPGD0T6lK0VwclruXTX6rvEYY4p1eeQH?usp=sharing",
    isPro: true,
    price: "$0",
    purchaseUrl: "",
    imageUrl: "https://res.cloudinary.com/djcksi74n/image/upload/v1789412569/ChatGPT_Image_Sep_8_2026_11_37_36_AM_k3vd51.png",
  },
  {
    id: "anim-sync",
    name: "Animation Synchronizer",
    version: "1.0.0",
    category: "Utility",
    description:
      "Animation Synchronizer is an Editor tool built for Technical Artists and Animators who need to fine-tune the timing of complex sequences without constantly entering Play mode.",
    icon: RefreshCw,
    status: "Active",
    specs: [
      { label: "Size", value: "3.4 MB" },
      { label: "Platform", value: "Unity 2021+" },
      { label: "Render Pipelines", value: "All" },
      { label: "Dependencies", value: "None" },
    ],
    contentBlocks: [
      {
        layout: "image-left",
        visual:
          "https://lh3.googleusercontent.com/u/0/d/1An7xXe5w0iUIS_LPMEqsiaWZpienz8VW",
        title: "What it does",
        bodyType: "paragraphs",
        text: [
          "Drive any number of Animators simultaneously from a single shared timeline. Each clip has an independent start offset (delay) so you can stagger them across the sequence. Looping clips wrap seamlessly for as long as the sequence runs. Non-looping clips hold their last frame. Clips waiting for their offset to be reached hold frame zero, no T-pose surprises.",
          "Particle Systems can be added to the timeline with one click. The tool scrubs them deterministically to any frame and advances them in real-time lockstep with your animations during playback.",
          "No Play mode. No baked data. No scene pollution. When you close the tool, your scene is exactly as you left it.",
        ],
      },
      {
        layout: "float-right",
        visual:
          "https://lh3.googleusercontent.com/u/0/d/1iOl_udNt65IfoDNdGluFkewqF06xdqWi",
        title: "Transport & Timeline",
        bodyType: "bullets",
        text: [
          "Visual timeline with colour-coded clip bars and a draggable playhead",
          "Full transport bar: Go to Start, Step Back, Play/Pause, Step Forward, Go to End",
          "Frame-accurate scrubbing —> click or drag anywhere on the timeline",
          "Loop toggle for the full sequence",
          "Variable playback speed from −4× to +4× (reverse included)",
          "Live status badge: PLAYING / PAUSED / STOPPED",
        ],
      },
      {
        layout: "float-right",
        visual:
          "https://lh3.googleusercontent.com/u/0/d/1EE3hh1ew91FGn_7Ewyb_dW2jyF2NVDZo",
        title: "Features at Glance",
        bodyType: "bullets",
        text: [
          "Synchronize unlimited Animator components on a shared frame timeline",
          "Per-clip start offset (delay) in frames",
          "Correct looping —> clips flagged isLooping wrap for the full sequence duration",
          "Clips hold frame 0 before their offset is reached (no T-pose artifacts)",
          "Optional Particle System synchronization with auto scene scan",
          "Deterministic particle scrubbing to any frame",
          "Real-time particle advancement during playback",
          "Reverse playback for animators (particles show a warning)",
          "Domain-reload safe —> survives script compilation without losing state",
          "Zero scene pollution —> AnimationMode API, nothing baked or saved",
          "No runtime footprint —> excluded from builds automatically",
        ],
      },
    ],
    gitUrl: "",
    downloadUrl: "",
    isPro: true,
    price: "$0",
    purchaseUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=StZCMQUxK-4",
  },
  {
    id: "bookmarks",
    name: "The Bookmarks",
    version: "1.0.2",
    category: "Utility",
    description:
      "Stop hunting through your project. Bookmark any asset in one drag — organized, color-coded, and always one click away.",
    icon: Bookmark,
    status: "Active",
    specs: [
      { label: "Size", value: "236.1 KB" },
      { label: "Platform", value: "Unity 2021+" },
      { label: "Dependencies", value: "None" },
      { label: "License", value: "MIT" },
    ],
    contentBlocks: [
      {
        layout: "float-right",
        visual:
          "https://lh3.googleusercontent.com/u/0/d/1OqI6SkBo3B5_FVDtp39XqD6LnXQcr2jd",
        title: "Professional-grade Unity Editor tool",
        bodyType: "paragraphs",
        text: [
          "The Asset Bookmarks brings order to large, complex projects. Instead of endlessly scrolling the Project window or relying on search to find assets you use every day, you bookmark them once and have them permanently at your fingertips in a clean, dockable window.",
          "Drop any asset onto the window and it is instantly sorted into the right category — Scenes, Prefabs, Scripts, Materials, Textures, and more — or choose your own. Color-label assets to signal priority or ownership. Pin your most critical files to a dedicated panel that is always visible at the top. Add inline notes to leave context for yourself or your team. Search across every category simultaneously as you type.",
        ],
      },
      {
        layout: "float-right",
        visual:
          "https://lh3.googleusercontent.com/u/0/d/1Cl5ZByI7It9_Ycyt7kehGrXdKQtHaO8q",
        title: "Your Asset Command Center",
        bodyType: "paragraphs",
        text: [
          "Profiles let you maintain completely separate bookmark sets for different disciplines or workflow phases — switch between Art, Gameplay, and Audio contexts in a single click, each backed by its own JSON file. A rolling Recent Assets panel passively tracks the last 15 assets you selected in the Project window, so anything you have touched recently is one click away from becoming a permanent bookmark. Press Ctrl+Shift+B at any time to bookmark your current Project selection without even opening the window. And your bookmarks are automatically saved to JSON every time you enter Play Mode, so nothing is ever lost mid-session.",
          "When an asset is deleted, Asset Bookmarks shows a named red warning row instead of silently removing it — so you always know when something disappears from your workflow. Clean it up on your own terms with a single Purge command.",
          "Built entirely on Unity's native Editor APIs with no external dependencies, a dedicated assembly definition, and a clean Creatush.AssetBookmarks namespace — ready to drop into any project without conflicts.",
          "Auto mode is where most people will spend the majority of their time, and for good reason — it simply works. The moment you drop an asset onto the window, the tool reads its file extension and routes it to the correct category without you having to think about it. A .unity file goes straight to Scenes, a .prefab to Prefabs, a .cs to Scripts, and so on across thirty-plus supported extensions. For developers who are in a flow state and just want to bookmark things quickly without breaking their concentration, Auto mode is completely frictionless — drag, drop, done.",
          'Manual mode is where the tool reveals a different kind of power, the power of intent. When you drop assets in Manual mode, the tool pauses and presents a category picker, letting you route a prefab to a custom \"Level Pieces\" category instead of the generic Prefabs bucket, or create a brand new category on the spot without leaving your flow. Beyond how assets arrive, you also control how they sit once they\'re there — drag items up and down within a category to establish your own priority order, or hit \"Sort All Alphabetically\" from the Settings menu to sweep through every category at once. Between the two modes and these sorting options, the tool adapts to however your brain prefers to organize, whether that\'s structured and deliberate or fast and instinctive.',
        ],
      },
    ],
    gitUrl: "https://github.com/matiwDev/Bookmarks.git",
    downloadUrl:
      "https://drive.google.com/drive/folders/1fUUPhAiVtz98vkUFB8ddfFpQSR2HCOBb?usp=sharing",
    isPro: false,
    price: "$0",
    purchaseUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=ryHC16DHF10",
  },
  {
    id: "parallax",
    name: "2D Parallax",
    version: "0.1.0",
    category: "Pro",
    description:
      "Add parallax depth to any uGUI ScrollRect. Layers of backgrounds and props move at their own speeds as the Content scrolls, whether the player drags, flings, or you move it from a script. Optional randomized object pooling for clouds, trees, and scenery.",
    icon: DraftingCompass,
    status: "Active",
    specs: [
      { label: "Content", value: "Complete System and more" },
      { label: "Platform", value: "Unity 2019.4+" },
      { label: "Dependencies", value: "None" },
      { label: "License", value: "MIT" },
    ],
    contentBlocks: [
      {
        layout: "float-right",
        visual:
          "https://res.cloudinary.com/djcksi74n/video/upload/v1791218888/verticalParallax_p3b0gt.mov",
        title: "Overview",
        bodyType: "paragraphs",
        text: [
          "Creatush 2D Parallax gives scrolling UI levels a sense of depth without touching your existing setup. Your Content keeps its Layout Group and Content Size Fitter. The tool watches how the Content moves and passes that movement to any number of parallax layers. Those layers sit outside the Content, so they can live on their own canvas, sorting order, or anywhere in your hierarchy.",
        ],
      },
      {
        layout: "float-right",
        visual:
          "",
        title: "Key features",
        bodyType: "bullets",
        text: [
          "Works with any kind of movement. Drag, inertia, tweens, coroutines, or snapping to a level all drive the effect the same way.",
          "Per-element depth control. Set a movement factor for each element, from fixed sky to fast foreground, with independent X and Y.",
          "Layers stay independent of your content. Nothing is parented to the ScrollRect Content, so your layout and level chunks stay untouched.",
          "Optional randomized pooling. Spawn clouds, birds, rocks, or foliage at random positions and scales. A fixed pool is recycled at the screen edges, so there is no runtime Instantiate or Destroy.",
          "Works in both directions. Recycling follows position, so it holds up even if the scroll direction reverses.",
          "Depth visuals. Fade and tint distant layers to reinforce depth.",
          "Visual variety. A drop-in helper randomizes sprite, color, and flip each time an element is recycled.",
          "Small runtime API. Add or remove targets, swap sources, and reset tracking after teleporting the Content.",
          "Built for performance. No per-frame allocations, and work only happens when the Content moves.",
          "Clean integration. Ships with its own assembly definition and full documentation.",
        ],
      },
    ],
    gitUrl: "",
    downloadUrl: "",
    isPro: true,
    price: "$0",
    purchaseUrl: "",
    imageUrl: "https://res.cloudinary.com/djcksi74n/image/upload/v1791218295/2D_Parallax_Asset_Showcase_fjmave.png",
  },
  {
    id: "shaders-bundle",
    name: "Shaders Bundle",
    version: "0.5.0",
    category: "Utility",
    description:
      "A complete UI & 2D shader toolkit for Unity URP — hand-coded HLSL, or fully node-based Shader Graph. Your choice.",
    icon: FileImage,
    status: "Active",
    specs: [
      { label: "Content", value: "20+ shaders" },
      { label: "Platform", value: "Unity 6+" },
      { label: "Dependencies", value: "ShaderGraph" },
      { label: "License", value: "MIT" },
    ],
    contentBlocks: [
      {
        layout: "float-right",
        visual:
          "https://res.cloudinary.com/djcksi74n/image/upload/v1790280830/ChatGPT_Image_Sep_24_2026_10_49_23_PM_l7qd6v.png",
        title: "Production Ready",
        bodyType: "paragraphs",
        text: [
          "This bundle gives you a full library of shaders for UI panels, sprites, and effects, built for Unity 6 and URP from the ground up. Eeach one comes with its own clean, organized custom Inspector instead of a wall of unlabeled sliders, so you can actually find the setting you need. Gradients are edited with Unity's native Gradient Editor and baked automatically behind the scenes. No manually painting gradient textures ever again. Every shader plays correctly with Canvas masking, scroll views, and sprite masks out of the box.",
        ],
      },
      {
        layout: "float-right",
        visual:
          "https://res.cloudinary.com/djcksi74n/image/upload/v1790280831/ChatGPT_Image_Sep_24_2026_10_49_35_PM_sctjui.png",
        title: "Essential and Reusable",
        bodyType: "paragraphs",
        text: [
          "At the core is RoundedRect — an SDF-based rounded rectangle with fully independent per-corner radii, a solid or gradient fill with adjustable softness and opacity, two independently configurable outlines, and a built-in drop shadow. It's the single shader most UI panels, buttons, and cards in your game will probably use. For anything that needs to move or shine, RadialRays delivers animated radial or angular ray bursts with a fully custom baked-gradient color ramp and built-in rotation/sweep animation — perfect for loading spinners, sunburst backgrounds, and power-up glows. And when a sprite needs more than one trick at once, UberSprite combines seven effects — Mirror, Pixelate, HSV/grayscale, Dissolve, Hit Flash, Outline, and Shine Sweep — into a single shader with independent on/off toggles, so you stop juggling a different material for every combination of effects your character or icon needs. SpriteExtension covers the simpler everyday case: grayscale, color overlay, two outlines, and a soft shadow on any sprite, dialed in purely by width and alpha, no toggles to hunt for.",
        ],
      },
      {
        layout: "float-right",
        visual:
          "https://res.cloudinary.com/djcksi74n/image/upload/v1790280832/ChatGPT_Image_Sep_24_2026_10_49_49_PM_i7frix.png",
        title: "ShaderGraph",
        bodyType: "paragraphs",
        text: [
          "Alongside the hand-written shaders, the bundle includes a full parallel set built in Shader Graph — node-based versions of the same core effects for teams who'd rather remix visually than touch code. But it's not just a 1:1 port: you also get shaders that only exist on the Shader Graph side, including OutlineFill and a node-based Mirror, plus the standout of the collection — a rounded-panel shader built from fully floating, independently editable panels. Instead of a fixed set of outlines, each panel layer can be repositioned, resized, and recolored on its own, giving you near-limitless creative flexibility for building layered, stylized UI compositions straight out of the graph.",
        ],
      },
    ],
    gitUrl: "https://github.com/matiwDev/ShadersBundle.git",
    downloadUrl: "",
    isPro: false,
    price: "$0",
    purchaseUrl: "",
    videoUrl: "",
  },
  {
    id: "files-profiler",
    name: "Files Profiler",
    version: "1.0.0",
    category: "Utility",
    description:
      "It's a Unity editor window that scans your project to find unused assets and duplicate files across every asset type. then lets you safely merge duplicates or swap any asset's GUID references project-wide.",
    icon: Activity,
    status: "Active",
    specs: [
      { label: "Platform", value: "Unity 2021+" },
      { label: "Dependencies", value: "None" },
      { label: "License", value: "MIT" },
    ],
    contentBlocks: [
      {
        layout: "image-top",
        visual: "https://lh3.googleusercontent.com/u/0/d/143OcRgcKyOIIYSU7TtqyvNYSJyU2hsoX",
        title: "Overview",
        bodyType: "paragraphs",
        text: [
          "Every Unity project accumulates dead weight. Textures imported and forgotten, audio clips re-exported under a new name, materials nobody deleted after a redesign — it all sits in Assets/ quietly bloating your build and slowing down every search. Files Profiler scans your entire project, or just the folder you care about, and tells you exactly which files have zero references anywhere — across materials, prefabs, scenes, animator controllers, and ScriptableObjects — so cleanup stops being guesswork.",
        ],
      },
      {
        layout: "float-right",
        visual:
          "https://lh3.googleusercontent.com/u/0/d/15VcxWdYXwVvGb43YqC73nxm9lb0nqaOR",
        title: "Comprehensive and Clear",
        bodyType: "paragraphs",
        text: [
          "Beyond unused files, it finds the duplicates: the same texture imported five times into five different folders, an audio clip copy-pasted instead of shared, a material cloned instead of reused. Each duplicate group shows exactly how much disk space is being wasted, and lets you choose which copy survives. Select the redundant ones, merge them into the keeper with one click, and optionally have the leftover files deleted automatically the moment the merge completes.",
          "It covers every asset type your project actually has — textures, audio, models, materials, prefabs, animations, shaders, fonts, ScriptableObjects, scenes, and scripts — each with its own scoped view, or all of them combined in one pass. Scan a single category when you're focused on one thing, or the whole project when you want the full picture; results merge in incrementally so nothing you've already found gets thrown away. Built entirely on Unity's own AssetDatabase, it ships as a single editor-only window with zero third-party dependencies.",
        ],
      },
      {
        layout: "float-right",
        visual:
          "https://lh3.googleusercontent.com/u/0/d/1STStYc1MGiKYmHkqfs2j55reIcgniTTC",
        title: "Practical and Safe",
        bodyType: "paragraphs",
        text: [
          "At the center of it all is GUID Swap — the mechanism that makes merging possible without touching a single material or prefab by hand. Drag any asset (or a whole folder) into the picker, mark one file as the source and another as the replacement, and Files Profiler rewrites every reference across your project to point at the new file instead. Preview the exact list of files that will change before committing, with automatic .bak backups for peace of mind.",
        ],
      },
      {
        layout: "float-right",
        visual: "",
        title: "Core Features",
        bodyType: "bullets",
        text: [
          "Universal asset scanning — covers Textures, Audio, Models, Materials, Prefabs, Animation, Shaders, Fonts, Data Assets, Scenes, and Scripts, each with its own filterable view, or combine them all in one pass.",
          "Unused asset detection — finds every file with zero references anywhere in your project's materials, prefabs, scenes, and controllers, with one-click batch deletion and a live selected-size summary.",
          "Duplicate detection — groups files by exact content hash or filename match, showing wasted disk space per group.",
          'Multi-duplicate merge — select any subset of a duplicate group, redirect them all to one chosen "keep" file in a single action, with optional auto-delete of the redundant copies afterward.',
          "Project-wide GUID Swap — re-point any asset's references to a different asset across every material, prefab, and scene, with a drag-and-drop picker that accepts any file type or whole folders.",
          "Safety-first workflow — every destructive action supports a dry-run preview and automatic .bak backups before writing changes to disk.",
          "Flexible scan scope — scan a single category for speed, or the whole project in one pass; results merge in per category without discarding prior scans.",
          "Zero dependencies — pure Unity Editor window built on AssetDatabase, no third-party packages, Editor-only so nothing ships in builds.",
        ],
      },
    ],
    gitUrl: "https://github.com/matiwDev/FilesProfiler.git",
    downloadUrl: "https://drive.google.com/drive/folders/1aDwHDoOuZz7-0P-9qWtoPSz22Baap41p?usp=sharing",
    isPro: false,
    price: "$0",
    purchaseUrl: "",
    videoUrl: "",
  },
  {
    id: "tween-tmp-vfx-pro",
    name: "TMP Extensions",
    version: "0.1.0",
    category: "Pro",
    description:
      "A high-fidelity procedural motion framework built to handle sophisticated typography animations and dynamic text shader effects inside TMPro ecosystems.",
    icon: Type,
    status: "Development",
    specs: [],
    contentBlocks: [],
    gitUrl: "",
    downloadUrl: "",
    isPro: true,
    price: "$0",
    purchaseUrl: "",
    videoUrl: "",
  },
  {
    id: "custom-layouts",
    name: "Custom Layout",
    version: "0.1.0",
    category: "Utility",
    description:
      "Three deterministic Unity UI layout systems built for real game interfaces. Pure-math calculators. Live editor preview. Professional inspectors",
    icon: LayoutDashboard,
    status: "Active",
    specs: [
      { label: "Platform", value: "Unity 6+" },
      { label: "Dependencies", value: "None" },
      { label: "License", value: "MIT" },
    ],
    contentBlocks: [
      {
        layout: "float-left",
        visual: "",
        title: "Responsive Navbar",
        bodyType: "paragraphs",
        text: [
          "A horizontal tab bar that distributes items responsively across any container width. The selected tab expands independently of its neighbours. A mirrored Selected container overlays the layout for full design freedom.",
        ],
      },
      {
        layout: "float-left",
        visual: "",
        title: "",
        bodyType: "bullets",
        text: [
          "Selected tab grows by extra width/height",
          "Optional redistribution across all tab roots",
          "Edge-handling: inset and padding at screen boundaries",
          "Max tab width cap with automatic centring",
          "Locked tabs block navigation",
          "Live edit-mode preview with tab slider",
        ],
      },
      {
        layout: "float-left",
        visual: "",
        title: "Radial Layout",
        bodyType: "paragraphs",
        text: [
          "Places items on a configurable arc or full ring using a parametric ellipse. Supports oval shapes, angular spacing compression, and four item orientation modes. The selected item pushes outward and scales independently.",
        ],
      },
      {
        layout: "float-left",
        visual: "",
        title: "",
        bodyType: "bullets",
        text: [
          "Configurable start / end angle (0 = 12 o'clock)",
          "RadiusX / RadiusY for circle or oval display",
          "Angular spacing compresses items inward from endpoints",
          "Orientations: None, FaceOutward, FaceInward, Custom",
          "Selected item: radius offset + independent scale",
          "Live edit-mode arc preview",
        ],
      },
      {
        layout: "float-left",
        visual: "",
        title: "Carousel Layout",
        bodyType: "paragraphs",
        text: [
          "A momentum-based circular carousel with continuous drag, velocity decay, per-frame item boundary commits, and snap-to-item. Depth and alpha fall off via AnimationCurves. The row can optionally bend into an arc.",
        ],
      },
      {
        layout: "float-left",
        visual: "",
        title: "",
        bodyType: "bullets",
        text: [
          "Drag shifts items continuously; items snap past one at a time",
          "Friction controls how many items a fast swipe crosses",
          "AnimationCurve scale and alpha depth effect",
          "Horizontal or vertical orientation",
          "Optional arc: concave / convex row bending",
          "Per-item ActionButton fires onItemConfirmed event",
          "Swipe via dedicated Image (New + Legacy Input System)",
          "Optional prev/next Button wiring",
        ],
      },
    ],
    gitUrl: "https://github.com/matiwDev/CustomLayouts.git",
    downloadUrl: "",
    isPro: false,
    price: "$0",
    purchaseUrl: "",
    imageUrl: "https://res.cloudinary.com/djcksi74n/image/upload/v1789640723/LayoutsPromo_bbos4u.png",
  },
];
