# backend/main.py
from fastapi import FastAPI, Body
from typing import List, Dict

app = FastAPI()

def check_is_dag(nodes: List, edges: List) -> bool:
    adj = {n['id']: [] for n in nodes}
    for e in edges:
        adj[e['source']].append(e['target'])
    
    visited = set()
    rec_stack = set()

    def has_cycle(v):
        visited.add(v)
        rec_stack.add(v)
        for neighbor in adj.get(v, []):
            if neighbor not in visited:
                if has_cycle(neighbor): return True
            elif neighbor in rec_stack:
                return True
        rec_stack.remove(v)
        return False

    for node in nodes:
        if node['id'] not in visited:
            if has_cycle(node['id']): return False
    return True

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: Dict = Body(...)):
    nodes = pipeline.get('nodes', [])
    edges = pipeline.get('edges', [])
    
    return {
        'num_nodes': len(nodes),
        'num_edges': len(edges),
        'is_dag': check_is_dag(nodes, edges)
    }