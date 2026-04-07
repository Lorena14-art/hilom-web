import TerminalCard from '../../../components/TerminalCard';

const dummyLogs = [
  { timestamp: '21:04:12', type: 'info', message: 'FETCH_INVENTORY_DB: SUCCESS' },
  { timestamp: '21:05:45', type: 'success', message: 'NEW_ORDER: #HLM-2026-001 RECEIVED' },
  { timestamp: '21:08:22', type: 'error', message: 'AUTH_FAILURE: UNAUTHORIZED_LOGIN_ATTEMPT' },
  { timestamp: '21:10:01', type: 'info', message: 'AFFILIATE_LINK: ONYX_COLLECTION_CLICKED' },
];

export default function SystemLogs() {
  return (
    <div className="space-y-8">
      <div className="border-b-2 border-stone-800 pb-6">
        <h1 className="font-serif text-4xl italic text-heritage-brown">System Logs</h1>
        <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mt-2">
          Terminal_Activity_Monitor
        </p>
      </div>
      <TerminalCard logs={dummyLogs} title="DB_MONITOR" />
    </div>
  );
}
