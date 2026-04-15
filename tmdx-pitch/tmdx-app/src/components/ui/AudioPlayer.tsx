"use client";
import { useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState("0:00");
  // Prevents overlapping play/pause calls that trigger AbortError
  const pendingRef = useRef(false);

  async function toggle() {
    const a = audioRef.current;
    if (!a || pendingRef.current) return;
    if (a.paused) {
      pendingRef.current = true;
      setPlaying(true); // optimistic — instant UI feedback
      try {
        await a.play();
      } catch (err: unknown) {
        setPlaying(false); // revert on failure
        // AbortError is benign — it just means pause() raced with play()
        if (err instanceof Error && err.name !== "AbortError") {
          console.error("Audio play error:", err);
        }
      } finally {
        pendingRef.current = false;
      }
    } else {
      a.pause();
      setPlaying(false);
    }
  }

  function onTimeUpdate() {
    const a = audioRef.current;
    if (!a || !a.duration) return;
    const pct = (a.currentTime / a.duration) * 100;
    setProgress(pct);
    const m = Math.floor(a.currentTime / 60);
    const s = Math.floor(a.currentTime % 60).toString().padStart(2, "0");
    setTime(`${m}:${s}`);
  }

  function onEnded() { setPlaying(false); setProgress(0); setTime("0:00"); }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const a = audioRef.current;
    if (!a) return;
    const rect = e.currentTarget.getBoundingClientRect();
    a.currentTime = ((e.clientX - rect.left) / rect.width) * a.duration;
  }

  return (
    <div style={{ display:"flex", alignItems:"center", gap:14, maxWidth:520, marginBottom:28, padding:"12px 16px", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"var(--radius)" }}>
      <button
        onClick={toggle}
        style={{ width:36, height:36, borderRadius:"50%", background:"var(--accent)", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, transition:"transform 0.15s ease" }}
        onMouseOver={e => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
        aria-label={playing ? "Pause" : "Play"}
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#0D0F14">
            <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#0D0F14">
            <polygon points="5,3 19,12 5,21"/>
          </svg>
        )}
      </button>
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ fontSize:11, fontFamily:"var(--font-mono)", color:"var(--text-faint)", letterSpacing:"0.08em", marginBottom:5 }}>
          60s OVERVIEW · INVESTMENT THESIS NARRATION
        </div>
        <div style={{ position:"relative", height:4, background:"var(--surface-elevated)", borderRadius:999, cursor:"pointer" }} onClick={seek}>
          <div style={{ height:"100%", width:`${progress}%`, background:"var(--accent)", borderRadius:999, transition:"width 0.1s linear" }}/>
        </div>
      </div>
      <span style={{ fontFamily:"var(--font-mono)", fontSize:11, color:"var(--text-muted)", whiteSpace:"nowrap", flexShrink:0 }}>{time}</span>
      <audio
        ref={audioRef}
        preload="metadata"
        onEnded={onEnded}
        onTimeUpdate={onTimeUpdate}
        onError={(e) => console.error("Audio load error:", e)}
      >
        <source src="/script.mp3" type="audio/mpeg"/>
      </audio>
    </div>
  );
}
