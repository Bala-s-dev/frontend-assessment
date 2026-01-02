from fastapi import FastAPI, Body
from typing import List, Dict
from collections import deque

app = FastAPI()

def is_dag(nodes: List, edges: List) -> bool:
    adj = {n['id']: [] for n in nodes}
    in_degree = {n['id']: 0 for n in nodes}
    
    for e in edges:
        adj[e['source']].append(e['target'])
        in_degree[e['target']] += 1
        
    queue = deque([n for n in in_degree if in_degree[n] == 0])
    count = 0
    
    while queue:
        u = queue.popleft()
        count += 1
        for v in adj[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
                
    return count == len(nodes)

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: Dict = Body(...)):
    nodes = pipeline.get('nodes', [])
    edges = pipeline.get('edges', [])
    
    return {
        'num_nodes': len(nodes),
        'num_edges': len(edges),
        'is_dag': is_dag(nodes, edges)
    }