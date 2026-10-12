export type LabStatus = 'UNINITIALIZED' | 'READY' | 'RUNNING' | 'PAUSED' | 'DETECTED' | 'STOPPED' | 'RECOVERING' | 'COMPLETED'
export type FileStatus = 'NORMAL' | 'MODIFIED (SIMULATED)' | 'RESTORED'
export interface VirtualFile { id:number; name:string; type:string; size:string; originalHash:string; currentHash:string; status:FileStatus }
export interface SimulationEvent { id:number; time:string; level:'INFO'|'WARN'|'ALERT'|'ACTION'|'SUCCESS'; message:string }
export interface DetectionRule { id:string; name:string; threshold:string; status:string }
export interface SimulationReport { id:string; start:string; end:string; duration:string; filesAffected:number }
export interface SimulationState { status:LabStatus; stage:number; startedAt:number|null; events:SimulationEvent[]; activity:number[]; files:VirtualFile[]; report:SimulationReport|null; selected:string }
