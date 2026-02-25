export interface BlogBlock {
  type: 'heading' | 'subheading' | 'paragraph' | 'code' | 'list';
  content: string | string[];
}

export interface BlogComment {
  user: string;
  initials: string;
  timeAgo: string;
  content: string;
  avatarColor: string; // Tailwind class string for border/text
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  proTip?: string;
  blocks: BlogBlock[];
  comments?: BlogComment[];
}

export const blogData: BlogPost[] = [
  {
    id: 'ui-white-sprites',
    title: 'Modular Architecture',
    date: 'Jan 23, 2025',
    category: 'Tech Art Foundations',
    proTip: "Features are temporary, responsibilities are architectural. If you build systems around responsibilities, your framework becomes flexible by design, not by accident.",
    blocks: [
      { type: 'subheading', content: 'Why Modular & Independent Systems Win Long-Term' },
      { type: 'paragraph', content: 'As projects grow inside Unity, complexity compounds fast. What starts as a few scripts and managers can quickly turn into tightly coupled systems that are fragile, hard to extend, and painful to debug.' },
      { type: 'paragraph', content: 'Strong framework architecture isn’t about over-engineering. It’s about modularity, independence, and clean contracts between systems.' },
      { type: 'subheading', content: 'What Is a Modular Framework?' },
      { type: 'paragraph', content: 'A modular architecture means:' },
      { type: 'list', content: [
        'Systems are self-contained',
        'Dependencies are explicit',
        'Communication happens through interfaces or events',
        'Features can be added or removed without breaking others'
      ]},
      { type: 'paragraph', content: 'Each system owns:' },
      { type: 'list', content: [
        'Its data',
        'Its logic',
        'Its lifecycle'
      ]},
      { type: 'paragraph', content: 'No hidden cross-dependencies. No spaghetti.' },
      { type: 'subheading', content: 'Modular Systems Promote Flexibility' },
      { type: 'paragraph', content: 'When systems are independent:' },
      { type: 'list', content: [
        'UI can change without touching gameplay',
        'Gameplay rules can evolve without breaking VFX',
        'You can swap implementations easily',
        'Prototyping becomes faster',
        'Parallel team work becomes safer'
      ]},
      { type: 'paragraph', content: 'Modularity enables iteration velocity.' },
      { type: 'subheading', content: 'Scalability Comes From Boundaries' },
      { type: 'paragraph', content: 'Clear boundaries allow:' },
      { type: 'list', content: [
        'Feature expansion without rewriting core',
        'Cleaner integration of new platforms',
        'Easier outsourcing',
        'More predictable maintenance'
      ]},
      { type: 'subheading', content: 'Cleaner Code Is a Side Effect' },
      { type: 'paragraph', content: 'Modular systems naturally produce:' },
      { type: 'list', content: [
        'Smaller classes',
        'Single-responsibility components',
        'Testable logic',
        'Fewer side effects',
        'More readable architecture'
      ]},
      { type: 'paragraph', content: 'You don’t get clean code by enforcing style guides.' },
      { type: 'paragraph', content: 'You get it by enforcing system boundaries.' },
      { type: 'heading', content: 'Technical Artist Perspective' },
      { type: 'paragraph', content: 'As a Technical Artist, modular architecture helps you:' },
      { type: 'list', content: [
        'Isolate rendering systems from gameplay logic',
        'Build reusable shader/VFX pipelines',
        'Create scalable UI frameworks',
        'Introduce performance improvements safely',
        'Maintain predictable asset flows'
      ]},
      { type: 'subheading', content: 'Clean architecture protects both visuals and performance.' },
    ],
    comments: [
        { user: "CanvasCruiser", initials: "CC", timeAgo: "2 hours ago", content: "This is spot on. We refactored our project mid-production because UI, gameplay, and economy were tightly coupled. It slowed us down for months. Once we split systems by responsibility and introduced proper interfaces, feature velocity improved almost immediately. Modular architecture really is a production multiplier.", avatarColor: "text-blue-400 border-blue-500/20 bg-blue-900/20" },
        { user: "PixelPerfect", initials: "PP", timeAgo: "5 hours ago", content: "Love the “responsibilities over features” mindset. In our last project, decoupling VFX from gameplay logic made it much easier to iterate on visuals without breaking mechanics.", avatarColor: "text-green-400 border-green-500/20 bg-green-900/20" }
    ]
  },
  {
    id: 'sprite-atlases-pot',
    title: 'Texture Optimization 101',
    date: 'Dec 25, 2025',
    category: 'Tech Art Foundations',
    proTip: "Non-Power-of-Two (NPOT) textures cannot be compressed by hardware on iOS/Android. You are wasting 4x memory.",
    blocks: [
      { type: 'paragraph', content: 'Textures are usually the largest memory consumer in a project built with Unity. Poor decisions in compression, resolution, or sizing can silently destroy performance — especially on constrained platforms.' },
      { type: 'paragraph', content: 'As a Technical Artist, texture discipline is one of your highest-impact optimization levers.' },
      { type: 'subheading', content: 'Compression: The First Rule Is “Always Compress”' },
      { type: 'paragraph', content: 'Uncompressed textures:' },
      { type: 'list', content: [
        'Increase memory footprint',
        'Increase bandwidth usage',
        'Slow down load times',
        'Hurt GPU cache efficiency'
      ]},
      { type: 'paragraph', content: 'Each platform supports different GPU-native formats.' },
      { type: 'subheading', content: 'Mobile' },
      { type: 'paragraph', content: 'Recommended:' },
      { type: 'list', content: [
        'ASTC (best quality/size ratio, modern devices)',
        'ETC2 (fallback for older Android)',
        'PVRTC (older iOS devices)'
      ]},
      { type: 'paragraph', content: 'Guidelines:' },
      { type: 'list', content: [
        'Prefer ASTC 6x6 or 8x8 for most textures',
        'Use 4x4 only for UI or high-detail assets',
        'Avoid large alpha channels unless required',
        'Be aggressive with compression — mobile is often bandwidth-bound'
      ]},
      { type: 'paragraph', content: 'Mobile GPUs are typically tile-based and memory-sensitive.' },
      { type: 'subheading', content: 'WebGL' },
      { type: 'paragraph', content: 'Recommended:' },
      { type: 'list', content: [
        'ETC2 (WebGL 2.0)',
        'Avoid large uncompressed RGBA textures'
      ]},
      { type: 'paragraph', content: 'Guidelines:' },
      { type: 'list', content: [
        'Keep atlas sizes reasonable (2048 max when possible)',
        'Avoid 4K textures',
        'Test in-browser memory usage',
        'Prefer compressed normal maps'
      ]},
      { type: 'paragraph', content: 'WebGL is constrained by browser memory and download size. Texture size directly impacts load time and crash risk.' },
      { type: 'subheading', content: 'Consoles' },
      { type: 'paragraph', content: 'Recommended:' },
      { type: 'list', content: [
        'BCn formats (BC1, BC3, BC5, BC7)'
      ]},
      { type: 'paragraph', content: 'Guidelines:' },
      { type: 'list', content: [
        'BC7 for high-quality color',
        'BC5 for normal maps',
        '4K textures only when justified',
        'Maintain consistent mip chains'
      ]},
      { type: 'paragraph', content: 'Consoles have strong bandwidth but still benefit from predictable, compressed pipelines.' },
      { type: 'heading', content: 'Why POT Matters' },
      { type: 'list', content: [
        'Required for efficient mipmapping',
        'Better GPU memory alignment',
        'Better compression efficiency',
        'Fewer sampling artifacts'
      ]},
      { type: 'subheading', content: 'Rule: Use POT unless you have a specific UI reason not to.' },
      ],
    comments: [
        { user: "MobileDev_99", initials: "MD", timeAgo: "1 day ago", content: "Learned this the hard way. My Android build was crashing on 2GB devices until I packed everything.", avatarColor: "text-purple-400 border-purple-500/20 bg-purple-900/20" },
        { user: "TextureMaster", initials: "TM", timeAgo: "2 days ago", content: "ASTC 6x6 is the sweet spot for UI. 4x4 is overkill usually.", avatarColor: "text-yellow-400 border-yellow-500/20 bg-yellow-900/20" }
    ]
  },
  {
    id: 'font-counts',
    title: 'Defining a Clear Artistic Line',
    date: 'Nov 15, 2025',
    category: 'Tech Art Foundations',
    proTip: "Treat your artistic line like a budgeted system, not a mood board. Define upfront: maximum number of fonts (2–3), color families, UI states, shader types, and lighting rules — and enforce them",
    blocks: [
      { type: 'subheading', content: 'Why Visual Consistency Is a Production Multiplier' },
      { type: 'paragraph', content: 'One of the most underestimated production decisions in a game or app built with Unity isn’t technical.' },
      { type: 'paragraph', content: 'It’s defining a clear artistic line. A clear, limited, intentional visual language.' },
      { type: 'subheading', content: 'What Is an Artistic Line?' },
      { type: 'list', content: [
        'Color palette',
        'Lighting model',
        'UI style',
        'Typography system',
        'Iconography',
        'VFX treatment',
        'Level of detail',
        'Motion language'
      ]},
      { type: 'paragraph', content: 'It’s the visual rulebook that every asset must obey. Without it, every feature becomes a visual experiment.' },
      { type: 'subheading', content: 'Confusing flexibility with creativity' },
      { type: 'paragraph', content: 'Not having a clear vision can:' },
      { type: 'list', content: [
        'Create cognitive Confusion -> The brain works harder to interpret the interface, UX suffers.',
        'Production Cost Explosion -> New materials, shaders, more atlases, draw calls, iterations.',
        'Scalability Problems -> New features don’t match old ones and refactoring UI becomes painful.'
      ]},
      { type: 'heading', content: 'The Technical Artist Perspective' },
      { type: 'subheading', content: 'As a Technical Artist, your job isn’t just optimization. It’s protecting visual coherence.' },
      { type: 'paragraph', content: 'A strong artistic line enables:' },
      { type: 'list', content: [
        'Shared materials',
        'Reusable shader graphs',
        'Fewer font atlases',
        'Unified post-processing',
        'Predictable batching',
        'Clean asset pipelines'
      ]},
      { type: 'paragraph', content: 'Consistency improves performance indirectly.' },
      { type: 'heading', content: 'Final Takeaway' },
      { type: 'paragraph', content: 'Visual consistency is not artistic rigidity. It’s production intelligence.' },
      { type: 'paragraph', content: 'The more unified your visual language, the:' },
      { type: 'list', content: [
        'Cleaner your UX',
        'Leaner your rendering',
        'Faster your iteration',
        'Stronger your brand'
      ]},
      { type: 'paragraph', content: 'In the long run, a clear artistic line is not just aesthetic direction.' },
      { type: 'subheading', content: 'It’s technical architecture.' }
    ],
    comments: [
        { user: "TypeSetter", initials: "TS", timeAgo: "4 hours ago", content: "I'm gonna share this with my team. This gave me some clarity", avatarColor: "text-pink-400 border-pink-500/20 bg-pink-900/20" }
    ]
  },
  {
    id: 'tmp-material-management',
    title: 'TextMeshPro: The Silent Draw Call Killer',
    date: 'Dec 18, 2025',
    category: 'Tech Art Foundations',
    proTip: "design your UI shader so the glow color multiplies with the vertex color. Then you control intensity per element via Graphic.color or TMP.color, while keeping a single shared material across the canvas in Unity. This preserves batching and gives you per-instance visual variation essentially “for free.",
    blocks: [
      { type: 'code', content: `// Unity HLSL Tip
// Fragment snippet
fixed4 face  = tex2D(_MainTex, i.uv) * i.color;
fixed4 glow  = _GlowColor * i.color.a;   // Vertex alpha controls intensity
fixed  mask  = tex2D(_GlowMask, i.uv).r;
return face + glow * mask;` },
      { type: 'paragraph', content: 'TextMeshPro (TMP) is the gold standard for crisp, flexible text in Unity, but it comes with a hidden trap: material instancing can destroy batching and skyrocket draw calls if misused.' },
      { type: 'subheading', content: 'Why TMP Breaks Batching' },
      { type: 'list', content: [
        'TMP uses a shared material by default.',
        'Tweaking Softness, Outline, or Dilation on a single text object forces Unity to create a unique material instance.',
        'Each unique material breaks dynamic batching, producing a separate draw call.'
      ]},
      { type: 'subheading', content: 'Result: Hundreds of seemingly harmless text tweaks can quickly turn a single canvas into a GPU bottleneck.' },
      { type: 'subheading', content: 'Rules for Using TMP Properly' },
      { type: 'paragraph', content: 'Shared Materials' },
      { type: 'list', content: [
        'Keep most text objects using the same material asset.',
        'Avoid per-object adjustments unless necessary.'
      ]},
      { type: 'paragraph', content: 'Use Material Presets' },
      { type: 'list', content: [
        'Create a TMP Material preset for a common style (color, outline, dilation).',
        'Apply the preset across multiple text objects.',
        'Changes in the preset do not break batching, unlike per-object tweaks.'
      ]},
      { type: 'paragraph', content: 'Minimize Overrides' },
      { type: 'list', content: [
        'Avoid modifying Softness, Dilation, Outline thickness, Glow, or Face color directly in the inspector per object.',
        'Use Material Property Blocks for runtime color changes without instancing.'
      ]},
      { type: 'paragraph', content: 'Text Mesh Pro Settings' },
      { type: 'list', content: [
        'Enable Extra Padding only when needed',
        'Optimize Atlas Resolution (larger atlases reduce the need for multiple materials)',
        'Compress atlas textures to save memory without affecting quality'
      ]},
      { type: 'heading', content: 'Key Takeaway' },
      { type: 'paragraph', content: 'The real power move is to design your UI shaders from the start to support per-instance variation via vertex data, not material variation.' },
      { type: 'paragraph', content: 'TextMeshPro is not inherently expensive, the performance killer is material instancing.' },
      { type: 'paragraph', content: 'Keep materials shared, use presets for styling, and apply the proxy technique for special effects. Your UI stays crisp, flashy, and most importantly, GPU-friendly.' },
    ],
    comments: [
        { user: "BatchesBeCrazy", initials: "BB", timeAgo: "10 mins ago", content: "This explains why my draw calls skyrocketed in the inventory screen. Thanks!", avatarColor: "text-indigo-400 border-indigo-500/20 bg-indigo-900/20" },
        { user: "SeniorUnity", initials: "SU", timeAgo: "3 hours ago", content: "Using the vertex data idea is an awesome trick. Love it!!", avatarColor: "text-red-400 border-red-500/20 bg-red-900/20" }
    ]
  },
  {
    id: 'canvas-splitting',
    title: 'UGUI Architecture: Divide and Conquer',
    date: 'Nov 20, 2023',
    category: 'Tech Art Foundations',
    proTip: "Separate static elements (Backgrounds) from dynamic elements (Health Bars). Rebuilding a massive single Canvas every frame is a CPU killer.",
    blocks: [
      { type: 'paragraph', content: 'Unity’s Unity UI system (uGUI) is powerful but can become a performance bottleneck if mismanaged. Understanding its architecture allows Technical Artists and developers to divide and conquer complexity efficiently.' },
      { type: 'heading', content: 'Core Concepts' },
      { type: 'list', content: [
        'GameObjects → represent UI elements (Button, Image, Text, Panel)',
        'RectTransform → defines position, rotation, scale, and layout',
        'Canvas → the root render container.',
        'CanvasRenderer → responsible for batching and sending geometry to GPU.',
        'Graphic components → e.g., Image, Text, RawImage, are the visible elements.',
      ]},
      { type: 'paragraph', content: 'Performance hinges on how the canvas system handles batching, redraws, and hierarchy.' },
      { type: 'paragraph', content: 'Key rule: Any change in a child element triggers a rebuild of the entire Canvas, which can be costly in deep hierarchies.' },
      { type: 'heading', content: 'Divide and Conquer Strategy' },
      { type: 'paragraph', content: 'Principle: Split the UI into multiple smaller canvases instead of one giant canvas. This isolates updates and reduces redraw overhead.' },
      { type: 'paragraph', content: 'Optimization Guidelines' },
      { type: 'list', content: [
        'Frequent text changes → Move text to separate canvas',
        'Large panel with moving children → Split children into their own canvases',
        'Many images → Use atlases and shared materials',
        'Overdraw → Avoid full-screen transparent panels; use opaque where possible',
        'Deep hierarchy → Flatten if possible; fewer nested RectTransforms',
      ]},
      { type: 'heading', content: 'uGUI Lifecycle Overview' },
      { type: 'list', content: [
        'Awake/Start: UI hierarchy is created',
        'Layout Phase: RectTransforms compute positions/sizes',
        'Graphic Phase: Images/Text are submitted to CanvasRenderer',
        'Render Phase: Batched geometry is sent to GPU'
      ]},
      { type: 'paragraph', content: 'Knowing this flow helps predict which changes will trigger full canvas rebuilds and allows smarter canvas partitioning.' },
      { type: 'heading', content: 'Technical Artist Takeaway' },
      { type: 'list', content: [
        'Think “divide and conquer”: multiple smaller canvases outperform one giant canvas',
        'Profile dynamically updated elements separately',
        'Use atlases, minimize hierarchy depth, and separate static vs dynamic elements',
        'Predict which changes cause rebuilds and structure your UI accordingly'
      ]},
      { type: 'paragraph', content: 'With this mindset, uGUI becomes scalable, maintainable, and GPU-friendly, even for complex UI systems.' },
    ],
    comments: [
        { user: "UI_Wizard", initials: "UI", timeAgo: "1 hour ago", content: "Nested canvases are a greast strategy, but be careful with the depth overhead.", avatarColor: "text-cyan-400 border-cyan-500/20 bg-cyan-900/20" }
    ]
  },
  {
    id: 'shader-vs-texture',
    title: 'ALU vs Bandwidth: Balancing the GPU',
    date: 'Nov 22, 2025',
    category: 'Tech Art Foundations',
    proTip: "On modern mobile GPUs, doing a little extra math in the pixel shader is often cheaper than fetching a large texture from memory.",
    blocks: [
      { type: 'paragraph', content: 'As a Technical Artist working in Unity, performance problems usually come down to one question:' },
      { type: 'heading', content: 'Is the GPU limited by ALU or by memory bandwidth?' },
      { type: 'paragraph', content: 'Optimizing the wrong one wastes time. Here’s how to think about it quickly and practically.' },
      { type: 'heading', content: 'ALU-Bound (Compute Limited)' },
      { type: 'subheading', content: 'Common Causes' },
      { type: 'list', content: [
        'Complex fragment shaders',
        'Expensive PBR lighting',
        'Heavy post-processing',
        'Dynamic branches'
      ]},
      { type: 'subheading', content: 'Common Solutions' },
      { type: 'list', content: [
        'Move work to vertex shader',
        'Bake lighting',
        'Reduce light count',
        'Remove expensive math (pow, normalize, branches)'
      ]},
      { type: 'heading', content: 'Bandwidth-Bound (Memory Limited)' },
      { type: 'subheading', content: 'Common Causes' },
      { type: 'list', content: [
        'Large textures',
        '4K render targets',
        'Overdraw (UI / particles)',
        'Multiple fullscreen passes',
        'Large shadow maps'
      ]},
      { type: 'subheading', content: 'Common Solutions' },
      { type: 'list', content: [
        'Compress textures',
        'Reduce shadow resolution',
        'Minimize transparency',
        'Use half-resolution buffers',
        'Merge post-process passes'
      ]},
      { type: 'paragraph', content: 'Think of the GPU like this, if:' },
      { type: 'list', content: [
        'Workers are overloaded → reduce math.',
        'Trucks are overloaded → reduce memory traffic.'
      ]},
      { type: 'heading', content: 'Fast Unity Debug Workflow' },
      { type: 'list', content: [
        'Capture frame in GPU Profiler.',
        'Lower resolution.',
        'Disable post-processing.',
        'Simplify a heavy material.',
        'Measure again.'
      ]},
      { type: 'paragraph', content: 'The goal is balance, not “make everything cheaper”.' },
    ],
    comments: [
        { user: "ShaderGrapher", initials: "SG", timeAgo: "6 hours ago", content: "Procedural UI is the future. SDFs everywhere!", avatarColor: "text-teal-400 border-teal-500/20 bg-teal-900/20" },
        { user: "OptimPrime", initials: "OP", timeAgo: "12 hours ago", content: "Just careful with dependent texture reads if you mix the two.", avatarColor: "text-orange-400 border-orange-500/20 bg-orange-900/20" }
    ]
  },
  {
    id: 'ai-editor-tools',
    title: 'The Future of AI in Editor Tools',
    date: 'Oct 12, 2025',
    category: 'AI & Tooling',
    proTip: "Use 'System.Reflection' combined with LLM prompts to inspect your own codebase and generate context-aware editor extensions.",
    blocks: [
      { type: 'paragraph', content: 'Artificial Intelligence is no longer just a buzzword; it is rapidly becoming a cornerstone of modern game development pipelines. Specifically, in the realm of Unity and Unreal editor scripting, Large Language Models (LLMs) like Gemini are enabling dynamic tool generation.' },
      { type: 'subheading', content: 'Context-Aware Generation' },
      { type: 'paragraph', content: 'Imagine an editor window that adapts to your current selection. By feeding the inspector context to an API, we can generate relevant actions on the fly.' },
      { type: 'code', content: `// Example: Generating a context menu item
[MenuItem("Tools/AI/Analyze Selection")]
static void Analyze() {
    var selected = Selection.activeGameObject;
    // Send component data to LLM...
}` },
      { type: 'paragraph', content: 'This shifts the paradigm from static toolsets to dynamic, problem-solving assistants that live directly within the engine. We are currently experimenting with real-time shader generation based on natural language prompts directly within the material editor.' }
    ],
    comments: [
        { user: "ToolSmith", initials: "TS", timeAgo: "2 days ago", content: "I built a prompt-to-animator-controller tool last week. Saved me hours of state machine wiring.", avatarColor: "text-emerald-400 border-emerald-500/20 bg-emerald-900/20" }
    ]
  },
  {
    id: 'tween-vfx-roadmap',
    title: 'Tween VFX Pro: Roadmap',
    date: 'Jan 05, 2026',
    category: 'DevLog',
    proTip: "Pooling isn't just for game objects. Pooling your Tween command objects prevents C# Garbage Collection spikes during intense sequences.",
    blocks: [
      { type: 'paragraph', content: 'The Ultimate Everyday 2D Animation Toolkit.' },
      { type: 'heading', content: 'Milestone 1: Professional Infrastructure' },
      { type: 'paragraph', content: 'Focus: Architecture and Debugging.' },
      { type: 'list', content: [
        'ScriptableObject Time Controller: A global "Settings" asset that allows you to control time-scales for specific groups of tweens.',
        'The VFX Profiler: A dedicated Editor Window to track every active tween in the scene, catching leaks and optimizing performance.',
        'Pro Controller Suite: Enhanced Sequence logic with Nested Sequences, Infinite Looping, and UnityEvent Callbacks (OnComplete, OnStep).'
      ]},
      { type: 'heading', content: 'Milestone 2: Library Expansion (25+ Behaviors)' },
      { type: 'paragraph', content: 'Focus: Splines, paths, and high-end 2D juice.' },
      { type: 'list', content: [
        'Advanced 2D Interaction: * Magnetic Pull: Elements that lean or drift toward the cursor.',
        'Visual Spline Editor: Draw custom paths directly in the Scene View for objects to follow—perfect for "Currency flying to UI" or "Projectiles."',
        'The "Juice" Collection: * Radial Bursts: Perfect for loot drops or "level up" explosions.'
      ]},
      { type: 'heading', content: 'Milestone 3: Workflow & Optimization' },
      { type: 'paragraph', content: 'Focus: Speed and Chaining.' },
      { type: 'list', content: [
        'Sequence Logic Branching: Conditional logic within a sequence (e.g., "If health < 20%, play the Red Pulse instead").',
        'Object Pooling Bridge: Pre-configured support for popular pooling solutions to ensure zero-GC during high-intensity 2D combat.',
        'Batch Operations: Apply tweaks to multiple controllers or behaviors across a scene simultaneously via a global ScriptableObject.'
      ]},
      //{ type: 'subheading', content: 'Deprecations' },
      //{ type: 'paragraph', content: 'The legacy "SimpleMove" API will be deprecated in favor of the new fluent builder pattern to ensure type safety and better performance.' }
    ],
    comments: [
        { user: "MotionMan", initials: "MM", timeAgo: "3 hours ago", content: "Finally a spline editor! Hand-coding bezier curves was getting old.", avatarColor: "text-blue-400 border-blue-500/20 bg-blue-900/20" },
        { user: "GarbageCollector", initials: "GC", timeAgo: "1 day ago", content: "Zero allocation is the dream. Can't wait for the pooling update.", avatarColor: "text-green-400 border-green-500/20 bg-green-900/20" }
    ]
  }
];