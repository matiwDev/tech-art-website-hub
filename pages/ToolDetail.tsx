import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Cpu, Construction } from "lucide-react";
import { Button } from "../components/ui/Button";
import { toolsData } from "../data/toolsData";
import { Comments } from "../components/Comments";
import { SupportCard } from "../components/SupportCard";
import { DownloadStation } from "../components/DownloadStation";
import { VideoPlayer } from "../components/VideoPlayer";
import { AccessRequestModal } from "../components/AccessRequestModal";

export const ToolDetail: React.FC = () => {
  const { toolId } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Find tool from centralized data
  const data = toolsData.find((t) => t.id === toolId);

  // Fallback if not found
  if (!data) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Tool Not Found</h1>
        <Button onClick={() => navigate("/tools")}>Return to Tools</Button>
      </div>
    );
  }

  // Handle "In Development" or empty sections
  const hasContent = data.contentBlocks && data.contentBlocks.length > 0;

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate("/tools")}
          className="flex items-center text-zinc-500 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Tools
        </button>

        <div className="mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-wider uppercase mb-4">
            {data.category} Edition
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-sansation">
            {data.name.replace(" (Pro)", "")}
            {data.name.includes("(Pro)") && (
              <span className="inline-block ml-4 px-3 py-1 rounded-lg text-sm md:text-xl font-bold uppercase tracking-wider bg-purple-500/20 text-purple-400 border border-purple-500/30 align-middle">
                Pro
              </span>
            )}
          </h1>

          <p className="text-xl text-zinc-400 w-full leading-relaxed mb-12">
            {data.description}
          </p>

          {/* Dynamic Media Container */}
          {((data.videoUrl && data.videoUrl.trim() !== "") ||
            (data.imageUrl && data.imageUrl.trim() !== "")) ? (
            <div className="max-w-5xl mx-auto mb-20 relative">
              {data.videoUrl && data.videoUrl.trim() !== "" ? (
                <div className="rounded-xl overflow-hidden border border-zinc-800 shadow-2xl relative z-10 bg-black/40">
                  <VideoPlayer url={data.videoUrl} />
                </div>
              ) : (
                <div className="relative w-full h-[40vh] md:h-[60vh] min-h-[300px] max-h-[600px] flex items-center justify-center overflow-visible z-10">
                  <img
                    src={data.imageUrl}
                    alt={`${data.name} Preview`}
                    className="w-full h-full object-contain overflow-visible animate-float"
                    style={{
                      filter:
                        "drop-shadow(0 25px 35px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 30px rgba(168, 85, 247, 0.2))",
                    }}
                  />
                </div>
              )}

              {/* Background Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none z-0"></div>
            </div>
          ) : null}
        </div>

        {hasContent ? (
          /* Modular Content Blocks */
          <div className="space-y-32">
            {data.contentBlocks?.map((block, idx) => {
              const hasVideo = !!block.videoUrl && block.videoUrl.trim() !== "";
              const hasVisual =
                !!block.visual &&
                (Array.isArray(block.visual)
                  ? block.visual.length > 0
                  : block.visual.trim() !== "");
              
              const showMedia = hasVideo || hasVisual;
              
              const isEditorial =
                showMedia &&
                (block.layout === "float-left" ||
                  block.layout === "float-right");
              const isVertical =
                showMedia &&
                (block.layout === "image-top" ||
                  block.layout === "image-bottom");

              const renderBlockContent = () => (
                <>
                  {block.title && (
                    <h2 className="text-3xl font-bold text-white mb-6 font-sansation">
                      {block.title}
                    </h2>
                  )}

                  {/* Paragraphs Render */}
                  {block.bodyType === "paragraphs" && (
                    <div className="space-y-4">
                      {block.text.map((paragraph, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-zinc-400 leading-relaxed text-lg"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Bullets Render */}
                  {block.bodyType === "bullets" && (
                    <ul className="space-y-4 pt-2">
                      {block.text.map((item, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-4 text-zinc-300"
                        >
                          <div className="w-2 h-2 mt-2.5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.5)] shrink-0"></div>
                          <span className="leading-relaxed text-lg">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technical List Render */}
                  {block.bodyType === "technical-list" && (
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-sm text-indigo-300 shadow-inner mt-6">
                      <ul className="space-y-2">
                        {block.text.map((item, tIdx) => (
                          <li key={tIdx} className="flex gap-4">
                            <span className="text-zinc-600 select-none">
                              {(tIdx + 1).toString().padStart(2, "0")}
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              );

              const renderMedia = () => {
                if (hasVideo) {
                  return (
                    <div className="rounded-xl overflow-hidden border border-zinc-800 shadow-2xl relative z-10 bg-black/40">
                      <VideoPlayer url={block.videoUrl!} />
                    </div>
                  );
                }
                if (hasVisual) {
                  const visualUrl = Array.isArray(block.visual) ? block.visual[0] : block.visual;
                  const isVid = block.mediaType === "video" || /\.(mp4|webm|gifv|mov)($|\?)/i.test(visualUrl);

                  return (
                    <div className="relative group flex items-center justify-center z-10">
                       <div
                        className={`absolute inset-0 blur-3xl rounded-full opacity-10 group-hover:opacity-20 transition-opacity ${idx % 2 === 0 ? "bg-indigo-500/20" : "bg-purple-500/20"}`}
                      ></div>
                      {isVid ? (
                        <video
                          src={visualUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          controls={false}
                          className="w-full h-auto max-h-[500px] object-contain rounded-2xl animate-float shadow-2xl"
                        />
                      ) : (
                        <img
                          src={visualUrl}
                          alt={block.title || "Tool Visualization"}
                          className="w-full h-auto max-h-[500px] object-contain overflow-visible animate-float"
                          style={{
                            filter: "drop-shadow(0 20px 30px rgba(0, 0, 0, 0.5))"
                          }}
                        />
                      )}
                    </div>
                  );
                }
                return null;
              };

              if (!showMedia) {
                return (
                  <div key={idx} className="w-full max-w-4xl mx-auto">
                    <div className="space-y-6">
                      {renderBlockContent()}
                    </div>
                  </div>
                );
              }

              if (isEditorial) {
                return (
                  <div key={idx} className="clear-both overflow-visible">
                    <div
                      className={`relative ${block.layout === "float-left" ? "float-left mr-12 mb-8" : "float-right ml-12 mb-8"} max-w-[45%] md:max-w-[40%]`}
                    >
                      {renderMedia()}
                    </div>
                    <div className="space-y-6">{renderBlockContent()}</div>
                  </div>
                );
              }

              if (isVertical) {
                return (
                  <div
                    key={idx}
                    className="flex flex-col gap-12 md:gap-16 items-center"
                  >
                    <div
                      className={`relative w-full max-w-4xl ${block.layout === "image-bottom" ? "order-2" : "order-1"}`}
                    >
                      {renderMedia()}
                    </div>
                    <div
                      className={`space-y-6 max-w-3xl w-full ${block.layout === "image-bottom" ? "order-1" : "order-2"}`}
                    >
                      {renderBlockContent()}
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center"
                >
                  <div
                    className={`relative ${block.layout === "image-right" ? "md:order-2" : "md:order-1"}`}
                  >
                    {renderMedia()}
                  </div>

                  <div
                    className={`space-y-6 ${block.layout === "image-right" ? "md:order-1" : "md:order-2"}`}
                  >
                    {renderBlockContent()}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Coming Soon / Empty State */
          <div className="py-20 border border-zinc-800 rounded-3xl bg-zinc-900/30 flex flex-col items-center justify-center text-center">
            <Construction className="w-16 h-16 text-zinc-600 mb-6" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Under Construction
            </h2>
            <p className="text-zinc-400 max-w-md">
              Detailed documentation and showcase materials for this tool are
              currently being compiled.
            </p>
          </div>
        )}

        {/* Technical Specifications */}
        {data.specs && data.specs.length > 0 && (
          <div className="mt-32 pt-16 border-t border-zinc-900">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 font-sansation">
                  <Cpu size={24} className="text-zinc-500" />
                  Technical Specs
                </h3>
                <p className="text-zinc-500 text-sm">
                  Detailed compatibility and performance metrics for pipeline
                  integration.
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 font-mono text-sm">
                  {data.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center border-b border-zinc-900 pb-2"
                    >
                      <span className="text-zinc-500">
                        {spec.label}
                      </span>
                      <span className="text-zinc-200">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {!data.isPro && <SupportCard />}

        {data.status === "Active" && (
          <DownloadStation
            toolName={data.name}
            gitUrl={data.gitUrl}
            downloadUrl={data.downloadUrl}
            isPro={data.isPro}
            price={data.price}
            purchaseUrl={data.purchaseUrl}
            onRequestAccess={() => setIsModalOpen(true)}
          />
        )}

        <Comments key={data.name} term={data.name} />

        {/* Modal */}
        <AccessRequestModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          toolName={data.name} 
        />
      </div>
    </div>
  );
};
