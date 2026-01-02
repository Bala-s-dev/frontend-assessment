# backend/main.py
from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict
from collections import deque

app = FastAPI()

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

def is_dag(nodes: List[Dict], edges: List[Dict]) -> bool:
    """Check if the graph is a Directed Acyclic Graph using Kahn's Algorithm."""
    adj = {node['id']: [] for node in nodes}
    in_degree = {node['id']: 0 for node in nodes}
    
    for edge in edges:
        source, target = edge['source'], edge['target']
        if source in adj and target in adj:
            adj[source].append(target)
            in_degree[target] += 1

    queue = deque([u for u in in_degree if in_degree[u] == 0])
    visited_count = 0

    while queue:
        u = queue.popleft()
        visited_count += 1
        for v in adj[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)

    return visited_count == len(nodes)

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: Dict = Body(...)):
    nodes = pipeline.get('nodes', [])
    edges = pipeline.get('edges', [])
    
    # Calculate required metrics
    num_nodes = len(nodes)
    num_edges = len(edges)
    check_dag = is_dag(nodes, edges)
    
    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": check_dag
    }