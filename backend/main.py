# backend/main.py
from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict
from collections import deque

app = FastAPI()

# Senior Touch: Enable CORS so frontend can communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, you'd restrict this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def is_dag(nodes: List, edges: List) -> bool:
    """
    Checks if the graph is a Directed Acyclic Graph using Kahn's Algorithm.
    """
    adj = {n['id']: [] for n in nodes}
    in_degree = {n['id']: 0 for n in nodes}
    
    for e in edges:
        source = e['source']
        target = e['target']
        if source in adj:
            adj[source].append(target)
        if target in in_degree:
            in_degree[target] += 1
        
    queue = deque([n for n in in_degree if in_degree[n] == 0])
    count = 0
    
    while queue:
        u = queue.popleft()
        count += 1
        if u in adj:
            for v in adj[u]:
                if v in in_degree:
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