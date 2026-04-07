import { motion } from 'framer-motion';

export default function TerminalCard({ logs = [], title = 'SYSTEM_LOGS' }) {
  return (
    <div className="w-full bg-stone-950 border-2 border-stone-800 rounded-sm shadow-[4px_4px_0px_0px_rgba(41,37,36,1)] overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-stone-800 px-4 py-2 flex items-center justify-between border-b border-stone-700">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-stone-600" />
          <div className="w-2.5 h-2.5 rounded-full bg-stone-600" />
          <div className="w-2.5 h-2.5 rounded-full bg-stone-600" />
        </div>
        <span className="text-[10px] font-mono text-stone-400 uppercase tracking-[0.2em]">
          {title}.EXE
        </span>
        <div className="w-10" /> {/* Spacer for balance */}
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-[11px] leading-relaxed relative min-h-[300px] max-h-[400px] overflow-y-auto">
        {/* Subtle Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

        <div className="relative z-10">
          <p className="text-stone-500 mb-2 italic">[SYS] Initializing Hilom Command Center...</p>
          <p className="text-stone-500 mb-4 font-bold">
            [SYS] Authentication: ADMIN_ACCESS_GRANTED
          </p>

          <div className="space-y-2">
            {logs.map((log, index) => (
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                key={index}
                className="flex gap-3"
              >
                <span className="text-stone-600 shrink-0">[{log.timestamp}]</span>
                <span
                  className={
                    log.type === 'error'
                      ? 'text-red-500'
                      : log.type === 'success'
                        ? 'text-emerald-500'
                        : 'text-stone-300'
                  }
                >
                  {log.message}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Typing Cursor Simulation */}
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-heritage-brown ml-1 align-middle mt-2"
          />
        </div>
      </div>
    </div>
  );
}
