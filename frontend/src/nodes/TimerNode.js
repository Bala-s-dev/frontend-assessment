import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
const Icon = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;

export const TimerNode = ({ id }) => (
    <BaseNode id={id} label="Timer" typeColor="#fb923c" icon={Icon} handles={[{ type: 'target', position: Position.Left, id: 'in' }, { type: 'source', position: Position.Right, id: 'out' }]}><div className="pro-field-group"><label className="pro-label">Sec</label><input type="number" defaultValue={5} className="pro-input" /></div></BaseNode>
);