import { Activity, ChevronRight, FileCheck2, HardDrive, List, LockKeyhole, Shield, ShieldAlert, ShieldCheck } from 'lucide-react'
import type { LabStatus } from '../types'

const navItems = [{label:'Dashboard',icon:null},{label:'Simulation',icon:Activity},{label:'Virtual Files',icon:HardDrive},{label:'Detection',icon:ShieldAlert},{label:'Event Logs',icon:List},{label:'Recovery',icon:ShieldCheck},{label:'Reports',icon:FileCheck2}]

export function StatusBadge({status}:{status:LabStatus|string}) {
  const tone = ['RUNNING','DETECTED','MODIFIED (SIMULATED)'].includes(status)?'red':['COMPLETED','READY','RESTORED','SUCCESSFUL','PASSED'].some(x=>status.includes(x))?'green':['PAUSED','RECOVERING'].includes(status)?'amber':'muted'
  return <span className={`badge ${tone}`}><i/>{status}</span>
}

export function SafetyBanner(){return <div className="safety-banner"><ShieldCheck size={16}/><div><b>CONTROLLED EDUCATIONAL SIMULATION</b><span>No real files are accessed, encrypted, deleted, renamed, or modified.</span></div><span className="safe-tag"><LockKeyhole size={12}/> SIMULATION ONLY</span></div>}

export function Sidebar({active,onSelect}:{active:string;onSelect:(x:string)=>void}) {
  return <aside className="sidebar"><div className="brand"><div className="brand-icon"><Shield size={20}/></div><div><strong>Sentinel<span>Lab</span></strong><small>SECURITY OPERATIONS</small></div></div><div className="workspace"><span className="workspace-dot"/> TRAINING ENVIRONMENT <ChevronRight size={13}/></div><div className="nav-label">WORKSPACE</div><nav>{navItems.map(({label,icon:Icon})=><button key={label} className={`nav-item ${active===label?'active':''}`} onClick={()=>onSelect(label)}>{Icon?<Icon size={17}/>:<Activity size={17}/>}<span>{label}</span>{label==='Reports'&&<span className="nav-count">01</span>}</button>)}</nav><div className="sidebar-spacer"/><div className="lab-health"><div className="health-head"><span>LAB INTEGRITY</span><span className="health-dot"/></div><strong>Environment isolated</strong><div className="health-bar"><i/></div><small>All systems operational</small></div><div className="profile"><div className="avatar">SA</div><div><strong>Security Analyst</strong><small>Training workspace</small></div><span className="online-dot"/></div></aside>
}
