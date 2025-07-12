document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const container = document.getElementById("video-section");
    if (!container) return;

    const video = document.createElement("video");
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.loop = true;
    video.preload = "none";
    video.style.cssText = `
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    `;

    const sourceWebm = document.createElement("source");
    sourceWebm.src = "https://res.cloudinary.com/drjpkfiwc/video/upload/6907510_Cyber_Security_Experts_1920x1080_e9ichf.webm?gsi_bypass=1";
    sourceWebm.type = "video/webm";

    const sourceMp4 = document.createElement("source");
    sourceMp4.src = "https://res.cloudinary.com/drjpkfiwc/video/upload/6907510_Cyber_Security_Experts_1920x1080_e9ichf.mp4?gsi_bypass=1";
    sourceMp4.type = "video/mp4";

    video.appendChild(sourceWebm);
    video.appendChild(sourceMp4);
    video.load();

    video.addEventListener("loadeddata", () => {
      video.play().catch(() => {});
    });

    container.appendChild(video);
  }, 2000); // opóźnienie minimalnie wykraczające poza GSI render pass
});
