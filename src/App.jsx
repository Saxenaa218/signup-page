import { useCallback, useState } from "react";
import ReactFlow, { Controls, Background, addEdge } from "reactflow";

import Signup from "./components/Signup";
import URLRenderer from "./components/URLRenderer";
import { useBluePrint } from "./hooks";

import "reactflow/dist/style.css";

export default function App() {
    const { edges, nodes, onEdgesChange, onNodesChange, urlConfig, setEdges } = useBluePrint();
    const [activeNode, setActiveNode] = useState(0);

    const onConnect = useCallback(params => setEdges(eds => addEdge(params, eds)), [setEdges]);

    const getNode = () => {
        switch (activeNode) {
            case "1":
                return <URLRenderer config={urlConfig?.trigger} onClose={() => setActiveNode(0)} />;
            case "2":
                return <Signup onClose={() => setActiveNode(0)} />;
            case "3":
                return <URLRenderer config={urlConfig?.redirectUser} onClose={() => setActiveNode(0)} />;
        }
    };

    return (
        <div className="h-screen w-screen flex">
            <div className="h-full flex-1">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onNodeClick={(event, node) => setActiveNode(node.id)}
                >
                    <Controls />
                    <Background variant="dots" gap={12} size={1} />
                </ReactFlow>
            </div>

            {activeNode > 0 && <div className="h-full w-96">{getNode()}</div>}
        </div>
    );
}
