import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, CalendarRange, Plus, X, Clock } from "lucide-react";
import { api } from "@/lib/api";
import { toast } from "sonner";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function startOfMonth(d) { return new Date(d.getFullYear(), d.getMonth(), 1); }
function endOfMonth(d) { return new Date(d.getFullYear(), d.getMonth() + 1, 0); }
function ymd(d) { return d.toISOString().slice(0, 10); }
function fmtMonth(d) { return d.toLocaleDateString(undefined, { month: "long", year: "numeric" }); }
function isSameDay(a, b) { return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }

export default function AdminScheduled() {
  const [cursor, setCursor] = useState(() => startOfMonth(new Date()));
  const [scheduled, setScheduled] = useState([]);
  const [drafts, setDrafts] = useState([]);
  const [selected, setSelected] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [pickerTime, setPickerTime] = useState("09:00");

  const load = async () => {
    const [s, d] = await Promise.all([
      api.get("/admin/scheduled"),
      api.get("/blogs/admin/schedulable"),
    ]);
    setScheduled(s.data.items);
    setDrafts(d.data.items);
  };
  useEffect(() => { load(); }, []);

  const monthGrid = useMemo(() => {
    const start = startOfMonth(cursor);
    const end = endOfMonth(cursor);
    const cells = [];
    for (let i = 0; i < start.getDay(); i++) cells.push(null);
    for (let dn = 1; dn <= end.getDate(); dn++) cells.push(new Date(cursor.getFullYear(), cursor.getMonth(), dn));
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [cursor]);

  const byDay = useMemo(() => {
    const m = {};
    for (const b of scheduled) {
      if (!b.scheduled_at) continue;
      const k = b.scheduled_at.slice(0, 10);
      (m[k] = m[k] || []).push(b);
    }
    return m;
  }, [scheduled]);

  const selectedKey = ymd(selected);
  const todaysPosts = byDay[selectedKey] || [];

  const schedule = async (blogId, dt) => {
    try {
      await api.post(`/blogs/${blogId}/schedule`, { scheduled_at: dt });
      toast.success("Scheduled");
      setShowPicker(false);
      load();
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Schedule failed");
    }
  };
  const unschedule = async (blogId) => {
    if (!window.confirm("Move back to draft?")) return;
    await api.post(`/blogs/${blogId}/unschedule`);
    toast.success("Moved to draft");
    load();
  };

  return (
    <div data-testid="admin-scheduled-page" className="space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="eyebrow"><CalendarRange className="inline h-3.5 w-3.5 mr-1" /> Editorial calendar</p>
          <h1 className="mt-3 font-display text-4xl font-bold">Scheduled posts</h1>
          <p className="mt-2 text-sm text-white/60">Drag drafts onto a date or click "Schedule" to plan posts in advance. Scheduler auto-publishes every minute.</p>
        </div>
        <Link to="/admin/blogs/new" className="btn-primary text-sm" data-testid="scheduled-new-blog">
          <Plus className="h-4 w-4" /> New blog
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Calendar */}
        <div className="lg:col-span-2 card-surface p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display text-xl font-semibold">{fmtMonth(cursor)}</h2>
            <div className="flex items-center gap-2">
              <button data-testid="calendar-prev" onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))} className="h-9 w-9 grid place-items-center rounded-full border border-white/10 hover:border-emerald-500"><ChevronLeft className="h-4 w-4" /></button>
              <button onClick={() => { const t = new Date(); setCursor(startOfMonth(t)); setSelected(t); }} className="px-4 py-1.5 rounded-full border border-white/10 text-xs hover:border-emerald-500" data-testid="calendar-today">Today</button>
              <button data-testid="calendar-next" onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))} className="h-9 w-9 grid place-items-center rounded-full border border-white/10 hover:border-emerald-500"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1.5 text-center mb-2">
            {DAYS.map((d) => <div key={d} className="text-[10px] uppercase tracking-[0.2em] text-white/40 py-2">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1.5">
            {monthGrid.map((d, i) => {
              if (!d) return <div key={i} className="aspect-square" />;
              const k = ymd(d);
              const posts = byDay[k] || [];
              const isToday = isSameDay(d, new Date());
              const isSel = isSameDay(d, selected);
              return (
                <button
                  key={i}
                  onClick={() => setSelected(d)}
                  data-testid={`calendar-day-${k}`}
                  className={`aspect-square rounded-lg border p-1.5 text-left flex flex-col transition-colors ${
                    isSel ? "border-emerald-500 bg-emerald-500/10" : "border-white/5 hover:border-white/20"
                  } ${isToday ? "ring-1 ring-emerald-500/40" : ""}`}
                >
                  <span className={`text-xs ${isSel ? "text-white font-semibold" : "text-white/70"}`}>{d.getDate()}</span>
                  {posts.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-0.5">
                      {posts.slice(0, 3).map((p) => (
                        <span key={p.id} className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      ))}
                      {posts.length > 3 && <span className="text-[9px] text-emerald-300 ml-0.5">+{posts.length - 3}</span>}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected day */}
        <div className="card-surface p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">{selected.toLocaleDateString(undefined, { weekday: "long" })}</p>
          <h2 className="mt-1 font-display text-2xl font-bold">{selected.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</h2>
          <p className="mt-1 text-xs text-white/50">{todaysPosts.length} scheduled</p>

          {todaysPosts.length === 0 ? (
            <p className="mt-6 text-sm text-white/50">Nothing scheduled. Pick a draft below to add.</p>
          ) : (
            <ul className="mt-6 space-y-2">
              {todaysPosts.map((p) => (
                <li key={p.id} className="rounded-lg border border-white/10 p-3" data-testid={`day-post-${p.id}`}>
                  <Link to={`/admin/blogs/${p.id}`} className="text-sm font-medium hover:text-emerald-400 line-clamp-2">{p.title}</Link>
                  <div className="mt-1 flex items-center justify-between text-xs text-white/50">
                    <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {p.scheduled_at?.slice(11, 16)}</span>
                    <button onClick={() => unschedule(p.id)} className="text-white/50 hover:text-red-400"><X className="h-3.5 w-3.5" /></button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="divider-fade my-6" />

          <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-3">Drafts ready ({drafts.length})</p>
          <div className="space-y-1.5 max-h-[320px] overflow-auto pr-1">
            {drafts.length === 0 ? <p className="text-xs text-white/40">No drafts. Generate via AI or write a new post.</p> : drafts.map((d) => (
              <div key={d.id} className="rounded-lg border border-white/10 p-3 hover:border-emerald-500/40 transition-colors" data-testid={`draft-card-${d.id}`}>
                <Link to={`/admin/blogs/${d.id}`} className="block text-xs text-white/80 hover:text-white line-clamp-2">{d.title}</Link>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-white/40">{d.rss_source ? `RSS · ${d.rss_source}` : (d.ai_provider || "manual")}</span>
                  <button onClick={() => { setShowPicker(d.id); setPickerTime("09:00"); }} className="text-xs text-emerald-400 hover:text-emerald-300" data-testid={`draft-schedule-${d.id}`}>Schedule →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showPicker && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm card-surface p-6" data-testid="schedule-picker-modal">
            <h2 className="font-display text-xl font-bold">Schedule for {selected.toLocaleDateString(undefined, { month: "short", day: "numeric" })}</h2>
            <p className="mt-1 text-sm text-white/60">All times in your local timezone.</p>
            <input
              type="time"
              value={pickerTime}
              onChange={(e) => setPickerTime(e.target.value)}
              data-testid="schedule-picker-time"
              className="mt-5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-base outline-none focus:border-emerald-500"
            />
            <div className="mt-6 flex justify-end gap-2">
              <button onClick={() => setShowPicker(false)} className="btn-ghost text-sm">Cancel</button>
              <button
                onClick={() => {
                  const [hh, mm] = pickerTime.split(":").map(Number);
                  const dt = new Date(selected.getFullYear(), selected.getMonth(), selected.getDate(), hh || 9, mm || 0).toISOString();
                  schedule(showPicker, dt);
                }}
                className="btn-primary text-sm"
                data-testid="schedule-picker-confirm"
              >
                Schedule
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
